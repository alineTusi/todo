import { useState } from "react";
import NewTodo from "./Components/NewTodo";
import TodoList from "./Components/TodoList";
import "./App.css";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (newTodo) => {
    const newTodos = [...todoList, newTodo];
    // array.push()
    setTodoList(newTodos);
    console.log(newTodos);
  };

  const handleEditTodo = (todoId) =>{

  }

  const handleCompletedTodo = (todoId) => {
    const newTodos = todoList.map((todo) => {
      if (todo.id === todoId) {
        todo.isDone = !todo.isDone;
        // todo.isDone = true;
      }
      return todo;
    });
    // console.log("ok");
    // console.log(newTodos);

    // todo.isDone = !todo.isDone;
    setTodoList(newTodos);
  };

  const deleteTodo = (todoId) => {
    // newTodos === []
    const newTodos = todoList.filter(({ id }) => id !== todoId);

    setTodoList(newTodos);
    console.log(todoId);
    console.log(todoList);
  };

  return (
    <div className="App">
      <h1>To Do Application</h1>
      <NewTodo addTodo={handleAddTodo} />
      <TodoList
        todos={todoList}
        completedTodo={handleCompletedTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
