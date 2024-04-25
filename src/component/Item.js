export function Item({ Item, onDeleteItem, onToggleItem }) {
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
