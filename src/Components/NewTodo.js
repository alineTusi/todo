import React, { useState } from "react";
import "./NewTodo.css";

const NewTodo = ({ addTodo }) => {
  const [number, setNumber] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");

  const handleNumberChange = ({ target }) => {
    setNumber(target.value);
  };

  const handleDayChange = ({ target }) => {
    setDay(target.value);
  };

  const handleMonthChange = ({ target }) => {
    setMonth(target.value);
  };

  // Add new todo item
  const saveNewTodo = (e) => {
    e.preventDefault();

    // Object/structure for new todo item
    const newItem = {
      id: (Date.now() + Math.random()).toString(),
      number: number,
      day: day,
      month: month,
      isDone: false,
    };

    addTodo(newItem);

    // Clear input fields after adding new item
    setNumber("");
    setDay("");
    setMonth("");
  };

  return (
    <div>
      <form onSubmit={saveNewTodo}>
        <input
          type="text"
          value={number}
          placeholder="Add a new task"
          onChange={handleNumberChange}
        />
        <input
          type="text"
          value={day}
          placeholder="Enter day of week"
          onChange={handleDayChange}
        />
        <input
          type="text"
          value={month}
          placeholder="Enter month"
          onChange={handleMonthChange}
        />
        <button className="btn-add" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default NewTodo;
