// components/NavigationButton.jsx
export default function NavigationButton({ onClick, direction, disabled }) {
  const isNext = direction === "next";

  return (
    <div className="mt-6">
      <button
        data-testid={`${direction}-button`}
        onClick={onClick}
        disabled={disabled}
        className="w-full cursor-pointer px-4 py-2 text-blue-600 transition disabled:opacity-50 sm:w-auto dark:text-blue-400"
      >
        {isNext ? "Next →" : "← Previous"}
      </button>
    </div>
  );
}
