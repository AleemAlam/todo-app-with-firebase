import React, { useEffect, useState } from "react";
import { TodoInput } from "../Components/TodoInput";
import { TodoList } from "../Components/TodoList";
import { Container } from "../Styles/styles";
import { db } from "../utils/firebase";
import firebase from "firebase";
export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);

  const getTodos = () => {
    db.collection("todos").onSnapshot((snap) => {
      const payload = snap.docs.map((item) => ({
        id: item.id,
        todo: item.data().todo,
        status: item.data().status,
      }));
      setTodos(payload);
    });
  };

  const handleSubmit = (e, input) => {
    e.preventDefault();
    if (input === "") {
      setError(true);
      return;
    }
    setError(false);
    const payload = {
      todo: input,
      status: false,
    };
    db.collection("todos").add({
      ...payload,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const toggleTodo = (id, status) => {
    db.collection("todos").doc(id).update({ status: !status });
  };

  const deleteTodo = (id) => {
    db.collection("todos").doc(id).delete();
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <h1>Todo App</h1>
      <TodoInput error={error} handleSubmit={handleSubmit} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </Container>
  );
};
