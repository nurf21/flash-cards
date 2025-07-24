export default function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 my-8">
      <div
        className="bg-blue-600 h-4 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
      <p className="text-sm text-center mt-1">{`${Math.round(percentage)}%`}</p>
    </div>
  );
}
