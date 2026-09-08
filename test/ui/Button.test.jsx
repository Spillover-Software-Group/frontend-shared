import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "@/components/ui/Button";

describe("Button", () => {
  it("renders its children as the accessible name of a button", () => {
    render(<Button>Save changes</Button>);

    expect(
      screen.getByRole("button", { name: "Save changes" }),
    ).toBeInTheDocument();
  });

  it("reports a press to its onPress handler when clicked", async () => {
    const onPress = vi.fn();
    render(<Button onPress={onPress}>Save changes</Button>);

    await userEvent.click(screen.getByRole("button", { name: "Save changes" }));

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("is disabled while it is loading", () => {
    render(<Button isLoading>Save changes</Button>);

    expect(screen.getByRole("button", { name: "Save changes" })).toBeDisabled();
  });
});
