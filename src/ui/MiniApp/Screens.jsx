import HomeScreen from "./HomeScreen";
import { useMiniApp } from "./useMiniApp";

function Screens({ title, Icon, children }) {
  const { currentScreen } = useMiniApp();

  return (
    <div className="w-full h-full flex flex-col gap-2 pb-2 text-gray-800 bg-white">
      {currentScreen || (
        <HomeScreen title={title} Icon={Icon}>
          {children}
        </HomeScreen>
      )}
    </div>
  );
}

export default Screens;
