import { useState } from "react";
import FlashCard from "./components/FlashCard"
import ProgressBar from "./components/ProgressBar";
import { flashcards } from './data/flashcard';

function App() {
  const [index, setIndex] = useState(0);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <ProgressBar current={index + 1} total={flashcards.length} />
      <FlashCard
        question={flashcards[index].question}
        answer={flashcards[index].answer}
      />
    </div>
  )
}

export default App
