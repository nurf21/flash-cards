import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import NavigationButton from "../components/NavigationButton";

test("renders 'Next →' button when direction is 'next'", async () => {
  const { getByRole } = render(
    <NavigationButton direction="next" onClick={() => { }} disabled={false} />
  );
  const button = getByRole("button");
  await expect.element(button).toBeInTheDocument();
  await expect.element(button).toHaveTextContent("Next →");
});

test("renders '← Previous' button when direction is 'prev'", async () => {
  const { getByRole } = render(
    <NavigationButton direction="prev" onClick={() => { }} disabled={false} />
  );
  const button = getByRole("button");
  await expect.element(button).toBeInTheDocument();
  await expect.element(button).toHaveTextContent("← Previous");
});

test("button is disabled when disabled prop is true", async () => {
  const { getByRole } = render(
    <NavigationButton direction="next" onClick={() => { }} disabled />
  );
  const button = getByRole("button");
  await expect.element(button).toBeDisabled();
});
