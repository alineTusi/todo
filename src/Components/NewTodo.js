import React, { useState } from "react";
import "./NewTodo.css";

const NewTodo = ({ addTodo }) => {
  // const [inputValue, setInputValue] = useState("");

  const [number, setNumber] = useState ("");
  const [day, setDay] = useState ("");
  const [month, setMonth] = useState ("");

  // const {number, day, month} = inputValue;

  // e.target.value
  // const handleChange = ({ target }) => {
  //   setInputValue(target.value)
  // };

  const handleNumberChange = ({target}) =>{
    setNumber(target.value)
  }

  const handleDayChange = ({target}) =>{
    setDay(target.value)
  }

  const handleMonthChange = ({target}) =>{
    setMonth(target.value)
  }
  // add new todo item
  const saveNewTodo = (e) => {
    e.preventDefault();
    // console.log(inputValue);

    // object/structure for new todo item
    const newItem = {
      id: (Date.now() + Math.random()).toString(),
      // title: inputValue,
      number: number, 
      day: day,
      month: month,
      isDone: false
    };

    addTodo(newItem);

    setNumber("");
    setDay("");
    setMonth("");
    
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={number.number}
          placeholder="Enter number"
          onChange={handleNumberChange}
        />
         <input
          type="text"
          value={day.day}
          placeholder="Enter day of week"
          onChange={handleDayChange}
        />
         <input
          type="text"
          value={month.month}
          placeholder="Enter month"
          onChange={handleMonthChange}
        />
        <button className="btn-add" onClick={saveNewTodo}>
          Add
        </button>
      </form>
    </div>
  );
};

export default NewTodo;
