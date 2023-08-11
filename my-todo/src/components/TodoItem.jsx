import React from "react";

function TodoItem({ id, text, completed, toggleTodoComplete, removeTodo }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => removeTodo(id)}>
        &times;
      </span>
    </div>
  );
}

export default TodoItem;
