import React, { useState } from "react";

export default function Header({ onAdd, count }) {
  const [value, setValue] = useState("");

  function submit(e) {
    e.preventDefault();
    onAdd(value);
    setValue("");
  }

  return (
    <header className="mb-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Stylish Todo <span className="text-blue-500">({count})</span>
      </h1>

      <form onSubmit={submit} className="flex gap-3">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 active:scale-95 transition"
        >
          Add
        </button>
      </form>
    </header>
  );
}
