import React, { useState } from "react";
import "./Todo.css";

const Todo = ({
  completedTodo,
  id,
  isDone,
  deleteTodo,
  taskTitle,
  day,
  month,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(taskTitle);
  const [editedDay, setEditedDay] = useState(day);
  const [editedMonth, setEditedMonth] = useState(month);

  // Common style object for completed tasks
  const completedStyle = {
    textDecoration: isDone ? "line-through" : "",
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveEdit = () => {
    // Call function to save the edited todo (can be passed from props if needed)
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            type="date"
            value="2024-09-11"
            min="2023-01-01"
            max="2025-12-31"
            value={editedDay}
            onChange={(e) => setEditedDay(e.target.value)}
          />
          <input
            type="text"
            value={editedMonth}
            onChange={(e) => setEditedMonth(e.target.value)}
          />
          <button onClick={saveEdit}>Save</button>
        </div>
      ) : (
        <>
          <span style={completedStyle}>{taskTitle}</span>
          <span style={completedStyle}>{day}</span>
          <span style={completedStyle}>{month}</span>
        </>
      )}
      <p>
        <button className="btn edit-btn" onClick={handleEdit}>
          {isEditing ? "Cancel" : "Edit"}
        </button>
        <button className="btn done-btn" onClick={() => completedTodo(id)}>
          {isDone ? "Undo" : "Mark as done"}
        </button>
        <button className="btn delete-btn" onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </p>
    </div>
  );
};

export default Todo;
