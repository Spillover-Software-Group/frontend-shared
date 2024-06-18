import { CustomerReports } from "./CustomerReports";
import Provider from "@/Provider";

export default {
  component: CustomerReports,
  args: {
    showBusinessSelect: true,
    defaultBusinessId: null,
  },
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <Provider mode="development" ownerId="1">
        <div className="h-screen">
          <Story />
        </div>
      </Provider>
    ),
  ],
};

export const Example = (args) => <CustomerReports {...args} />;
