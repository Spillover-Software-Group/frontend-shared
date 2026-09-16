import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MiniApp, Screen } from "@/components/ui/MiniApp";

function Example(props) {
  return (
    <MiniApp title="Example" {...props}>
      <Screen title="Profile">User profile</Screen>
      <Screen title="Settings">Settings menu</Screen>
    </MiniApp>
  );
}

describe("MiniApp", () => {
  it("opens on a menu of the screens it was given", () => {
    render(<Example />);

    expect(screen.getByText("Profile")).toBeInTheDocument();
  });

  it("opens the screen the user picks from the menu", async () => {
    render(<Example />);

    await userEvent.click(screen.getByText("Profile"));

    expect(screen.getByRole("main")).toHaveTextContent("User profile");
  });

  it("returns to the menu from the back control of a screen", async () => {
    const { container } = render(<Example />);

    await userEvent.click(screen.getByText("Profile"));
    // The back control is a plain div, so it can only be found by position.
    await userEvent.click(container.querySelector("header > div:first-child"));

    expect(screen.getByRole("main")).toHaveTextContent("Settings");
  });

  it("calls the close handler it was given from the close control", async () => {
    const onCloseButtonClick = vi.fn();
    const { container } = render(
      <Example onCloseButtonClick={onCloseButtonClick} />,
    );

    await userEvent.click(container.querySelector("header > div:last-child"));

    expect(onCloseButtonClick).toHaveBeenCalledTimes(1);
  });
});
