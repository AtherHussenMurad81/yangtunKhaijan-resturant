import React from "react";
import Link from "next/link";

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch food details");
  }

  const data = await res.json();
  return data.details;
};

const Page = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Food not found ❌
      </div>
    );
  }

  const { title, catId, foodImg, price, video, category, area } = food;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Link href="/foods" className="text-sm text-gray-500 hover:underline">
        ← Back to Foods
      </Link>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={foodImg}
          alt={title}
          className="w-full h-80 object-cover rounded-xl shadow"
        />

        <div>
          <h1 className="text-3xl font-bold">{title}</h1>

          <p className="text-gray-500 mt-1">
            {category} • {area}
          </p>

          <p className="text-2xl font-semibold mt-4">{price} ৳</p>

          <div className="mt-6 space-y-3">
            <p>
              <span className="font-medium">Category:</span> {category}
            </p>
            <p>
              <span className="font-medium">Area:</span> {area}
            </p>
          </div>

          <div className="mt-6 flex gap-4">
            <button className="flex-1 bg-black text-white py-3 rounded-lg hover:opacity-90">
              Add to Cart
            </button>

            {video && (
              <a
                href={video}
                target="_blank"
                className="flex-1 border border-gray-300 py-3 text-center rounded-lg hover:bg-gray-100"
              >
                Watch Video
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
