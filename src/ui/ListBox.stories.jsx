import { ListBox, ListBoxItem } from "./ListBox";

const meta = {
  component: ListBox,
};

export default meta;

export const Example = (args) => (
  <ListBox aria-label="Ice cream flavor" {...args}>
    <ListBoxItem id="chocolate">Chocolate</ListBoxItem>
    <ListBoxItem id="mint">Mint</ListBoxItem>
    <ListBoxItem id="strawberry">Strawberry</ListBoxItem>
    <ListBoxItem id="vanilla">Vanilla</ListBoxItem>
  </ListBox>
);

Example.args = {
  onAction: null,
  selectionMode: "multiple",
};

export const DisabledItems = (args) => <Example {...args} />;
DisabledItems.args = {
  ...Example.args,
  disabledKeys: ["mint"],
};
