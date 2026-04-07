"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { menuItems } from "~/constants/navigation";

const Navigation = () => {
  const [dropdownId, setDropdownId] = useState(null);

  return (
    <div className="hidden lg:block w-full bg-primary-600">
      <div className="container mx-auto flex flex-row items-center justify-center gap-7">
        {menuItems.map((menu, index) => {
          const { id, label, submenu, route } = menu;
          return (
            <div
              onMouseEnter={() => setDropdownId(id)}
              onMouseLeave={() => setDropdownId(null)}
              key={index}
              className="w-fit flex flex-col relative "
            >
              <div className="flex relative overflow-hidden flex-row items-center gap-[5px] text-white">
                <Link
                  href={route}
                  className="flex flex-row items-center gap-.5 text-white "
                >
                  <span className="text-[14px] 2xl:text-[1rem] capitalize">
                    {label}
                  </span>
                  {submenu?.length > 0 && (
                    <span
                      className={`text-xl ${
                        dropdownId == id &&
                        "rotate-180 transition-all duration-300"
                      }`}
                    >
                      <MdKeyboardArrowDown />
                    </span>
                  )}
                </Link>
              </div>

              {dropdownId == id && submenu?.length > 0 && (
                <div
                  className={`absolute top-5 pt-1.5 z-[99] w-[13rem] ${
                    menuItems?.length - 1 == index && "right-0"
                  }`}
                >
                  <div className="w-full capitalize flex flex-col bg-[#C3DB9A]  shadow rounded-[0.375rem] overflow-hidden">
                    {submenu?.map((values, index) => {
                      const { label, route, notforpro = false } = values;

                      if (notforpro && isProfessional) return null;

                      return (
                        <Link href={route} key={index} className="w-full">
                          <div
                            className={`capitalize w-full cursor-pointer py-[0.5rem] bg-[#C3DB9A] px-4 hover:text-white hover:bg-[#0070BA] text-black transition-all duration-150 font-[400] text-[0.875rem] `}
                          >
                            <span>{label}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <Link href="/job-post">
          <button className="px-4 py-1 cursor-pointer bg-gradient-to-r from-[#7B0C0A] to-[#420705] text-white text-[1rem] rounded-[4px]">
            Talent Bank
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
