import React, { useState } from "react";
import TodoForm from "./TodoForm";

import { FaWindowClose } from "react-icons/fa";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ""
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ""
    });
  };

  return todos.map((todo, index) => (
    <div className="todo-row" key={index}>
      {todo.id === edit.id ? (
        <TodoForm edit={edit} onSubmit={submitUpdate} />
      ) : (
        <>
          <div
            key={todo.id}
            className={todo.isComplete ? "complete" : ""}
            onClick={() => completeTodo(todo.id)}
          >
            {todo.text}
          </div>
          <FaWindowClose onClick={() => removeTodo(todo.id)} />
          <button onClick={() => setEdit({ id: todo.id, value: todo.text })}>
            edit
          </button>
        </>
      )}
    </div>
  ));
};

export default Todo;
