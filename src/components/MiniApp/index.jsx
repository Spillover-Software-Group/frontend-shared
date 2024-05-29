import { MiniAppProvider } from './useMiniApp'
import Screens from './Screens'
import Screen from './Screen'

function MiniApp ({ title, icon, children, onCloseButtonClick }) {
  return (
    <MiniAppProvider onCloseButtonClick={onCloseButtonClick}>
      <Screens title={title} icon={icon}>
        {children}
      </Screens>
    </MiniAppProvider>
  )
}

export { MiniApp, Screen }
