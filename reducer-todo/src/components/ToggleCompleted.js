import React from "react";

export const ToggleCompleted = ({ todo, dispatch }) => {
    const toggleCompleted = () => {
        dispatch({
            type: "TOGGLE_COMPLETED",
            payload: todo.id
        });
    };
    return (
        <div onClick={toggleCompleted} className={`todo${todo.completed ? "completed" : ""}`} style={{ textDecoration: todo.completed ? "line-through red" : ""}}>
        
        <p>{todo.item}</p>
        </div>
    );
}

