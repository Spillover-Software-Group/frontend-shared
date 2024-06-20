import { MiniAppProvider } from "./useMiniApp";
import Screens from "./Screens";
import Screen from "./Screen";

function MiniApp({ title, Icon, children, onCloseButtonClick }) {
  return (
    <MiniAppProvider onCloseButtonClick={onCloseButtonClick}>
      <Screens title={title} Icon={Icon}>
        {children}
      </Screens>
    </MiniAppProvider>
  );
}

export { MiniApp, Screen };
