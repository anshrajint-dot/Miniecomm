export default function Filter({ products, onFilter }) {
  const categories = [
    "all",
    ...new Set(products.map((p) => p.category)),
  ];

  return (
    <div className="flex gap-2 mt-2 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onFilter(cat)}
          className="border px-3 py-1"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}