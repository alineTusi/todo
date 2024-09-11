import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoList from "./Components/TodoList"; // Ensure these paths are correct
import NewTodo from "./Components/NewTodo"; // Ensure these paths are correct

export default function App() {
  const [todoList, setTodoList] = useState([]); // State for the list of todos

  // Handler to add a new todo item to the list
  const handleAddTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]); // Add the new todo to the list
  };

  // Handler to toggle the completion status of a todo item
  const handleCompletedTodo = (todoId) => {
    const newTodos = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isDone: !todo.isDone }; // Toggle isDone property
      }
      return todo;
    });
    setTodoList(newTodos);
  };

  // Handler to delete a todo item
  const deleteTodo = (todoId) => {
    const newTodos = todoList.filter(({ id }) => id !== todoId);
    setTodoList(newTodos);
  };

  return (
    <div className="App">
      <h1>To Do Application</h1>
      {/* Use NewTodo component to add new todos */}
      <NewTodo addTodo={handleAddTodo} />

      {/* Render TodoList with updated props */}
      <TodoList
        todos={todoList}
        completedTodo={handleCompletedTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
