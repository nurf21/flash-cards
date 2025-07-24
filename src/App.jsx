import { useState } from "react";
import FlashCard from "./components/FlashCard"
import ProgressBar from "./components/ProgressBar";
import { flashcards } from './data/flashcard';

function App() {
  const [index, setIndex] = useState(0);

  const nextCard = () => setIndex((prev) => Math.min(prev + 1, flashcards.length - 1));
  const prevCard = () => setIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="max-w-xl mx-auto mt-10">
      <ProgressBar current={index + 1} total={flashcards.length} />
      <FlashCard
        question={flashcards[index].question}
        answer={flashcards[index].answer}
      />
      <div className="flex justify-between mt-4">
        <button onClick={prevCard} className="text-blue-500">&lt; Previous</button>
        <p>{index + 1} of {flashcards.length}</p>
        <button onClick={nextCard} className="text-blue-500">Next &gt;</button>
      </div>
    </div>
  )
}

export default App
