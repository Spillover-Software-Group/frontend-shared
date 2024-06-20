import { Button } from "./Button";
import { DateField } from "./DateField";
import { Form } from "./Form";
import { TextField } from "./TextField";

const meta = {
  component: Form,
};

export default meta;

export const Example = (args) => (
  <Form {...args}>
    <TextField label="Email" name="email" type="email" isRequired />
    <DateField label="Birth date" isRequired />
    <div className="flex gap-2">
      <Button type="submit">Submit</Button>
      <Button type="reset" variant="secondary">
        Reset
      </Button>
    </div>
  </Form>
);
