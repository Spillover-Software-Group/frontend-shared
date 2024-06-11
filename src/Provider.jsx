import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'

import { AuthProvider } from './hooks/useAuth'
import { EngageProvider } from './hooks/useEngage'
import { AccountsProvider } from './hooks/useAccounts'
import { OptionsProvider } from './hooks/useOptions'

function Provider({ ownerId, senalysisBusinessId, spilloverBusinessId, children, mode = 'production' }) {
  const options = {
    mode,
    ownerId,
    senalysisBusinessId,
    spilloverBusinessId
  }

  return (
    <OptionsProvider options={options}>
      <AuthProvider mode={mode} ownerId={ownerId}>
        <AccountsProvider mode={mode} ownerId={ownerId}>
          <EngageProvider mode={mode} ownerId={ownerId}>
            <div className='sfs-isolate sfs-h-full'>
              {children}
              <ToastContainer />
            </div>
          </EngageProvider>
        </AccountsProvider>
      </AuthProvider>
    </OptionsProvider>
  )
}

export default Provider
