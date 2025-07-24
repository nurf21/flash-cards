import { useState } from "react";
import FlashCard from "./components/FlashCard"
import { flashcards } from './data/flashcard';

function App() {
  const [index, setIndex] = useState(0);
  
  return (
    <div className="max-w-xl mx-auto mt-10">
      <FlashCard
        question={flashcards[index].question}
        answer={flashcards[index].answer}
      />
    </div>
  )
}

export default App
