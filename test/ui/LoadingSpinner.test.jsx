import { act, render, screen } from "@testing-library/react";

import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

describe("LoadingSpinner", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("starts on the first waiting message", () => {
    render(<LoadingSpinner />);

    expect(screen.getByText("Loading, please wait...")).toBeInTheDocument();
  });

  it("moves to the next message after one interval", () => {
    render(<LoadingSpinner msgInterval={1000} />);

    act(() => vi.advanceTimersByTime(1000));

    expect(screen.getByText("Still loading...")).toBeInTheDocument();
  });

  it("holds on the last message once it runs out of them", () => {
    render(<LoadingSpinner msgInterval={1000} />);

    act(() => vi.advanceTimersByTime(10000));

    expect(
      screen.getByText("This is taking longer than expected..."),
    ).toBeInTheDocument();
  });

  it("waits the interval it is given before changing the message", () => {
    render(<LoadingSpinner msgInterval={5000} />);

    act(() => vi.advanceTimersByTime(4999));

    expect(screen.getByText("Loading, please wait...")).toBeInTheDocument();
  });
});
