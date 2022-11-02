import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, completedTodo, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          id={todo.id}
          key={index}
          // title={todo.title}
          number={todo.number}
          day={todo.day}
          month={todo.month}
          isDone={todo.isDone}
          completedTodo={completedTodo}
          deleteTodo={deleteTodo}
        />
      ))}
      <Todo />
    </div>
  );
};

export default TodoList;
