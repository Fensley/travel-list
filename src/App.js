import { useState } from "react";

export default function App() {
  const [itemTwo, setItemTwo] = useState([]);

  function handleAddItems(item) {
    setItemTwo((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItemTwo((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItemTwo((items) =>
      items.map((item) =>
        item.id === id ? { ...item, package: !item.package } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onadditem={handleAddItems} />
      <ParckingList
        itemTwo={itemTwo}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴Far Away 💼 </h1>;
}
function Form({ onadditem }) {
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
function ParckingList({ itemTwo, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {itemTwo.map((each) => (
          <Item
            Item={each}
            onDeleteItem={onDeleteItem}
            key={each.id}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}
function Item({ Item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={Item.package}
        onChange={() => onToggleItem(Item.id)}
      />
      <span style={Item.package ? { textDecoration: "line-through" } : {}}>
        {Item.option} {Item.description}
      </span>
      <button onClick={() => onDeleteItem(Item.id)}>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list, and you already packed X </em>
    </footer>
  );
}
