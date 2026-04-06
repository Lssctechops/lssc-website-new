"use client";

import React, { useState, useEffect } from "react";

const AnimatedGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      title: "LIGHT",
      subtitle: "MUSTROADMIN",
      bgColor: "bg-gray-100",
    },
    {
      id: 2,
      title: "Signing of MoU for TVET Pro",
      subtitle: "between",
      description:
        "LEATHER SECTOR SKILL COUNCIL & AUSTRALIAN TRADE AND INVESTMENT (AUSTRADE)",
      bgColor: "bg-blue-50",
    },
    // Add more items as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [galleryItems.length]);

  return (
    <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl">
      {galleryItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-1000 ${
            item.bgColor
          } ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            {item.title}
          </h2>
          {item.subtitle && (
            <p className="text-xl text-gray-600 mb-4 text-center">
              {item.subtitle}
            </p>
          )}
          {item.description && (
            <p className="text-lg text-gray-700 mt-4 text-center max-w-2xl">
              {item.description}
            </p>
          )}
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {galleryItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedGallery;
