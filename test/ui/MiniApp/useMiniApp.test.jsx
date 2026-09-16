import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {
  MiniAppProvider,
  useMiniApp,
} from "@/components/ui/MiniApp/useMiniApp";

function Probe() {
  const { currentScreen, setCurrentScreen, goHome, onCloseButtonClick } =
    useMiniApp();

  return (
    <>
      <p>Showing {currentScreen ?? "home"}</p>
      <button type="button" onClick={() => setCurrentScreen("settings")}>
        Open settings
      </button>
      <button type="button" onClick={goHome}>
        Go home
      </button>
      <button type="button" onClick={onCloseButtonClick}>
        Close
      </button>
    </>
  );
}

describe("MiniAppProvider", () => {
  it("starts with no screen of its own selected", () => {
    render(
      <MiniAppProvider>
        <Probe />
      </MiniAppProvider>,
    );

    expect(screen.getByText("Showing home")).toBeInTheDocument();
  });

  it("hands the selected screen back to its descendants", async () => {
    render(
      <MiniAppProvider>
        <Probe />
      </MiniAppProvider>,
    );

    await userEvent.click(
      screen.getByRole("button", { name: "Open settings" }),
    );

    expect(screen.getByText("Showing settings")).toBeInTheDocument();
  });

  it("drops the selected screen when a descendant goes home", async () => {
    render(
      <MiniAppProvider>
        <Probe />
      </MiniAppProvider>,
    );

    await userEvent.click(
      screen.getByRole("button", { name: "Open settings" }),
    );
    await userEvent.click(screen.getByRole("button", { name: "Go home" }));

    expect(screen.getByText("Showing home")).toBeInTheDocument();
  });

  it("passes its close handler down to its descendants", async () => {
    const onCloseButtonClick = vi.fn();
    render(
      <MiniAppProvider onCloseButtonClick={onCloseButtonClick}>
        <Probe />
      </MiniAppProvider>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Close" }));

    expect(onCloseButtonClick).toHaveBeenCalledTimes(1);
  });
});
