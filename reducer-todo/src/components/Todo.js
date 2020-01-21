import React, { useReducer } from "react";
import { todoReducer, initialState } from "../reducers/todoReducer";
import { ClearComplete } from "./ClearComplete";
import TodoForm from "./TodoForm";

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  
  return (
    <div className="todo-list">
      <TodoForm dispatch={dispatch} />
      {state.map(todo => {
        return <ClearComplete key={todo.id} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default Todo;
