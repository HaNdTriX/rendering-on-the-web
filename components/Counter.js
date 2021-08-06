import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <span className="relative z-0 inline-flex shadow-sm rounded-md">
      <button
        type="button"
        onClick={() => setCount((count) => ++count)}
        className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        Counter
      </button>
      <div className="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
        {count}
      </div>
    </span>
  );
}
