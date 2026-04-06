"use client";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { limitTextLength } from "~/utils/limitText";

export default function SegmentDropdown({
  title,
  icon,
  isTrue,
  options,
  str = {},
  onChange,
  selected,
}) {
  const [isOpen, setIsOpen] = useState(isTrue);
  // const [selected, setSelected] = useState([]);

  // const toggleOption = (option) => {
  //   setSelected((prev) =>
  //     prev.includes(option)
  //       ? prev.filter((o) => o !== option)
  //       : [...prev, option]
  //   );
  // };

  return (
    <div className="w-full rounded-xl bg-[#EBEBEB] shadow-md p-4 ">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center text-[#333333] space-x-2 font-semibold text-lg">
          <Image
            src={`/icon/${icon}`}
            alt="icon"
            width={100}
            height={100}
            className="w-5 h-5"
          />
          <span>{title}</span>
        </div>
        <RiArrowDropDownLine
          className={` transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          size={24}
        />
      </div>

      {isOpen && (
        <div className="mt-4 space-y-2">
          {options.map((option) => (
            <label
              key={option[str?.value] || option}
              className="flex text-[#666666] items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                value={option[str?.value] || option}
                className="accent-gray-600  transform scale-125"
                checked={selected?.includes(option[str?.value] || option)}
                onChange={() => onChange(option[str?.value] || option)}
              />
              <span>{option[str?.label] || option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
