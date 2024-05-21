import { MiniAppProvider } from './useMiniApp'
import Screens from './Screens'
import Screen from './Screen'

function MiniApp ({ title, icon, children }) {
  return (
    <MiniAppProvider>
      <Screens title={title} icon={icon}>
        {children}
      </Screens>
    </MiniAppProvider>
  )
}

export { MiniApp, Screen }
