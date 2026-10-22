"use client";

import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRef, useEffect, useState } from "react";

const GoverningCouncil = () => {
  const [chairman, setChairman] = useState(null);
  const [members, setMembers] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/public/governingCouncil?limit=500`
        );
        const json = await res.json();
        const list = (json?.data || [])
          .filter((m) => m.isActive !== false)
          .sort((a, b) => (a.position || 0) - (b.position || 0))
          .map((m) => ({
            name: m.name,
            designation: m.designation,
            company: m.company,
            image: m?.thumbnail?.url || "",
            isChairman: m.isChairman,
          }));
        setChairman(list.find((m) => m.isChairman) || null);
        setMembers(list.filter((m) => !m.isChairman));
      } catch (err) {
        console.log(err);
      }
    };
    load();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplaySpeed: 5000,
    responsive: [
      { breakpoint: 1120, settings: { slidesToShow: 5, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2.1, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section id="governing-council">
      <StyledHeading
        heading={
          <>
            <span className="text-primary-600">Governing</span> Council
          </>
        }
        containerStyle={"mx-auto"}
      />

      {chairman && (
        <div className="w-fit mx-auto text-center mt-6">
          {chairman.image ? (
            <Image
              className="w-[215px] rounded-3xl object-cover"
              src={chairman.image}
              alt={chairman.name}
              width={500}
              height={500}
              priority
              quality={80}
            />
          ) : null}

          <h3 className="font-medium mt-2">{chairman.name}</h3>
          <p className="text-sm font-normal">{chairman.designation}</p>
          <p className="text-sm font-normal">{chairman.company}</p>
        </div>
      )}

      <h2 className="my-6 text-center text-3xl font-semibold">
        The People behind the Mission
      </h2>
      <p className="mx-auto mb-10 text-center lg:w-[60%]">
        The Leather Sector Skill Council (LSSC) comprises eminent leaders from
        the leather industry and key government Nominees. Their collective
        expertise, strategic vision, and deep industry knowledge are driving our
        mission to shape policies, forge industry partnerships, and ensure that
        our skilling initiatives align with the evolving needs of the sector.
      </p>
      <div className="w-full ">
        {members.length > 0 && (
        <Slider key={members.length} ref={sliderRef} {...settings}>
          {members.map((member, index) => {
            const { image, name, company, designation } = member;
            return (
              <div key={index} className="w-full  flex-center px-2 xl:px-0">
                <div className="group mx-auto relative h-80 w-full cursor-pointer rounded-3xl transition-all duration-300 ease-in-out lg:w-[80%] hover:z-[99]">
                  <div className="absolute inset-0 transition-all duration-300 ease-in-out group-hover:w-[130%] group-hover:left-1/2 group-hover:-translate-x-1/2">
                    {image ? (
                      <Image
                        className="h-full w-full rounded-3xl object-cover"
                        src={image || "/placeholder.svg"}
                        alt={name}
                        width={500}
                        height={500}
                      />
                    ) : (
                      <div className="h-full w-full rounded-3xl flex-center bg-[#3f2d21] "></div>
                    )}
                    <div className="transition:opacity absolute bottom-3 left-0 w-full py-2 rounded-xl border-2 border-gray-100/30 bg-black/30 text-center text-white backdrop-blur duration-300 ease-in-out group-hover:opacity-100 lg:opacity-0">
                      <h3 className="font-medium">{name}</h3>
                      <p className="text-sm font-normal">{designation}</p>
                      <p className="text-sm font-normal">{company}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        )}

        <div className="flex-center gap-4 py-4">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="bg-black text-white rounded-lg p-2 cursor-pointer"
          >
            <MdChevronLeft size={24} />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="bg-black text-white rounded-lg p-2 cursor-pointer"
          >
            <MdChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GoverningCouncil;