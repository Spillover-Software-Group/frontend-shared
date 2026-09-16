import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {
  DropdownItem,
  DropdownSection,
  ListBox,
  ListBoxItem,
} from "@/components/ui/ListBox";

describe("ListBox", () => {
  it("renders each item as an option", () => {
    render(
      <ListBox aria-label="Locations">
        <ListBoxItem id="downtown">Downtown</ListBoxItem>
        <ListBoxItem id="airport">Airport</ListBoxItem>
      </ListBox>,
    );

    expect(screen.getAllByRole("option")).toHaveLength(2);
  });

  it("marks the item the user picked as selected", async () => {
    render(
      <ListBox aria-label="Locations" selectionMode="single">
        <ListBoxItem id="downtown">Downtown</ListBoxItem>
        <ListBoxItem id="airport">Airport</ListBoxItem>
      </ListBox>,
    );

    await userEvent.click(screen.getByRole("option", { name: "Airport" }));

    expect(screen.getByRole("option", { selected: true })).toHaveAccessibleName(
      "Airport",
    );
  });

  it("reports the key of the item the user picked", async () => {
    const onSelectionChange = vi.fn();
    render(
      <ListBox
        aria-label="Locations"
        selectionMode="single"
        onSelectionChange={onSelectionChange}
      >
        <ListBoxItem id="downtown">Downtown</ListBoxItem>
        <ListBoxItem id="airport">Airport</ListBoxItem>
      </ListBox>,
    );

    await userEvent.click(screen.getByRole("option", { name: "Airport" }));

    // react-aria reports a Selection, a Set subclass, so compare the keys in it.
    expect([...onSelectionChange.mock.lastCall[0]]).toEqual(["airport"]);
  });

  it("leaves a disabled item unselected when it is clicked", async () => {
    render(
      <ListBox
        aria-label="Locations"
        selectionMode="single"
        disabledKeys={["airport"]}
      >
        <ListBoxItem id="downtown">Downtown</ListBoxItem>
        <ListBoxItem id="airport">Airport</ListBoxItem>
      </ListBox>,
    );

    await userEvent.click(screen.getByRole("option", { name: "Airport" }));

    expect(
      screen.queryByRole("option", { selected: true }),
    ).not.toBeInTheDocument();
  });

  it("moves the selection to the next item on ArrowDown", async () => {
    render(
      <ListBox
        aria-label="Locations"
        selectionMode="single"
        selectionBehavior="replace"
      >
        <ListBoxItem id="downtown">Downtown</ListBoxItem>
        <ListBoxItem id="airport">Airport</ListBoxItem>
      </ListBox>,
    );

    await userEvent.tab();
    await userEvent.keyboard("{ArrowDown}");

    expect(screen.getByRole("option", { selected: true })).toHaveAccessibleName(
      "Airport",
    );
  });
});

describe("DropdownSection", () => {
  it("renders its title above the items it holds", () => {
    render(
      <ListBox aria-label="Locations" selectionMode="single">
        <DropdownSection
          title="Texas"
          items={[{ id: "austin", name: "Austin" }]}
        >
          {(location) => <DropdownItem>{location.name}</DropdownItem>}
        </DropdownSection>
      </ListBox>,
    );

    expect(screen.getByRole("group", { name: "Texas" })).toContainElement(
      screen.getByRole("option", { name: "Austin" }),
    );
  });
});
