import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import FlashCard from "../components/FlashCard";

test("render question, answer, and button label correctly", async () => {
  const { getByRole, getByText } = render(
    <FlashCard
      question="What is JavaScript?"
      answer="A programming language"
    />,
  );

  await expect.element(getByText("What is JavaScript?")).toBeInTheDocument();
  await expect.element(getByText("Show Answer")).toBeInTheDocument();

  await getByRole("button").click();

  await expect.element(getByText("A programming language")).toBeInTheDocument();
  await expect.element(getByText("Hide Answer")).toBeInTheDocument();

  await getByRole("button").click();

  await expect.element(getByText("What is JavaScript?")).toBeInTheDocument();
  await expect.element(getByText("Show Answer")).toBeInTheDocument();
});
