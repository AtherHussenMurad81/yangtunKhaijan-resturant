"use client";
import React, { useState } from "react";

const CartButton = () => {
  //   const [inCart, SetInCart] = useState(false);
  return (
    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-100 disabled:text-gray-400">
      Add to Cart
    </button>
  );
};

export default CartButton;
