import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("techstore_cart", []);

  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((p) => p.name === product.name);
      if (existing) {
        return prev.map((p) => (p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p));
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(name) {
    setCart((prev) => prev.filter((p) => p.name !== name));
  }

  function clearCart() {
    setCart([]);
  }

  const total = useMemo(() => cart.reduce((sum, p) => sum + p.price * p.quantity, 0), [cart]);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
