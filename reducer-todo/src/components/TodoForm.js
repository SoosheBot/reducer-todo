import React, { useState } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";

const TodoForm = () => {
  const [task, setTask] = useState(state.todoList);

  const handleChanges = e => {
    setTask(e.target.value);
  };



 
};

export default TodoForm;
