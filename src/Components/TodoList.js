import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, completedTodo, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          id={todo.id}
          key={todo.id}
          taskTitle={todo.number} // Changed from `number` to `taskTitle`
          day={todo.day}
          month={todo.month}
          isDone={todo.isDone}
          completedTodo={completedTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
