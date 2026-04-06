"use client";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const BackButton = () => {
  return (
    <button
      onClick={() => window.history.back()}
      className="md:block hidden  cursor-pointer"
    >
      <IoArrowBackCircleSharp size={40} />
    </button>
  );
};

export default BackButton;
