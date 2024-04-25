import { useState } from "react";
import { Item } from "./Item";

export function ParckingList({
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
