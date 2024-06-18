import { Section } from "./Section";

const meta = {
  component: Section,
  args: {
    title: "Section title",
    subtitle: "Section subtitle",
  },
};

export default meta;

export const Example = (args) => (
  <div className="sfs-isolate">
    <Section {...args}>
      <p>Section content</p>
    </Section>
  </div>
);
