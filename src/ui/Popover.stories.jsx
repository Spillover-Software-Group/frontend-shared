import { HelpCircle } from "lucide-react";
import { DialogTrigger, Heading } from "react-aria-components";

import { Button } from "./Button";
import { Dialog } from "./Dialog";
import { Popover } from "./Popover";

const meta = {
  component: Popover,
  args: {
    showArrow: true,
  },
};

export default meta;

export const Example = (args) => (
  <DialogTrigger>
    <Button variant="icon" aria-label="Help">
      <HelpCircle className="w-4 h-4" />
    </Button>
    <Popover {...args} className="max-w-[250px]">
      <Dialog>
        <Heading slot="title" className="text-lg font-semibold mb-2">
          Help
        </Heading>
        <p className="text-sm">
          For help accessing your account, please contact support.
        </p>
      </Dialog>
    </Popover>
  </DialogTrigger>
);
