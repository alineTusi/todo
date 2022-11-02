import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [day, setDay] = useState("");
  const [date, setDate] = useState("2022-09-09");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [todo, setTodo] = useState("");
  const [item, setItem] = useState({});
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("useEffect date", date);
    const [y, m, d] = date.split("-");
    setDay(d);
    setMonth(m);
    setYear(y);
  }, [date]);

  useEffect(() => {
    console.log("useEffect day", day);
  }, [day]);

  useEffect(() => {
    console.log("useEffect month", month);
  }, [month]);

  useEffect(() => {
    console.log("useEffect year", year);
  }, [year]);

  useEffect(() => {
    console.log("useEffect todo", todo);
  }, [todo]);

  useEffect(() => {
    console.log("useEffect item", item);
    if (day && month && year) {
      const i = items;
      i.push(item);
      setItems(i);
    }
  }, [item]);

  const addNumber = () => {
    setItem({
      day,
      month,
      year,
      todo,
    });
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="appContainer">
      <h2>To Do Application</h2>
      <label for="start">Date:</label>
      <input
        onChange={handleDateChange}
        type="date"
        id="start"
        name="trip-start"
        value={date}
        min="2022-01-01"
        max="2023-12-31"
      ></input>

      <input onChange={handleTodo} type="text" />
      {/* <h2>Month</h2>
      <input type="text" />aaaaa */}
      <button onClick={addNumber}> Add</button>

      <ListGroup>
        {items.map((i, id) => (
          <ListGroup.Item key={id}>
            {i.day}
            {i.month}
            {i.year}
            {i.todo}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default App;

// 1. you will need to create 3 input fields:

//   - Number
//   - Day of the week
//   - Month

// 2. When you click on the button the information should be visible as one item

// criar uma variavel para cada um dos itens do tipo string (usestate)
// para cada uma das variaveis, fazer o handler funcionar
// criar um handler para o botao add
// nesse handler salvar o valor das 3 variaveis no item
// Add o item na lista
