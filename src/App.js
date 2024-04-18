export default function App() {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ];

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
    <di className="add-form">
      <h3> What do you need for your 😍 trip</h3>
    </di>
  );
}
function ParckingList() {
  return (
    <div className="list">
      <ul>LIST</ul>
    </div>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list, and you already packed X </em>
    </footer>
  );
}
