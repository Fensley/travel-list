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

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );
    if (confirmed) setItemTwo([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onadditem={handleAddItems} />
      <ParckingList
        itemTwo={itemTwo}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        handleClearList={handleClearList}
      />
      <Stats itemTwo={itemTwo} />
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
function ParckingList({
  itemTwo,
  onDeleteItem,
  onToggleItem,
  handleClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItem;

  if (sortBy === "input") sortedItem = itemTwo;

  if (sortBy === "description")
    sortedItem = itemTwo
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "package")
    sortedItem = itemTwo
      .slice()
      .sort((a, b) => Number(a.package) - Number(b.package));
  return (
    <div className="list">
      <ul>
        {sortedItem.map((each) => (
          <Item
            Item={each}
            onDeleteItem={onDeleteItem}
            key={each.id}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="package">Sort by packed status</option>
        </select>
        <button onClick={handleClearList}>CLEAR LIST</button>
      </div>
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
function Stats({ itemTwo }) {
  if (!itemTwo.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀 </em>
      </p>
    );
  const numItems = itemTwo.length;
  const numpacked = itemTwo.filter((item) => item.package).length;
  const percentage = Math.round((numpacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️ "
          : `💼 You have ${numItems} items on your list, and you already packed
        ${numpacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
