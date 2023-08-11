import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, toggleTodoComplete }) => {
  return (
    <li>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodoComplete={toggleTodoComplete}
          {...todo}
        ></TodoItem>
      ))}
    </li>
  );
};

export default TodoList;
