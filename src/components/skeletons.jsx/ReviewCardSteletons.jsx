import React from "react";

const ReviewCardSkeleton = () => {
  return (
    <div className="max-w-md mx-auto rounded-xl border bg-white p-4 shadow-sm animate-pulse">
      {/* Header */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="h-12 w-12 rounded-full bg-gray-300"></div>

        <div className="flex-1 space-y-2">
          <div className="h-4 w-32 rounded bg-gray-300"></div>
          <div className="h-3 w-40 rounded bg-gray-200"></div>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-3 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-4 w-4 rounded bg-gray-300"></div>
        ))}
      </div>

      {/* Review text */}
      <div className="mt-4 space-y-2">
        <div className="h-3 w-full rounded bg-gray-200"></div>
        <div className="h-3 w-full rounded bg-gray-200"></div>
        <div className="h-3 w-3/4 rounded bg-gray-200"></div>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        <div className="h-3 w-20 rounded bg-gray-200"></div>
        <div className="h-3 w-24 rounded bg-gray-200"></div>
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;
