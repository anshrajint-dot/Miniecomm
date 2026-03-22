import { createContext, useContext, useEffect, useState } from "react";

// Create context
const CartContext = createContext();

// Custom hook
export const useCart = () => useContext(CartContext);

// Provider
export function CartProvider({ children }) {
  // Load from localStorage
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to cart function
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);

    // ✅ Console message
    console.log(`🛒 Product added: ${product.title}`);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}