import { render } from "vitest-browser-react";
import { expect, test, describe } from "vitest";
import ProgressBar from "../components/ProgressBar";

describe("ProgressBar", () => {
  test("renders correct percentage and label", () => {
    const { getByText, getByRole } = render(<ProgressBar current={5} total={10} />);
    expect(getByText("50% • 5 of 10")).toBeInTheDocument();
    const progress = getByRole("progressbar");
    expect(progress).toHaveAttribute("aria-valuenow", "50");
  });

  test("clamps percentage to 100 when current > total", () => {
    const { getByText, getByRole } = render(<ProgressBar current={15} total={10} />);
    expect(getByText("100% • 15 of 10")).toBeInTheDocument();
    const progress = getByRole("progressbar");
    expect(progress).toHaveAttribute("aria-valuenow", "100");
  });

  test("clamps percentage to 0 when current < 0", () => {
    const { getByText, getByRole } = render(<ProgressBar current={-5} total={10} />);
    expect(getByText("0% • -5 of 10")).toBeInTheDocument();
    const progress = getByRole("progressbar");
    expect(progress).toHaveAttribute("aria-valuenow", "0");
  });

  test("prevents division by zero when total is 0", () => {
    const { getByText, getByRole } = render(<ProgressBar current={3} total={0} />);
    expect(getByText("100% • 3 of 0")).toBeInTheDocument(); // clamped to 100
    const progress = getByRole("progressbar");
    expect(progress).toHaveAttribute("aria-valuenow", "100");
  });

  test.each([
    [1, 4, "25%"],
    [2, 4, "50%"],
    [3, 4, "75%"],
    [4, 4, "100%"]
  ])("renders correct width for current=%i total=%i", async (current, total, expectedWidth) => {
    const { getByTestId } = render(<ProgressBar current={current} total={total} />);
    const innerBar = getByTestId("progress-fill");
    await expect.element(innerBar).toHaveStyle({ width: expectedWidth });
  });
});
