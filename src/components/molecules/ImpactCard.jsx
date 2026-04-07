"use client";
import { useState } from "react";
import Image from "next/image";

const ImpactCard = ({ iconSrc, title, count }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      onClick={handleToggle}
      style={{
        background:
          "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/c01a01d2-fe21-45c3-b326-24d6f74bbb00/public')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className={`group cursor-pointer flex items-center gap-3 h-[128px] transition-all duration-300 ease-in-out ${
        isExpanded ? "w-72" : "w-[128px]"
      } hover:w-72 rounded-full p-2`}
    >
      <div className="w-[110px] shrink-0 bg-gray-100/30 border-2 border-gray-100/30 backdrop-blur h-full flex justify-center items-center rounded-full">
        <Image
          className="h-10 w-10"
          src={iconSrc}
          alt="icon"
          width={100}
          height={100}
        />
      </div>
      <div
        className={`space-y-1 text-white transition-all duration-300 ease-in-out ${
          isExpanded ? "opacity-100" : "opacity-0"
        } group-hover:opacity-100`}
      >
        <h4 className="font-semibold">{title}</h4>
        <p className="text-xl font-normal">{count}</p>
      </div>
    </div>
  );
};

export default ImpactCard;
