import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}