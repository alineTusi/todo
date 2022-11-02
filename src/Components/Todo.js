import React from "react";
import "./Todo.css";

const Todo = ({ completedTodo, id, isDone, deleteTodo, number, day, month }) => {
  return (
    <div className="todo-item">
      <span
        style={{
          textDecoration: isDone ? "line-through" : ""
        }}
      >
        {/* {title} */}
        {number}
        </span>
        <span style={{
          textDecoration: isDone ? "line-through" : ""
        }}>
        {day}
        </span>
        <span style={{
          textDecoration: isDone ? "line-through" : ""
        }}>
        {month}
      </span>
      <p>
        <button className="btn edit-btn">Edit</button>
        <button className="btn done-btn" onClick={() => completedTodo(id)}>
          Marked as done
        </button>
        <button className="btn delete-btn" onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </p>
    </div>
  );
};

export default Todo;
