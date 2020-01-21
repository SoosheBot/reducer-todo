import React from "react";

export function ClearComplete({ todo, dispatch }){
    const toggleComplete = () => {
        dispatch({
            type: "TOGGLE_COMPLETED",
            payload: todo.id
        });
    };
    return(
        <div onClick={toggleComplete}
        className={`todo${todo.completed ? "completed" : ""}`}
        style={{ textDecoration: todo.completed ? "line-through red" : ""}}>
        
        <p>{todo.item}</p>
        </div>
    );
}