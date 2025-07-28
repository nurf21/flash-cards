import { useState, useEffect, useMemo } from "react";
import FlashCard from "./components/FlashCard";
import ProgressBar from "./components/ProgressBar";
import { flashcards as initialFlashcards } from "./data/flashcard";

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
  }, []);

  return (
    <div className="min-h-screen font-mono bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center px-4 py-6 sm:px-6">
      <main className="w-full max-w-2xl">
        <ProgressBar current={index + 1} total={flashcards.length} />
        <FlashCard
          key={index}
          question={flashcards[index].question}
          answer={flashcards[index].answer}
        />
        <nav className="flex justify-between items-center w-full mt-6 gap-3 text-sm text-gray-700 dark:text-gray-300">
          <button
            onClick={prevCard}
            disabled={index === 0}
            className="w-full sm:w-auto px-4 py-2 text-blue-600 dark:text-blue-400 cursor-pointer disabled:opacity-50 transition"
          >
            &lt; Previous
          </button>
          <button
            onClick={nextCard}
            disabled={index === flashcards.length - 1}
            className="w-full sm:w-auto px-4 py-2 text-blue-600 dark:text-blue-400 cursor-pointer disabled:opacity-50 transition"
          >
            Next &gt;
          </button>
        </nav>
      </main>
    </div>
  );
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default App;
