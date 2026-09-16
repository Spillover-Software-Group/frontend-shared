import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { a11yClickProps } from "@/components/ui/utils";

// These props are meant for a plain element, so each test supplies the role and
// the tabIndex that make that element reachable and operable by keyboard.
function Target({ onActivate }) {
  return (
    // A <button> would carry the click and key handling natively, which is the behaviour under
    // test here. The point of these props is the plain element that has none of it, so the
    // fixture has to be one.
    // biome-ignore lint/a11y/useSemanticElements: see above
    <div role="button" tabIndex={0} {...a11yClickProps(onActivate)}>
      Publish
    </div>
  );
}

describe("a11yClickProps", () => {
  it("calls the handler when the element is clicked", async () => {
    const onActivate = vi.fn();
    render(<Target onActivate={onActivate} />);

    await userEvent.click(screen.getByRole("button", { name: "Publish" }));

    expect(onActivate).toHaveBeenCalledTimes(1);
  });

  it("calls the handler when Enter is pressed on the focused element", async () => {
    const onActivate = vi.fn();
    render(<Target onActivate={onActivate} />);

    await userEvent.tab();
    await userEvent.keyboard("{Enter}");

    expect(onActivate).toHaveBeenCalledTimes(1);
  });

  it("calls the handler when Space is pressed on the focused element", async () => {
    const onActivate = vi.fn();
    render(<Target onActivate={onActivate} />);

    await userEvent.tab();
    await userEvent.keyboard(" ");

    expect(onActivate).toHaveBeenCalledTimes(1);
  });

  it("ignores keys other than Enter and Space", async () => {
    const onActivate = vi.fn();
    render(<Target onActivate={onActivate} />);

    await userEvent.tab();
    await userEvent.keyboard("a");

    expect(onActivate).not.toHaveBeenCalled();
  });
});
