import React, { useState } from "react";

const TodoForm = ({dispatch}) => {
  const [task, setTask] = useState('');

  const handleChanges = e => {
    setTask(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: task
    });
    setTask("");
  };

  const deleteTask = e => {
    e.preventDefault();
    dispatch({
      type: "DELETE_COMPLETED"
    });
  };

  return (
    <div className="todo-form">
      <form onSubmit={submitForm}>
        <input
          name="item"
          type="text"
          value={task}
          onChange={handleChanges}
          placeholder="Enter todo here..."
        />
        <button type="submit">Add Todo</button>
        <button onClick={deleteTask}>Delete Completed Todos</button>
      </form>
    </div>
  );
};

export default TodoForm;
