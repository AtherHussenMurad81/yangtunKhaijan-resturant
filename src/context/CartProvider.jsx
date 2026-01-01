"use client";

import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addCart = (item) => {
    setCart([item, ...cart]);
  };
  //   console.log(cart);
  const cartInfo = {
    addCart,
    cart,
  };
  return <CartContext value={cartInfo}>{children}</CartContext>;
};

export default CartProvider;
