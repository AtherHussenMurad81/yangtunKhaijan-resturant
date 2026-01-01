import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div className="border rounded-xl p-4 shadow animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-44 rounded-lg bg-gray-300"></div>

      <div className="mt-3 space-y-2">
        {/* Title */}
        <div className="h-5 w-3/4 rounded bg-gray-300"></div>

        {/* Category */}
        <div className="h-4 w-1/3 rounded bg-gray-200"></div>

        {/* Price */}
        <div className="h-6 w-24 rounded bg-gray-300 mt-2"></div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <div className="h-10 flex-1 rounded-lg bg-gray-300"></div>
          <div className="h-10 flex-1 rounded-lg bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
