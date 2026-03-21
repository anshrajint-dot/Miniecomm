import { useEffect, useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  const handleSearch = (term) => {
    setFiltered(
      products.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  const handleFilter = (category) => {
    if (category === "all") return setFiltered(products);
    setFiltered(products.filter((p) => p.category === category));
  };

  if (loading) return <p className="center">Loading...</p>;
  if (error) return <p className="center error">{error}</p>;

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      <Filter products={products} onFilter={handleFilter} />

      <div className="grid">
        {filtered.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}