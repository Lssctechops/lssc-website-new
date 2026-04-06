"use client";
import Slider from "react-slick";
import { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { limitTextLength } from "~/utils/limitText";

export default function HeroSlider({
  heroBanners = [
    {
      title: "test",
      _id: "ufeuy37e537eu",
      thumbnail: "/home/banner-placeholder-v1.webp",
      link: "#",
    },
  ],

  eventList,
  noticeList,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Slider */}
      <Slider ref={sliderRef} {...settings}>
        {heroBanners.map(({ title, _id, thumbnail, link = "#", position }) => (
          <Link target="_blank" href={link || "#"} key={_id}>
            <div className="relative w-full outline-none">
              <Image
                priority={true}
                // quality={50}
                src={thumbnail || "/home/banner-placeholder-v1.webp"}
                alt={title}
                title={title}
                width={1920}
                height={800}
                className="aspect-[28/9] w-full object-cover bg-gray-200"
              />
            </div>
          </Link>
        ))}
      </Slider>

      {/* Blue Ticker (Marquee) */}
      <div className="bg-blue-800 -mt-2 text-white py-1 md:py-2 w-full whitespace-nowrap  overflow-hidden">
        <div className="animate-marquee  gap-20 px-4 text-xs md:text-sm">
          <span>Looking for Skilled & Certified Workforce?</span>{" "}
          <span>
            Connect with us for job-ready Workers and Professionals !!
          </span>
          <span>Looking for Skilled & Certified Workforce?</span>
          <span>
            Connect with us for job-ready Workers and Professionals !!
          </span>
          <span>Looking for Skilled & Certified Workforce?</span>
          <span>Looking for Skilled & Certified Workforce?</span>{" "}
          <span>
            Connect with us for job-ready Workers and Professionals !!
          </span>
          <span>Looking for Skilled & Certified Workforce?</span>
          <span>
            Connect with us for job-ready Workers and Professionals !!
          </span>
          <span>Looking for Skilled & Certified Workforce?</span>
        </div>
      </div>
      <div className="bg-gray-200  text-red-500 py-1 md:py-5 w-full whitespace-nowrap  overflow-hidden">
        <div className="animate-marquee  gap-5 px-4 text-xs md:text-sm">
          {[...noticeList.slice(0, 10), ...eventList.slice(0, 10)].map(
            ({ title, _id, createdAt, hyperLink = "#" }, index) => (
              <Link
                key={_id}
                target="_blank"
                href={hyperLink || "#"}
                className="w-[300px] text-wrap text-center"
              >
                <span className="text-primary-600 font-bold">
                  {moment(createdAt).format("D MMM")}
                </span>

                <span className="text-gray-400"> | </span>
                {limitTextLength(title, 60)}
              </Link>
            )
          )}
        </div>
      </div>

      {/* Green Static Bar */}
      <div className="bg-[#C3DB9A] shrink-0 text-black py-1.5 md:py-3 text-center overflow-x-auto whitespace-nowrap text-sm md:text-base font-medium">
        <div className="flex text-xs md:text-base flex-row gap-5 lg:gap-10 xl:gap-32 justify-center px-4 min-w-max">
          <span className="shrink-0">Current Statistics</span>
          <span className="shrink-0">21+ Lakh Apprentices Engaged</span>
          <span className="shrink-0">Visit www.apprenticeship.gov.in</span>
          <span className="shrink-0">
            Hon&apos;ble Prime Minister of India <br />
            Shri Narendra Modi
          </span>
        </div>
      </div>

      {/* Custom Dot Indicator */}
      <div className="flex justify-center gap-2.5 mt-3">
        {heroBanners.map((_, idx) => (
          <div
            key={idx}
            onClick={() => sliderRef.current?.slickGoTo(idx)}
            className={`cursor-pointer w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === idx ? "bg-primary-600 w-5" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
