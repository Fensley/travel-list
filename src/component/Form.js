import { useState } from "react";

export function Form({ onadditem }) {
  const [description, setDescription] = useState("");
  const [option, setOption] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const item = { option, description, package: false, id: Date.now() };
    if (!description) return;

    // console.log(item);
    onadditem(item);
    setOption(1);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your 😍 trip</h3>
      <select value={option} onChange={(e) => setOption(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
