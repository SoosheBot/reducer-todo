import React, { useState } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";

const Todo = () => {
    const [state,dispatch] = useReducer(todoReducer, initialState);
    const [task, setTask] = useState(state.todo);

  const handleChanges = e => {
    setTask(e.target.value);
  };



 
};

export default TodoForm;
