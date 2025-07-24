import { useState } from "react";
import FlashCard from "./components/FlashCard"
import ProgressBar from "./components/ProgressBar";
import { flashcards } from './data/flashcard';

function App() {
  const [index, setIndex] = useState(0);

  const nextCard = () => setIndex((prev) => Math.min(prev + 1, flashcards.length - 1));
  const prevCard = () => setIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-xl mx-auto py-50">
        <ProgressBar current={index + 1} total={flashcards.length} />
        <FlashCard
          question={flashcards[index].question}
          answer={flashcards[index].answer}
        />
        <div className="flex justify-between items-center mt-6 text-sm text-gray-700 dark:text-gray-300">
          <button
            onClick={prevCard}
            disabled={index === 0}
            className="px-4 py-2 rounded hover:underline disabled:opacity-50"
          >
            &lt; Previous
          </button>
          <span>{index + 1} of {flashcards.length}</span>
          <button
            onClick={nextCard}
            disabled={index === flashcards.length - 1}
            className="px-4 py-2 rounded hover:underline disabled:opacity-50"
          >
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
