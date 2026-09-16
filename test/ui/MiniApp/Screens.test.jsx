import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Screen from "@/components/ui/MiniApp/Screen";
import Screens from "@/components/ui/MiniApp/Screens";
import { MiniAppProvider } from "@/components/ui/MiniApp/useMiniApp";

function Example() {
  return (
    <MiniAppProvider>
      <Screens title="Example">
        <Screen title="Profile">User profile</Screen>
        <Screen title="Settings">Settings menu</Screen>
      </Screens>
    </MiniAppProvider>
  );
}

describe("MiniApp Screens", () => {
  it("starts on the home screen", () => {
    render(<Example />);

    expect(screen.getByRole("main")).toHaveTextContent("Profile");
  });

  it("swaps the home screen for the one the user opens", async () => {
    render(<Example />);

    await userEvent.click(screen.getByText("Settings"));

    expect(screen.getByRole("main")).toHaveTextContent("Settings menu");
  });

  it("leaves the other screens behind once one is open", async () => {
    render(<Example />);

    await userEvent.click(screen.getByText("Settings"));

    expect(screen.queryByText("Profile")).not.toBeInTheDocument();
  });
});
