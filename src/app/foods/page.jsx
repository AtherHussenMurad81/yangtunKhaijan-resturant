import FoodCard from "@/components/cards/FoodCard";
import React from "react";

const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
  );
  const data = await res.json();
  //   console.log(data);
  return data.foods || [];
};

const FoodsPage = async () => {
  const foods = await getFoods();
  // console.log(foods);
  return (
    <div>
      <h2 className={`text-5xl font-bold text-center py-5`}>
        Total <span className="text-yellow-500">{foods.length} </span> Foods
        Found
      </h2>
      <div className="flex gap-5">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food}></FoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodsPage;
