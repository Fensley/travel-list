export function Stats({ itemTwo }) {
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
