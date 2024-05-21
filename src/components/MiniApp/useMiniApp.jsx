import { createContext, useContext, useState } from 'react'

const MiniAppContext = createContext({
  currentScreen: null
})

function useMiniApp () {
  const context = useContext(MiniAppContext)

  if (!context) {
    throw new Error('useMiniApp must be used within a MiniAppProvider')
  }

  return context
}

function MiniAppProvider ({ children }) {
  const [currentScreen, setCurrentScreen] = useState(null)

  const goHome = () => setCurrentScreen(null)

  return (
    <MiniAppContext.Provider value={{ currentScreen, setCurrentScreen, goHome }}>
      {children}
    </MiniAppContext.Provider>
  )
}

export { useMiniApp, MiniAppProvider }
