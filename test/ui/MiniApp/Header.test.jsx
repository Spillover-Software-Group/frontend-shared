import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "@/components/ui/MiniApp/Header";
import { MiniAppProvider } from "@/components/ui/MiniApp/useMiniApp";

// The back and close controls are plain divs with no role or accessible name,
// so their position in the header is the only handle a test has on them.
function control(container, position) {
  return container.querySelector(`header > div:${position}-child`);
}

describe("MiniApp Header", () => {
  it("shows the title it is given", () => {
    render(
      <MiniAppProvider>
        <Header title="Settings" />
      </MiniAppProvider>,
    );

    expect(screen.getByText("Settings")).toBeInTheDocument();
  });

  it("renders the icon it is given beside the title", () => {
    function Cog() {
      return <span>cog</span>;
    }

    render(
      <MiniAppProvider>
        <Header title="Settings" Icon={Cog} />
      </MiniAppProvider>,
    );

    expect(screen.getByText("cog")).toBeInTheDocument();
  });

  it("calls the close handler when its close control is clicked", async () => {
    const onCloseButtonClick = vi.fn();
    const { container } = render(
      <MiniAppProvider onCloseButtonClick={onCloseButtonClick}>
        <Header title="Settings" />
      </MiniAppProvider>,
    );

    await userEvent.click(control(container, "last"));

    expect(onCloseButtonClick).toHaveBeenCalledTimes(1);
  });

  it("offers no close control when no close handler was given", () => {
    const { container } = render(
      <MiniAppProvider>
        <Header title="Settings" />
      </MiniAppProvider>,
    );

    expect(container.querySelectorAll("header > div")).toHaveLength(2);
  });
});
