import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(text) {
    if (!text.trim()) return;
    setTodos([{ id: Date.now(), text, completed: false }, ...todos]);
  }

  function toggleTodo(id) {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }

  function deleteTodo(id) {
    setTodos(todos.filter(t => t.id !== id));
  }

  function editTodo(id, newText) {
    setTodos(todos.map(t => t.id === id ? { ...t, text: newText } : t));
  }

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <Header onAdd={addTodo} count={todos.length} />
      <ToDoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}
