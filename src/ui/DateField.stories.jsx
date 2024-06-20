import { Form } from "react-aria-components";

import { Button } from "./Button";
import { DateField } from "./DateField";

const meta = {
  component: DateField,
  args: {
    label: "Event date",
  },
};

export default meta;

export const Example = (args) => <DateField {...args} />;

export const Validation = (args) => (
  <Form className="flex flex-col gap-2 items-start">
    <DateField {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
);

Validation.args = {
  isRequired: true,
};
