import React from "react";
import Link from "next/link";

const Loading = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 animate-pulse">
      {/* Back button skeleton */}
      <div className="h-4 w-28 bg-gray-200 rounded"></div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image skeleton */}
        <div className="w-full h-80 bg-gray-300 rounded-xl"></div>

        {/* Details skeleton */}
        <div className="space-y-4">
          {/* Title */}
          <div className="h-8 w-3/4 bg-gray-300 rounded"></div>

          {/* Category & Area */}
          <div className="h-4 w-1/2 bg-gray-200 rounded"></div>

          {/* Price */}
          <div className="h-7 w-32 bg-gray-300 rounded mt-4"></div>

          {/* Info lines */}
          <div className="space-y-2 mt-6">
            <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
            <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <div className="h-12 flex-1 bg-gray-300 rounded-lg"></div>
            <div className="h-12 flex-1 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
