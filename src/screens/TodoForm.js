import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      complete: false
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="todo..."
        value={input}
        onChange={handleChange}
        name="text"
      />
      <button onClick={handleSubmit}>
        {props.edit ? "update" : "add todo"}
      </button>
    </form>
  );
}

export default TodoForm;
