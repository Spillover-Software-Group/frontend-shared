import { Form } from "react-aria-components";

import { Button } from "./Button";
import { DateRangePicker } from "./DateRangePicker";

const meta = {
  component: DateRangePicker,
  args: {
    label: "Trip dates",
  },
};

export default meta;

export const Example = (args) => <DateRangePicker {...args} />;

export const Validation = (args) => (
  <Form className="flex flex-col gap-2 items-start">
    <DateRangePicker {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
);

Validation.args = {
  isRequired: true,
};
