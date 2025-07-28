import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FlashCard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const toggleAnswer = useCallback(() => setShowAnswer((prev) => !prev), []);
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
        className="w-full max-w-2xl rounded-2xl bg-white p-5 text-gray-900 shadow-md transition-colors duration-300 dark:bg-gray-800 dark:text-gray-100"
      >
        <h2 className="mb-4 text-center text-xl font-bold sm:text-2xl">
          JavaScript Quiz
        </h2>

        <div className="flex min-h-[100px] items-center justify-center text-center text-base font-medium sm:text-lg">
          {cardContent}
        </div>

        <button
          onClick={toggleAnswer}
          className="mx-auto mt-6 block w-full cursor-pointer rounded-xl bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700 sm:w-auto dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          {buttonLabel}
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
