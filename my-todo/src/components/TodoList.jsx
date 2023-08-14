import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo}></TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
