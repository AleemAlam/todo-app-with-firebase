import React, { useState } from "react";
import { AddButton, InputField, StyledForm } from "../Styles/styles";
export const TodoInput = ({ handleSubmit }) => {
  const [input, setInput] = useState("");
  return (
    <div>
      <StyledForm onSubmit={() => handleSubmit(input)}>
        <InputField
          type="text"
          name="todo"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <AddButton>Add Todo</AddButton>
      </StyledForm>
    </div>
  );
};
