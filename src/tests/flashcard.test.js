import { expect, test } from "vitest";
import { flashcards } from "../data/flashcard";

test('flashcards are not empty', () => {
  expect(flashcards.length).greaterThan(0);
})