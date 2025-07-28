export default function ProgressBar({ current, total }) {
  const safeTotal = total || 1; // prevent divide by zero
  const rawPercentage = (current / safeTotal) * 100;
  const percentage = Math.min(Math.max(rawPercentage, 0), 100); // clamp between 0–100
  const label = `${Math.round(percentage)}% • ${current} of ${total}`;

  return (
    <div className="my-6 w-full">
      <div
        className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={Math.round(percentage)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progress"
      >
        <div
          data-testid="progress-fill"
          className="h-full bg-blue-600 dark:bg-blue-400 transition-[width] duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-sm text-center mt-2 text-gray-700 dark:text-gray-300">
        {label}
      </p>
    </div>
  );
}
