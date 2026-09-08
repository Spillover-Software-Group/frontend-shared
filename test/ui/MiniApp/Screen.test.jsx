import { render, screen } from "@testing-library/react";

import Screen from "@/components/ui/MiniApp/Screen";
import { MiniAppProvider } from "@/components/ui/MiniApp/useMiniApp";

describe("MiniApp Screen", () => {
  it("shows its title in the header", () => {
    render(
      <MiniAppProvider>
        <Screen title="Profile">User profile</Screen>
      </MiniAppProvider>,
    );

    expect(screen.getByText("Profile")).toBeInTheDocument();
  });

  it("renders its children in the main region", () => {
    render(
      <MiniAppProvider>
        <Screen title="Profile">User profile</Screen>
      </MiniAppProvider>,
    );

    expect(screen.getByRole("main")).toHaveTextContent("User profile");
  });

  it("drops the back control when it is told to", () => {
    const { container } = render(
      <MiniAppProvider>
        <Screen title="Profile" noBack>
          User profile
        </Screen>
      </MiniAppProvider>,
    );

    // The back control is a plain div, so it can only be found by position.
    expect(
      container.querySelector("header > div:first-child"),
    ).toBeEmptyDOMElement();
  });
});
