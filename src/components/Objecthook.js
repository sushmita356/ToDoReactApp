import React, { useState } from "react";

function Objecthook() {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  return (
    <form>
      <input
        type="text"
        value={name.firstname}
        onChange={(e) => setName({ ...name, firstname: e.target.value })}
      />
      <input
        type="text"
        value={name.lastname}
        onChange={(e) => setName({ ...name, lastname: e.target.value })}
      />

      <h2>firstname is==={name.firstname}</h2>
      <h2>lastname is==={name.lastname}</h2>
      <h2>lastname is==={JSON.stringify(name)}</h2>

    </form>
  );
}
export default Objecthook;
