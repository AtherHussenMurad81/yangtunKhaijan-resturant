import FoodCard from "@/components/cards/FoodCard";
import InputSearch from "@/components/InputSearch";
// import InputSearch from "@/components/InputSearch";
import React from "react";
import CardItems from "./CardItems";

const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();
  console.log("Total data found", data.foods);
  return data.foods || [];
};

const FoodsPage = async ({ searchParams }) => {
  const { search = "" } = await searchParams;
  const foods = await getFoods(search);
  // console.log(foods);
  return (
    <div>
      <h2 className={`text-5xl font-bold text-center py-5`}>
        Total <span className="text-yellow-500">{foods.length} </span> Foods
        Found
      </h2>
      <div>
        <InputSearch></InputSearch>
      </div>
      <div className="flex gap-5">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food}></FoodCard>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-bold">Cart Items</h2> <hr />
          <CardItems></CardItems>
        </div>
      </div>
    </div>
  );
};

export default FoodsPage;
