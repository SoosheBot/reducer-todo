import React, { useState } from "react";

const TodoForm = ({ dispatch }) => {
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
    <div className="form">
      <form onSubmit={submitForm}>
        <input
          name="task"
          type="text"
          value={task}
          onChange={handleChanges}
          placeholder="Enter a new todo here..."
        />
        <button type="submit">Add Todo</button>
        <button onClick={deleteTask}>Delete Completed Todos</button>
      </form>
    </div>
  );
};

export default TodoForm;

