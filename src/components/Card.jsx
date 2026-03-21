import { useNavigate } from "react-router-dom";

export default function Card({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img src={product.image} alt={product.title} />

      <h2>{product.title}</h2>

      <p className="price">${product.price}</p>

      <p className="category">{product.category}</p>
    </div>
  );
}