import React, { useState } from "react";

export default function ToDoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  function save(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (trimmed) onEdit(trimmed);
    setIsEditing(false);
  }

  return (
    <li className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3">
        <input type="checkbox" checked={todo.completed} onChange={onToggle}
          className="w-5 h-5 accent-blue-600" />

        {isEditing ? (
          <form onSubmit={save} className="flex gap-2">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="px-2 py-1 rounded border dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
              autoFocus
            />
            <button className="text-green-600">Save</button>
            <button type="button" onClick={() => setIsEditing(false)} className="text-red-600">
              Cancel
            </button>
          </form>
        ) : (
          <span
            onDoubleClick={() => setIsEditing(true)}
            className={`cursor-pointer ${
              todo.completed ? "line-through text-gray-400" : "text-gray-800 dark:text-gray-100"
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex gap-3">
        {!isEditing && (
          <button onClick={() => setIsEditing(true)} className="text-blue-500">
            Edit
          </button>
        )}
        <button onClick={onDelete} className="text-red-500">
          Delete
        </button>
      </div>
    </li>
  );
}
