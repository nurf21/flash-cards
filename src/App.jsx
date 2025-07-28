import { useState, useEffect, useMemo } from "react";
import FlashCard from "./components/FlashCard";
import ProgressBar from "./components/ProgressBar";
import NavigationButton from "./components/NavigationButton";
import { flashcards as initialFlashcards } from "./data/flashcard";
import { shuffleArray } from "./utils/shuffleArray";

function App() {
  const flashcards = useMemo(() => shuffleArray(initialFlashcards), []);
  const [index, setIndex] = useState(0);

  const nextCard = () =>
    setIndex((prev) => Math.min(prev + 1, flashcards.length - 1));
  const prevCard = () => setIndex((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextCard();
      if (e.key === "ArrowLeft") prevCard();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 py-6 font-mono text-gray-900 sm:px-6 dark:bg-gray-900 dark:text-gray-100">
      <main className="w-full max-w-2xl">
        <ProgressBar current={index + 1} total={flashcards.length} />
        <FlashCard
          key={index}
          question={flashcards[index].question}
          answer={flashcards[index].answer}
        />
        <nav className="mt-6 flex w-full items-center justify-between gap-3 text-sm text-gray-700 dark:text-gray-300">
          <NavigationButton
            onClick={prevCard}
            direction={"prev"}
            disabled={index === 0}
          />
          <NavigationButton
            onClick={nextCard}
            direction={"next"}
            disabled={index === flashcards.length - 1}
          />
        </nav>
      </main>
    </div>
  );
}

export default App;
