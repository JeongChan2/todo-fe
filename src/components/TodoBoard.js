import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList, getTasks }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {todoList.length > 0 ? (
        todoList.map((item, index) => <TodoItem key={index} item={item} getTasks={getTasks}/>)
      ) : (
        <h2>There is no Item to show</h2>
      )}
    </div>
  );
};

export default TodoBoard;
