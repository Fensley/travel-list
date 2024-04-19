const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <ParckingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴Far Away 💼 </h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3> What do you need for your 😍 trip</h3>
    </div>
  );
}
function ParckingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((each) => (
          <Item Item={each} key={each.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ Item }) {
  return (
    <li>
      <span style={Item.packed ? { textDecoration: "line-through" } : {}}>
        {Item.quantity} {Item.description}
      </span>
      <button>❌</button>
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
