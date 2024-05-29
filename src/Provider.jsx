import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'

import { AuthProvider } from './hooks/useAuth'
import { EngageProvider } from './hooks/useEngage'
import { OptionsProvider } from './hooks/useOptions'

function Provider ({ ownerId, senalysisBusinessId, spilloverBusinessId, children, mode = 'production' }) {
  const options = {
    mode,
    ownerId,
    senalysisBusinessId,
    spilloverBusinessId
  }

  return (
    <OptionsProvider options={options}>
      <AuthProvider mode={mode} ownerId={ownerId}>
        <EngageProvider mode={mode} ownerId={ownerId}>
          {children}

          <ToastContainer />
        </EngageProvider>
      </AuthProvider>
    </OptionsProvider>
  )
}

export default Provider
