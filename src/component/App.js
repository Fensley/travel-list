import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { ParckingList } from "./ParckingList";
import { Stats } from "./Stats";

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
