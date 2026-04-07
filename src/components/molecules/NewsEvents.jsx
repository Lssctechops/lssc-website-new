"use client";
import Slider from "react-slick";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import NewsEventContainer from "../atoms/NewsEventContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

import { useBlog } from "~/hooks/useBlog";

const NewsEvents = () => {
  const sliderRef = useRef(null);
  const { blogList, documentCount, isLoading, error, refetch } = useBlog({
    limit: 10,
    type: "news",
  });
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
        // autoplay: true,
        // autoplaySpeed: 1000,
        // infinite: true,
      },
    ],
  };

  return (
    <section id="news" className="pb-12">
      <div className="container  space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-3xl mb-4 font-bold">NEWS AND EVENTS</h2>
            <p>
              We actively engage through timely updates, impactful storytelling,
              and thoughtfully curated events that celebrate our milestones and
              shared success.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="bg-[#f5f5f5] rounded-lg p-2 cursor-pointer"
            >
              <MdChevronLeft size={24} />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="bg-[#f5f5f5] rounded-lg p-2 cursor-pointer"
            >
              <MdChevronRight size={24} />
            </button>
          </div>
        </div>
        {blogList?.length > 0 && (
          <Slider className="w-full" ref={sliderRef} {...settings}>
            {blogList?.map(({ thumbnail, title, slug }, index) => (
              <div key={index} className="p-2">
                <NewsEventContainer
                  thumbnail={thumbnail?.url}
                  title={title}
                  route={`/news/${slug}`}
                  rating={index + 1}
                />
              </div>
            ))}
          </Slider>
        )}

        <div className="md:hidden justify-center flex items-center gap-4">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="bg-[#f5f5f5] rounded-lg p-2 cursor-pointer"
          >
            <MdChevronLeft size={24} />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="bg-[#f5f5f5] rounded-lg p-2 cursor-pointer"
          >
            <MdChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
