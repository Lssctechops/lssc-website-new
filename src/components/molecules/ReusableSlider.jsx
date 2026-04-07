"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";

const ReusableSlider = ({
  children,
  indicatorType = "dots",
  className = "",
}) => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: indicatorType === "dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
    arrows: false,
  };

  const totalSlides = children.length;

  return (
    <div className={`relative w-full ${className}`}>
      <Slider ref={sliderRef} {...settings}>
        {children.map((child, idx) => (
          <div key={idx}>{child}</div>
        ))}
      </Slider>

      {/* Indicator Type: "line" */}
      {indicatorType === "line" && (
        <div className="mt-2 h-1 w-full bg-gray-200 rounded">
          <div
            className="h-1 bg-blue-600 rounded transition-all duration-300"
            style={{
              width: `${((currentSlide + 1) / totalSlides) * 100}%`,
            }}
          />
        </div>
      )}

      {/* Indicator Type: "fraction" */}
      {indicatorType === "fraction" && (
        <div className="absolute bottom-2 right-4 bg-black/50 text-white text-sm px-2 py-1 rounded">
          {currentSlide + 1} / {totalSlides}
        </div>
      )}
    </div>
  );
};

export default ReusableSlider;
