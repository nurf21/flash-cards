import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function FlashCard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const toggleAnswer = useCallback(() => setShowAnswer(prev => !prev), []);
  const cardContent = showAnswer ? answer : question;
  const buttonLabel = showAnswer ? "Hide Answer" : "Show Answer";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={showAnswer ? "answer" : "question"}
        initial={{ opacity: 0, rotateY: -90 }}
        animate={{ opacity: 1, rotateY: 0 }}
        exit={{ opacity: 0, rotateY: 90 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-5 rounded-2xl shadow-md transition-colors duration-300"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
          JavaScript Quiz
        </h2>

        <div className="min-h-[100px] text-base sm:text-lg text-center flex items-center justify-center font-medium">
          {cardContent}
        </div>

        <button
          onClick={toggleAnswer}
          className="mt-6 mx-auto block w-full sm:w-auto px-6 py-2 rounded-xl cursor-pointer bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition"
        >
          {buttonLabel}
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
