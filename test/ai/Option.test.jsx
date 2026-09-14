import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Option from "@/ai/Option";

describe("Option", () => {
  it("shows the text Engage generated", () => {
    render(<Option option="A friendlier version" type="make_friendlier" />);

    expect(screen.getByText("A friendlier version")).toBeInTheDocument();
  });

  it("reports the text and the tool it came from when it is picked", async () => {
    const onClick = vi.fn();
    render(
      <Option
        option="A friendlier version"
        type="make_friendlier"
        onClick={onClick}
      />,
    );

    await userEvent.click(screen.getByText("A friendlier version"));

    expect(onClick).toHaveBeenCalledWith(
      "A friendlier version",
      "make_friendlier",
    );
  });

  // The option is a plain div carrying `a11yClickProps`, whose key handler can
  // only run on a focused element. Without a role and a tabIndex it never takes
  // focus, so picking an option is mouse only.
  // https://github.com/Spillover-Software-Group/frontend-shared/issues/5
  it("[BUG #5] cannot be reached by keyboard, so Enter never picks it", async () => {
    const onClick = vi.fn();
    render(
      <Option
        option="A friendlier version"
        type="make_friendlier"
        onClick={onClick}
      />,
    );

    await userEvent.tab();
    await userEvent.keyboard("{Enter}");

    expect(onClick).not.toHaveBeenCalled();
  });
});
