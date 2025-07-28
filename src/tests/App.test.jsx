import { render } from "vitest-browser-react";
import { expect, test, vi } from "vitest";
import App from "../App";
import { userEvent } from "@vitest/browser/context";

// Mock data
vi.mock("../data/flashcard", () => ({
  flashcards: [
    { question: "Q1", answer: "A1" },
    { question: "Q2", answer: "A2" },
    { question: "Q3", answer: "A3" },
  ],
}));

// Prevent real shuffling
vi.mock("../utils/shuffleArray", () => ({
  shuffleArray: (arr) => arr,
}));

test("renders first flashcard and progress", async () => {
  const { getByText } = render(<App />);
  await expect.element(getByText("Q1")).toBeInTheDocument();
  await expect.element(getByText("33% • 1 of 3")).toBeInTheDocument();
});

test("navigates to next card on Next button click", async () => {
  const { getByTestId, getByText } = render(<App />);
  const nextBtn = getByTestId("next-button");

  await nextBtn.click()
  await expect.element(getByText("Q2")).toBeInTheDocument();
  await expect.element(getByText("67% • 2 of 3")).toBeInTheDocument();
});

test("navigates to previous card on Prev button click", async () => {
  const { getByTestId, getByText } = render(<App />);
  const nextBtn = getByTestId("next-button");
  const prevBtn = getByTestId("prev-button");

  await nextBtn.click();
  await prevBtn.click();

  await expect.element(getByText("Q1")).toBeInTheDocument();
});

test("handles keyboard navigation", async () => {
  const { getByText } = render(<App />);
  await userEvent.keyboard('{ArrowRight}')
  await expect.element(getByText("Q2")).toBeInTheDocument();
  await userEvent.keyboard('{ArrowLeft}')
  await expect.element(getByText("Q1")).toBeInTheDocument();
});

test("disables Prev button on first card and Next on last", async () => {
  const { getByTestId } = render(<App />);
  const nextBtn = getByTestId("next-button");
  const prevBtn =getByTestId("prev-button");

  await expect.element(prevBtn).toBeDisabled();
  await nextBtn.click();
  await nextBtn.click();
  await expect.element(nextBtn).toBeDisabled();
});
