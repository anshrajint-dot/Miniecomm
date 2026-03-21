export default function Filter({ products, onFilter }) {
  const categories = [
    "all",
    ...new Set(products.map((p) => p.category)),
  ];

  return (
    <div className="filters">
      {categories.map((cat) => (
        <button key={cat} onClick={() => onFilter(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
}