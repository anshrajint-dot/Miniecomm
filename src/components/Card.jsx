import { useNavigate } from "react-router-dom";

export default function Card({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="border p-4 rounded cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h2 className="text-sm font-bold mt-2">{product.title}</h2>
      <p className="text-green-600">${product.price}</p>
      <p className="text-xs text-gray-500">{product.category}</p>
    </div>
  );
}