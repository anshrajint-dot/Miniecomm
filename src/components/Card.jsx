import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Card({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div
      className="card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img src={product.image} alt={product.title} />

      <h2>{product.title}</h2>

      <p className="price">${product.price}</p>

      <p className="category">{product.category}</p>

      <button
        className="btn"
        onClick={(e) => {
          e.stopPropagation(); // prevent navigation
          addToCart(product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}