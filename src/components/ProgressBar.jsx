export default function ProgressBar({ current, total }) {
  const safeTotal = total || 1; // prevent divide by zero
  const rawPercentage = (current / safeTotal) * 100;
  const percentage = Math.min(Math.max(rawPercentage, 0), 100); // clamp between 0–100
  const label = `${Math.round(percentage)}% • ${current} of ${total}`;

  return (
    <div className="my-6 w-full">
      <div
        className="h-4 w-full overflow-hidden rounded-full bg-gray-300 dark:bg-gray-700"
        role="progressbar"
        aria-valuenow={Math.round(percentage)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progress"
      >
        <div
          data-testid="progress-fill"
          className="h-full bg-blue-600 transition-[width] duration-300 ease-in-out dark:bg-blue-400"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="mt-2 text-center text-sm text-gray-700 dark:text-gray-300">
        {label}
      </p>
    </div>
  );
}
