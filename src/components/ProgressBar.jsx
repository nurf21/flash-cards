export default function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;
  return (
    <div className="py-6">
      <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 dark:bg-blue-400 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-sm text-center mt-2 text-gray-700 dark:text-gray-300">
        {Math.round(percentage)}% &nbsp;•&nbsp; {current} of {total}
      </p>
    </div>
  );
}
