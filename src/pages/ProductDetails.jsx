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

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <img src={product.image} className="h-60 mx-auto" />
      <h1 className="text-xl font-bold mt-4">{product.title}</h1>
      <p className="text-green-600 text-lg">${product.price}</p>
      <p className="mt-2">{product.description}</p>
      <p className="text-sm text-gray-500">{product.category}</p>
    </div>
  );
}