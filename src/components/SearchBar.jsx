export default function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      className="border p-2 w-full"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}