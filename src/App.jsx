import { useState } from "react";
import FlashCard from "./components/FlashCard"
import ProgressBar from "./components/ProgressBar";
import { flashcards } from './data/flashcard';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [index, setIndex] = useState(0);

  const nextCard = () => setIndex((prev) => Math.min(prev + 1, flashcards.length - 1));
  const prevCard = () => setIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 ease-in-out">
      <main className="max-w-xl mx-auto py-50">
        <ProgressBar current={index + 1} total={flashcards.length} />
        <AnimatePresence mode="wait">
          <FlashCard
            key={index}
            question={flashcards[index].question}
            answer={flashcards[index].answer}
          />
        </AnimatePresence>
        <div className="flex justify-between items-center mt-6 text-sm text-gray-700 dark:text-gray-300">
          <button
            onClick={prevCard}
            disabled={index === 0}
            className="px-4 py-2 hover:underline disabled:opacity-40 transition"
          >
            &lt; Previous
          </button>
          <span className="pr-3.75">{index + 1} of {flashcards.length}</span>
          <button
            onClick={nextCard}
            disabled={index === flashcards.length - 1}
            className="px-4 py-2 hover:underline disabled:opacity-40 transition"
          >
            Next &gt;
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
