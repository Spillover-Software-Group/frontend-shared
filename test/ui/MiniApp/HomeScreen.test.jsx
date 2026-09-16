import { render, screen } from "@testing-library/react";

import HomeScreen from "@/components/ui/MiniApp/HomeScreen";
import Screen from "@/components/ui/MiniApp/Screen";
import { MiniAppProvider } from "@/components/ui/MiniApp/useMiniApp";

function Home({ title = "Example" } = {}) {
  return (
    <MiniAppProvider>
      <HomeScreen title={title}>
        <Screen title="Profile">User profile</Screen>
        <Screen title="Settings">Settings menu</Screen>
      </HomeScreen>
    </MiniAppProvider>
  );
}

describe("MiniApp HomeScreen", () => {
  it("shows its own title in the header", () => {
    render(<Home title="Example" />);

    expect(screen.getByText("Example")).toBeInTheDocument();
  });

  it("lists the title of every screen it was given", () => {
    render(<Home />);

    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });

  it("renders the icon of a screen next to its entry", () => {
    function User() {
      return <span>user</span>;
    }

    render(
      <MiniAppProvider>
        <HomeScreen title="Example">
          <Screen title="Profile" Icon={User}>
            User profile
          </Screen>
          <Screen title="Settings">Settings menu</Screen>
        </HomeScreen>
      </MiniAppProvider>,
    );

    expect(screen.getByText("user")).toBeInTheDocument();
  });

  it("keeps the content of the listed screens hidden", () => {
    render(<Home />);

    expect(screen.queryByText("User profile")).not.toBeInTheDocument();
  });

  it("shows no back control of its own", () => {
    const { container } = render(<Home />);

    // The back control is a plain div, so it can only be found by position.
    expect(
      container.querySelector("header > div:first-child"),
    ).toBeEmptyDOMElement();
  });
});
