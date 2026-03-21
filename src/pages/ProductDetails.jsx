import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
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
        <img src={product.image} />

        <div>
          <h1>{product.title}</h1>

          <p className="price">${product.price}</p>

          <p className="desc">{product.description}</p>

          <p className="category">{product.category}</p>
        </div>
      </div>
    </div>
  );
}