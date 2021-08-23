import React from "react";
import { TodoInput } from "../Components/TodoInput";
import { TodoList } from "../Components/TodoList";
import { Container } from "../Styles/styles";

export const Todo = () => {
  return (
    <Container>
      <TodoInput />
      <TodoList />
    </Container>
  );
};
