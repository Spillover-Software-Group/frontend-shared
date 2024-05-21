import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'
import { createContext, useContext, useEffect, useState } from 'react'
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { useMutation } from '@apollo/client/react'

import useAuth from './useAuth'
import config from '@/config'

const cache = new InMemoryCache()

async function setupClient ({ mode, accessToken, reauth }) {
  const uri = mode === 'development' ? config.engageGraphqlDevEndpoint : config.engageGraphqlEndpoint

  // This replaces `createHttpLink` to allow multipart (file upload) requests.
  const httpLink = createUploadLink({ uri })

  const authLink = setContext((_, { headers }) => {
    const authorization = accessToken ? `Accounts ${accessToken}` : ''

    return {
      headers: {
        ...headers,
        authorization
      }
    }
  })

  // Re-authenticate on auth errors.
  const errorLink = onError(({ networkError }) => {
    if (!networkError) return

    console.error(networkError)
    if (networkError.statusCode === 401) reauth()
  })

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, authLink, httpLink]),
    cache
  })

  return client
}

const EngageContext = createContext({
  apolloClient: null
})

function EngageProvider ({ children, mode }) {
  const { isAuthenticated, accessToken, reauth } = useAuth()

  if (!isAuthenticated) return <h2>Not authenticated. Try refreshing the page.</h2>

  const [client, setClient] = useState(null)

  useEffect(() => {
    async function init () {
      setClient(await setupClient({ mode, accessToken, reauth }))
    }

    init().catch(console.error)
  }, [mode, accessToken])

  if (!client) return <h2>Initializing...</h2>

  return (
    <EngageContext.Provider value={{ client }}>
      {children}
    </EngageContext.Provider>
  )
}

function useEngage () {
  const context = useContext(EngageContext)

  if (!context) {
    throw new Error('useEngage must be used within an EngageProvider')
  }

  return context
}

function useEngageMutation (mutation, options = {}) {
  const { client } = useEngage()
  return useMutation(mutation, { ...options, client })
}

export { EngageProvider, useEngage, useEngageMutation }
