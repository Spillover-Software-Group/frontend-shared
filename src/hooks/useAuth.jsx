import { useContext, createContext } from 'react'
import { DateTime } from 'luxon'
import { toast } from 'react-toastify'

import config from '@/config'
import useLocalStorage, { getStoredValue, storeValue } from './useLocalStorage'

class TokenData {
  constructor (data) {
    this.accessToken = data.accessToken
    this.expiresAt = data.expiresAt
    this.ownerId = data.ownerId
  }

  static fromOAuthResponse (data, ownerId) {
    return new TokenData({
      accessToken: data.access_token,
      expiresAt: DateTime.now().plus({ seconds: data.expires_in }),
      ownerId
    })
  }

  static fromStored (data) {
    return new TokenData({
      ...data,
      expiresAt: DateTime.fromISO(data.expiresAt)
    })
  }

  get dataForStorage () {
    return {
      accessToken: this.accessToken,
      expiresAt: this.expiresAt.toISO(),
      ownerId: this.ownerId
    }
  }

  get expiresIn () {
    return this.expiresAt.diffNow()
  }

  get isExpired () {
    return this.expiresIn.as('milliseconds') <= 0
  }

  get isValid () {
    return !this.isExpired
  }
}

const tokenDataStorageKey = 'sfsAuthTokenData'

function handleSSOCallback (payload) {
  if (payload.error) {
    throw new Error(`SSO callback error: ${payload.error}`)
  } else {
    return payload
  }
}

function silentAuth (url) {
  return new Promise((resolve, reject) => {
    const iframe = document.createElement('iframe')
    iframe.src = url
    iframe.classList.add('sfs-border-0', 'sfs-w-0', 'sfs-h-0', 'sfs-absolute', 'sfs-invisible')
    iframe.width = 0
    iframe.height = 0

    const handleMessage = (e) => {
      if (e.source !== iframe.contentWindow) return

      iframe.remove()

      const { data: { type, payload } } = e

      if (config.isDev) console.log('Message from silent auth:', type, payload)

      switch (type) {
        case 'UNAUTHENTICATED':
          window.removeEventListener('message', handleMessage)
          reject(new Error('SSO_UNAUTHENTICATED'))
          break
        case 'SSO_CALLBACK':
          window.removeEventListener('message', handleMessage)
          resolve(handleSSOCallback(payload))
          break
        default:
          console.error('Unknown message type', type, payload)
      }
    }

    window.addEventListener('message', handleMessage)

    document.body.appendChild(iframe)
  })
}

function loginPopup (url) {
  return new Promise((resolve, reject) => {
    const loginWindow = window.open(url, 'ssoLogin', 'width=600,height=480')

    if (!loginWindow) return reject(new Error('Failed to open login popup.'))

    // If the user closes the popup, reject the promise.
    const windowClosedCheck = setInterval(() => {
      if (loginWindow.closed) {
        clearInterval(windowClosedCheck)
        reject(new Error('Login popup closed.'))
      }
    }, 1000)

    const handleMessage = (e) => {
      if (e.source !== loginWindow) return

      const { data: { type, payload } } = e

      if (config.isDev) console.log('Message from login popup:', type, payload)

      if (type === 'SSO_CALLBACK') {
        clearInterval(windowClosedCheck)
        loginWindow.close()
        window.removeEventListener('message', handleMessage)
        resolve(handleSSOCallback(payload))
      }
    }

    window.addEventListener('message', handleMessage)
  })
}

// Refreshes the access token first by trying a silent auth,
// then by opening a login popup if silent auth fails because the user is unauthenticated.
async function refreshAccessToken ({ mode, ownerId }) {
  const url = mode === 'development' ? config.ssoDevUrl : config.ssoUrl

  let response

  try {
    response = await silentAuth(url)
  } catch (error) {
    if (error.message === 'SSO_UNAUTHENTICATED') {
      const loginPromise = loginPopup(url)

      response = await toast.promise(
        loginPromise,
        {
          pending: 'Please login to use this feature',
          success: 'Successfully logged in!',
          error: 'Failed to login. You need to login to use this feature.'
        }, { position: 'bottom-right' }
      )
    } else {
      throw error
    }
  }

  const newTokenData = TokenData.fromOAuthResponse(response, ownerId)
  storeValue(tokenDataStorageKey, newTokenData.dataForStorage)

  return newTokenData.accessToken
}

// Use when you need to access the access token directly.
function getAccessToken ({ ownerId }) {
  const storedTokenData = getStoredValue(tokenDataStorageKey)

  if (storedTokenData && storedTokenData.ownerId === ownerId) {
    const { accessToken } = TokenData.fromStored(storedTokenData)

    return accessToken
  } else {
    return null
  }
}

const authContext = createContext({
  isAuthenticated: false,
  tokenData: null,
  reauth: () => { }
})

// Provider component that wraps your app and makes auth object
// available to any child component that calls useAuth().
function AuthProvider ({ children, mode, ownerId }) {
  const auth = useProvideAuth({ mode, ownerId })
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

// Hook for child components to get the auth object
// and re-render when it changes.
function useAuth () {
  return useContext(authContext)
}

// Provider hook that creates auth object and handles state.
function useProvideAuth ({ mode, ownerId }) {
  let tokenData

  const [storedTokenData, storeTokenData] =
    useLocalStorage(tokenDataStorageKey, null, { sync: true })

  const reauth = () => {
    if (config.isDev) console.log('Reauthenticating...')
    storeTokenData(null)
    refreshAccessToken({ mode, ownerId })
  }

  if (storedTokenData) {
    if (ownerId !== storedTokenData.ownerId) {
      reauth()
    } else {
      tokenData = TokenData.fromStored(storedTokenData)
    }
  }

  const isAuthenticated = !!tokenData?.accessToken

  return {
    accessToken: tokenData?.accessToken,
    isAuthenticated,
    reauth
  }
}

export default useAuth

export { useAuth, AuthProvider, getAccessToken, refreshAccessToken }
