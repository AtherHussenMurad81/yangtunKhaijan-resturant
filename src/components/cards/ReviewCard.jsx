import React, { useState } from "react";
// import { ReviewCardSkeleton } from "../skeletons.jsx/ReviewCardSteletons";
import ReviewLoading from "@/app/reviews/ReviewLoading";

const ReviewCard = ({ rev }) => {
  const { user, email, photo, rating, review, likes, date } = rev;
  const [loading, setLoading] = useState(false);
  // date format
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  if (loading) {
    return <ReviewLoading />;
  }

  return (
    <div className="max-w-md mx-auto rounded-xl border bg-white p-4 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3">
        <img
          src={photo}
          alt={user}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{user}</h3>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-2 flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i}>{i < rating ? "⭐" : "☆"}</span>
        ))}
        <span className="ml-2 text-sm text-gray-500">({rating}/5)</span>
      </div>

      {/* Review text */}
      <p className="mt-3 text-gray-700">{review}</p>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>👍 {likes.length} likes</span>
        <span>{formattedDate}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
