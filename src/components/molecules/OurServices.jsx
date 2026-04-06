import React from "react";
import StyledHeading from "../atoms/StyledHeading";
import Image from "next/image";
import Link from "next/link";

const OurServices = () => {
  return (
    <section className=" py-12 ">
      <div className="container flex flex-col gap-10">
        <div className="text-center flex flex-col gap-10">
          <StyledHeading
            heading={
              <>
                <span className="text-primary-600">Our </span> Services
              </>
            }
            containerStyle="mx-auto"
          />
          <h3 className="text-[25px] md:text-[30px] lg:text-[38px] font-bold">
            Industry
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {services?.map((service, i) => {
            const { title, description, icon, route } = service;
            return (
              <div
                key={i}
                className="bg-[#E5F5FF] shadow-xl rounded-2xl relative py-2 px-6"
              >
                <Image
                  className="absolute w-16 md:w-20 left-[-6%] top-[30%]"
                  src={icon}
                  alt="bag"
                  width={100}
                  height={100}
                />
                <div className="ms-10 space-y-3 py-4 md:py-0 md:space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="lg:text-3xl text-lg font-semibold text-[#043A3A]">
                      {title}
                    </h3>
                    <Link
                      className="text-[14px] hidden md:block md:text-base text-white bg-[#0070BA] rounded-lg px-4 py-1"
                      href={route}
                    >
                      <span className="border-b text-nowrap">Get Started</span>
                    </Link>
                  </div>
                  <p className="font-normal text-[14px] md:text-base">
                    {description}
                  </p>
                  <Link
                    className="text-[14px]  md:hidden md:text-base text-white bg-[#0070BA] rounded-lg px-4 py-1"
                    href={route}
                  >
                    <span className="border-b text-nowrap">Get Started</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;

export const services = [
  {
    title: "Apprenticeship hiring ",
    description:
      "Businesses can access a pipeline of pre-trained talent through LSSC’s apprenticeship programs, bridging industry needs with emerging workforce potential.",
    icon: "/icon/bag.svg",
    route:
      "https://docs.google.com/forms/d/e/1FAIpQLSdDQsrZKttjlTvLv78UBqtkQeSKEwfDnw8giQYL16corWlI-w/viewform",
  },
  {
    title: "MSDE schemes ",
    description:
      "LSSC supports the effective implementation of government skilling schemes such as PMKVY and RPL, ensuring smooth execution from assessment to certification.",
    icon: "/icon/wheel.svg",
    route:
      "https://docs.google.com/forms/d/e/1FAIpQLSdUbecjAaozoYFCIZaorf7BPLJx_XS8_shTOsVHDbyAxmnCcw/viewform",
  },
  {
    title: "Trainers on demand ",
    description:
      "Certified trainers, equipped with industry-aligned expertise, are available on demand to meet specific organizational training requirements.",
    icon: "/icon/profile.svg",
    route:
      "https://docs.google.com/forms/d/e/1FAIpQLSdAz5KLY7Tx0PJrFLYZGh3IAydGeZwuJQr-tGG0fF7aBd-tqg/viewform",
  },
  {
    title: "Skilling hub  ",
    description:
      "LSSC collaborates with enterprises to establish customised in-house skilling hubs, offering end-to-end guidance through the setup and pilot phases.",
    icon: "/icon/24.svg",
    route:
      "https://docs.google.com/forms/d/e/1FAIpQLScfD2MV5efMW5lGfh93Rzle9yh5jxtTOMRmNRzIOl5CechkXw/viewform",
  },
  {
    title: "Skilling advisory services ",
    description:
      "Expert advisory services are available to help industries identify skill gaps, design skilling strategies, and implement effective workforce development plans.",
    icon: "/icon/food.svg",
    route:
      "https://docs.google.com/forms/d/e/1FAIpQLSfReJqEjQzxmR_JoGZxCPeFoeTXpIPbWaTCJqzAYcyX3g2DuA/viewform",
  },
  {
    title: "Workforce solutions",
    description:
      "LSSC enables access to a ready pool of skilled, semi-skilled, and professional talent to meet diverse staffing needs across the leather sector.",
    icon: "/icon/idea.svg",
    route: "/job-post",
  },
];
