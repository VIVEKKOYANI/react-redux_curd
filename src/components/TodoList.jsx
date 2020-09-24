import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
  let todos = useSelector((state) => state);
  const [search, setSearch] = useState();
  return (
    <div className="mx-4">
      {todos.map((todo) => {
        return (
          <div>
            <TodoItem key={todo.id} todo={todo} />
          </div>
        );
      })}
      <button onClick={() => window.print()}>PRINT</button>
    </div>
  );
}

export default TodoList;
