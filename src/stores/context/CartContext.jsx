import { useState, useEffect } from "react";
import { CartContext } from "./CartContextValue";

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(
      (product) => product.id === item.id && product.category === item.category
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((product) =>
          product.id === item.id && product.category === item.category
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...item, quantity: 1 }
      ]);
    }
  };

  const removeFromCart = (id, category) => {
    setCartItems(cartItems.filter((item) => !(item.id === id && item.category === category)));
  };

  const increaseQuantity = (id, category) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.category === category
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id, category) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id && item.category === category
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

        const totalPrice = cartItems.reduce(
          (total, item) =>
            total +
            Number(item.price.replace(/,/g, "")) * item.quantity,
          0
        );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};