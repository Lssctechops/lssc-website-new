"use client";
import { useState } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { LuCalendarCheck } from "react-icons/lu";
import { RiSearchLine, RiResetLeftLine } from "react-icons/ri";
import { useToggleQueryParam } from "~/utils/toggleQueryParam";

export default function EventSelector({ handleClick, category }) {
  const [open, setOpen] = useState(false);
  const toggleQueryParam = useToggleQueryParam();
  const handleSelect = (value) => {
    toggleQueryParam("category", value);
  };
  return (
    <div className="flex items-center gap-3 bg-primary-600 rounded-lg overflow-hidden transition-[max-width] duration-500 ease-in-out w-fit px-3 py-3">
      <div className="w-fit cursor-pointer text-white flex flex-row gap-1 items-center">
        <span className="text-xl">
          <LuCalendarCheck />
        </span>
        <select
          // value={selectedCity}
          onChange={(e) => handleSelect(e.target.value)}
          className="text-sm flex-1  outline-none text-black capitalize"
        >
          <option value="">Category</option>
          {["training", "event", "other"].map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>{" "}
      </div>
    </div>
  );
}
