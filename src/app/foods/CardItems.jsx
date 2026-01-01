"use client";
import { CartContext } from "@/context/CartProvider";
import React, { use } from "react";

const CardItems = () => {
  const { cart } = use(CartContext);
  //   console.log(cart);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-10 text-xl font-semibold">
        🛒 Your cart is empty
      </div>
    );
  }
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-8">
        Cart Items ({cart.length})
      </h2>

      {/* Cart List */}
      <div className="grid gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex gap-6 border rounded-lg p-4 shadow-sm"
          >
            {/* Image */}
            <img
              src={item.foodImg}
              alt={item.title}
              className="w-32 h-32 object-cover rounded"
            />

            {/* Info */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-500">Category: {item.category}</p>
              <p className="font-bold text-yellow-600 mt-2">৳ {item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-8 text-right">
        <h3 className="text-2xl font-bold">
          Total Price: <span className="text-yellow-600">৳ {totalPrice}</span>
        </h3>
      </div>
    </div>
  );
};

export default CardItems;
