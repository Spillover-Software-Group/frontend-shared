import { render, screen } from "@testing-library/react";

import { Section } from "@/components/ui/Section";

describe("Section", () => {
  it("announces its title as a heading", () => {
    render(<Section title="Reviews">body</Section>);

    expect(
      screen.getByRole("heading", { level: 2, name: "Reviews" }),
    ).toBeInTheDocument();
  });

  it("shows its subtitle next to the title", () => {
    render(
      <Section title="Reviews" subtitle="last 30 days">
        body
      </Section>,
    );

    expect(screen.getByText("last 30 days")).toBeInTheDocument();
  });

  it("leaves the subtitle out when none is given", () => {
    render(<Section title="Reviews">body</Section>);

    expect(screen.queryByText("last 30 days")).not.toBeInTheDocument();
  });

  it("renders its children below the header", () => {
    render(<Section title="Reviews">Nothing to show yet</Section>);

    expect(screen.getByText("Nothing to show yet")).toBeInTheDocument();
  });
});
