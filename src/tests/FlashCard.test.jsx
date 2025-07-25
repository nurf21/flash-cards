import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import FlashCard from "../components/FlashCard";
import { page } from "@vitest/browser/context";

test('shows the question text when showAnswer is false', async () => {
  const { getByText } = render(
    <FlashCard
      question="What is JS?"
      answer="A programming language"
    />
  );
  await expect.element(getByText("What is JS?")).toBeInTheDocument();
});

test('calls onClick when flashcard is clicked', async () => {
  const { getByRole, getByText } = render(
    <FlashCard
      question="What is JavaScript?"
      answer="A programming language"
    />
  );

  await getByRole('button').click();
  await expect.element(getByText("A programming language")).toBeInTheDocument();
});
