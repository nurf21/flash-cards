// components/NavigationButton.jsx
export default function NavigationButton({ onClick, direction, disabled }) {
  const isNext = direction === "next";

  return (
    <div className="mt-6">
      <button
        data-testid={`${direction}-button`}
        onClick={onClick}
        disabled={disabled}
        className="w-full sm:w-auto px-4 py-2 text-blue-600 dark:text-blue-400 cursor-pointer disabled:opacity-50 transition"
      >
        {isNext ? "Next →" : "← Previous"}
      </button>
    </div>
  );
}
