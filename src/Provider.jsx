import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'

import { AuthProvider } from './hooks/useAuth'
import { EngageProvider } from './hooks/useEngage'
import { OptionsProvider } from './hooks/useOptions'

function Provider ({ mode = 'production', ownerId, senalysisBusinessId, children }) {
  const options = {
    mode,
    senalysisBusinessId
  }

  return (
    <OptionsProvider options={options}>
      <AuthProvider mode={mode} ownerId={ownerId}>
        <EngageProvider mode={mode}>
          {children}

          <ToastContainer />
        </EngageProvider>
      </AuthProvider>
    </OptionsProvider>
  )
}

export default Provider
