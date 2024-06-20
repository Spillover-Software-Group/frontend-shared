import { a11yClickProps } from "@/utils";
import Screen from "./Screen";
import { useMiniApp } from "./useMiniApp";

function HomeScreen({ title, Icon, children }) {
  const { setCurrentScreen } = useMiniApp();

  return (
    <Screen title={title} Icon={Icon} noBack>
      <div className="w-full h-full flex flex-col gap-2 px-2">
        {children.map((child, index) => {
          const { Icon: ChildIcon } = child.props;

          return (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: list is stable
              key={index}
              {...a11yClickProps(() => setCurrentScreen(child))}
              className="flex flex-row items-center gap-2 p-3 text-md bg-gray-200 rounded-md cursor-pointer transition duration-200 hover:bg-gray-300"
            >
              {ChildIcon && <ChildIcon />}
              <p className="m-0">{child.props.title}</p>
            </div>
          );
        })}
      </div>
    </Screen>
  );
}

export default HomeScreen;
