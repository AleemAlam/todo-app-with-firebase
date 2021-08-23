import React, { useState } from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { todo: "New Todo", status: false, time: "10:00 AM  " },
  ]);

  return (
    <>
      {todos.map((todo) => (
        <TodoItem {...todo} />
      ))}
    </>
  );
};
