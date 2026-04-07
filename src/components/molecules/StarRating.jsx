"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

const FullStar = ({ className }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 576 512"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
  </svg>
);

const HalfStar = ({ className }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 576 512"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M288 0c-12.2 .1-23.3 7-28.6 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3L288 439.8 288 0zM429.9 512c1.1 .1 2.1 .1 3.2 0l-3.2 0z"></path>
  </svg>
);

const StarRating = ({
  rating = 0,
  max = 5,
  className = "",
  sizeClass = "w-5 h-5",
  colorClass = "text-yellow-400",
  showLabel = false,
}) => {
  const stars = [];
  const fullCount = Math.floor(rating);
  const hasHalf = rating - fullCount >= 0.25 && rating - fullCount < 0.75;
  const ceil = Math.ceil(rating);

  for (let i = 1; i <= ceil; i++) {
    if (i <= fullCount) {
      stars.push(<FullStar key={i} className={`${sizeClass} ${colorClass}`} />);
    } else if (i === fullCount + 1 && hasHalf) {
      stars.push(<HalfStar key={i} className={`${sizeClass} ${colorClass}`} />);
    }
  }

  return (
    <div className={twMerge("flex items-center flex-row gap-[2px]", className)}>
      {stars}
      {showLabel && (
        <span className="ml-2 text-sm text-gray-500">
          ({rating.toFixed(1)})
        </span>
      )}
    </div>
  );
};

export default StarRating;
