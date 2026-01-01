"use client";
import ReviewCard from "@/components/cards/ReviewCard";
import { ReviewCardSkeleton } from "@/components/skeletons.jsx/ReviewCardSteletons";
import React, { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
        setLoading(false);
      });
  }, []);
  // console.log(reviews);
  if (loading) {
    return <ReviewLoading />;
  }
  return (
    <div>
      <h2 className="text-center text-3xl md:text-10xl font-bold">
        Total {reviews.length} found
      </h2>
      <div className="grid my-5 grid-cols-1 md:grid-cols-3 gap-5">
        {reviews.map((rev) => (
          <ReviewCard rev={rev} key={rev.id}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
