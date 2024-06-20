import { Form } from "react-aria-components";

import { Button } from "./Button";
import { TextField } from "./TextField";

const meta = {
  component: TextField,
  args: {
    label: "Name",
  },
};

export default meta;

export const Example = (args) => <TextField {...args} />;

export const Validation = (args) => (
  <Form className="flex flex-col gap-2 items-start">
    <TextField {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
);

Validation.args = {
  isRequired: true,
};
