import React from "react";
import Toolbar from '../components/Toolbar/Toolbar';

export default function TodoForm() {
  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const handleChange = e => {
    console.log(e,'e',e.target.value,'target');
    setTodo(e.target.value);
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        value: todo,
      }
    ]);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (todo === "") return;
    addTodo();
    setTodo("");
  };

  const removeTodo = todoId => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <Toolbar/>
      <form onSubmit={onSubmit}>
        <label htmlFor="todo">TODO</label>
        <br />
        <input
          id="todo"
          className="todo-input"
          onChange={handleChange}
          value={todo}
        />
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
      <div>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
                {todo.value}-
              <button className="delete-btn" onClick={() => removeTodo(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
