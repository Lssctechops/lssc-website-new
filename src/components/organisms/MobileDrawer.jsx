"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
import { AiOutlineMenuFold } from "react-icons/ai";
import { menuItems } from "~/constants/navigation";

export default function MobileSidebar({ logo, isProfessional = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const sidebarRef = useRef(null);
  const [dropdownId, setDropdownId] = useState(null);

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar when clicking outside
  const handleOutsideClick = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  // Toggle dropdown menu
  const toggleDropdown = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Add outside click event listener
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="text-white p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span className="text-2xl text-black">
          <AiOutlineMenuFold />
        </span>
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/20  z-[999] transition-opacity duration-300 backdrop-blur-[1px] ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-[65%] bg-primary-600 z-[999] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header with Logo and Close Button */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <Image
            alt="LSSC-header-logo"
            src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/34db1f3e-d7a6-43d4-a8fa-4e8ae2928900/public"
            // src="/img/header-logo-lssc.webp"
            height={200}
            width={300}
            className="w-[80%] "
          />
          <button
            onClick={toggleSidebar}
            className="text-white p-2 focus:outline-none"
            aria-label="Close menu"
          >
            <MdClose size={20} />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="overflow-y-auto h-[calc(100%-64px)]">
          <div className="flex flex-col gap-5 p-4">
            {menuItems.map((menu, index) => {
              const { id, label, submenu, route } = menu;
              return (
                <div
                  onClick={() => setDropdownId(dropdownId == id ? null : id)}
                  key={index}
                  className="w-full  flex flex-col"
                >
                  <div className="flex  overflow-hidden flex-row items-center gap-[5px] text-white">
                    <div className="w-full flex flex-row justify-between items-center">
                      <Link href={route} className="w-fit text-white ">
                        <span className="text-[16px] 2xl:text-[1rem] capitalize">
                          {label}
                        </span>
                      </Link>
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
                    </div>
                  </div>

                  {dropdownId == id && submenu?.length > 0 && (
                    <div
                      className={`w-full mt-2 ${
                        menuItems?.length - 1 == index && "right-0"
                      }`}
                    >
                      <div className="w-full capitalize flex flex-col bg-white shadow rounded-[0.375rem] overflow-hidden">
                        {submenu?.map((values, index) => {
                          const { label, route, notforpro = false } = values;

                          if (notforpro && isProfessional) return null;

                          return (
                            <Link
                              onClick={toggleSidebar}
                              href={route}
                              key={index}
                              className="w-full"
                            >
                              <div
                                className={`text-start w-full cursor-pointer py-[0.5rem] px-4 text-primary-600 transition-all duration-150 hover:bg-primary-600 hover:text-white font-[400] text-[16px] 2xl:text-[1rem] capitalize`}
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

            {/* Talent Bank Button */}
            <Link href="/job-post">
              <button className="px-4 py-2 w-full bg-gradient-to-r from-[#7B0C0A] to-[#420705] text-white text-[1rem] rounded-[4px]">
                Talent Bank
              </button>
            </Link>
            {/* <div className="w-full flex flex-col text-center gap-2">
              <Link href="/auth/signin" className="w-full">
                <button className="w-full px-8 h-[45px] text-white hover:opacity-80 transition-all  border border-white rounded-[4px]">
                  Log in
                </button>
              </Link>
              <Link href="/auth/signup" className="w-full">
                <button className="w-full px-8 h-[45px] hover:opacity-90 transition-all duration-100 text-primary-600 bg-white  border border-primary-600 rounded-[4px]">
                  Sign up
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
