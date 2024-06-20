import { Form } from "react-aria-components";

import { Button } from "./Button";
import { Select, SelectItem, SelectSection } from "./Select";

const meta = {
  component: Select,
};

export default meta;

export const Example = (args) => (
  <Select {...args}>
    <SelectItem>Chocolate</SelectItem>
    <SelectItem id="mint">Mint</SelectItem>
    <SelectItem>Strawberry</SelectItem>
    <SelectItem>Vanilla</SelectItem>
  </Select>
);

export const DisabledItems = (args) => <Example {...args} />;
DisabledItems.args = {
  disabledKeys: ["mint"],
};

export const Sections = (args) => (
  <Select {...args}>
    <SelectSection title="Fruit">
      <SelectItem id="Apple">Apple</SelectItem>
      <SelectItem id="Banana">Banana</SelectItem>
      <SelectItem id="Orange">Orange</SelectItem>
      <SelectItem id="Honeydew">Honeydew</SelectItem>
      <SelectItem id="Grapes">Grapes</SelectItem>
      <SelectItem id="Watermelon">Watermelon</SelectItem>
      <SelectItem id="Cantaloupe">Cantaloupe</SelectItem>
      <SelectItem id="Pear">Pear</SelectItem>
    </SelectSection>
    <SelectSection title="Vegetable">
      <SelectItem id="Cabbage">Cabbage</SelectItem>
      <SelectItem id="Broccoli">Broccoli</SelectItem>
      <SelectItem id="Carrots">Carrots</SelectItem>
      <SelectItem id="Lettuce">Lettuce</SelectItem>
      <SelectItem id="Spinach">Spinach</SelectItem>
      <SelectItem id="Bok Choy">Bok Choy</SelectItem>
      <SelectItem id="Cauliflower">Cauliflower</SelectItem>
      <SelectItem id="Potatoes">Potatoes</SelectItem>
    </SelectSection>
  </Select>
);

Sections.args = {
  label: "Preferred fruit or vegetable",
};

export const Validation = (args) => (
  <Form className="flex flex-col gap-2 items-start">
    <Example {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
);

Validation.args = {
  isRequired: true,
};
