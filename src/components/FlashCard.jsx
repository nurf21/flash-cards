import { useState } from 'react';

export default function FlashCard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="border p-4 rounded shadow text-center">
      <h2 className="text-lg font-semibold">Flash Cards</h2>
      <div className="my-4 text-xl font-bold">
        {showAnswer ? answer : question}
      </div>
      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
    </div>
  );
}
