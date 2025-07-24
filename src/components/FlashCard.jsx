import { useState } from 'react';
import { motion } from 'framer-motion';

export default function FlashCard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <motion.div
      key={showAnswer ? "answer" : "question"}
      initial={{ opacity: 0, rotateY: -90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: 90 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-2xl shadow-md transition-colors duration-300"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Flash Card</h2>
      <div className="min-h-[100px] text-lg text-center flex items-center justify-center font-medium">
        {showAnswer ? answer : question}
      </div>
      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="mt-6 mx-auto block px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 transition"
      >
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
    </motion.div>
  );
}
