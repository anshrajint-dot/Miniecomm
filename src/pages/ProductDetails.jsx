import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart(); // ✅ added

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="center">Loading...</p>;

  return (
    <div className="container">
      <div className="details">
        <img src={product.image} alt={product.title} /> {/* ✅ added alt */}

        <div>
          <h1>{product.title}</h1>

          <p className="price">${product.price}</p>

          <p className="desc">{product.description}</p>

          <p className="category">{product.category}</p>

          {/* ✅ ADD TO CART BUTTON */}
          <button
            className="btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}