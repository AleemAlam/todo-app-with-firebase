import React from "react";
import { TodoItemContainer } from "../Styles/styles";

export const TodoItem = ({ todo, status, time }) => {
  return (
    <TodoItemContainer status={status}>
      <div>
        <p>{todo}</p>
        <span style={{ fontSize: "10px", margin: 0 }}>{time}</span>
      </div>
      <button>Delete</button>
    </TodoItemContainer>
  );
};
