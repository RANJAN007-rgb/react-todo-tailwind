import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ todos, onToggle, onDelete, onEdit }) {
  if (!todos.length)
    return <p className="text-gray-500 dark:text-gray-400 text-center mt-10">No tasks yet.</p>;

  return (
    <ul className="space-y-3">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={(txt) => onEdit(todo.id, txt)}
        />
      ))}
    </ul>
  );
}
