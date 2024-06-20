import { WandSparklesIcon, UserIcon, CogIcon } from "lucide-react";

import { MiniApp, Screen } from "./MiniApp";

const meta = {
  component: MiniApp,
  decorators: [
    (Story) => (
      <div className="sfs-isolate">
        <div className="w-[240px] border rounded-md shadow-sm">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

export const Example = () => (
  <MiniApp
    title="Example"
    Icon={WandSparklesIcon}
    onCloseButtonClick={() => console.log("Close button clicked")}
  >
    <Screen title="Profile" Icon={UserIcon}>
      User profile
    </Screen>

    <Screen title="Settings" Icon={CogIcon}>
      Settings menu
    </Screen>

    <Screen title="AI" Icon={WandSparklesIcon}>
      AI stuff
    </Screen>
  </MiniApp>
);
