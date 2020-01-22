import React, { useReducer } from "react";
import { todoReducer, initialState } from '../reducers/todoReducer';
import { ToggleCompleted} from './ToggleCompleted';
import TodoForm from './TodoForm';



export const Todo = (props) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div className='todo-list'>
      <TodoForm dispatch={dispatch} />
      {state.map(todo => {
        return (
          <ToggleCompleted key={todo.id} todo={todo} dispatch={dispatch} />
        )
      })}
    </div>
  );
};

