import { BusinessSelect } from "./BusinessSelect";
import { AccountsProvider } from "@/hooks/useAccounts";

export default {
  component: BusinessSelect,
  decorators: [
    (Story) => (
      <AccountsProvider mode="development">
        <Story />
      </AccountsProvider>
    ),
  ],
};

export const Example = (args) => <BusinessSelect {...args} />;
