"use client";

import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRef, useEffect, useState } from "react";

// Built-in backup (shown if the database is slow/asleep). Live admin data overrides this.
const FALLBACK_CHAIRMAN = {
  name: "Shri Sanjay Leekha",
  designation: "Chairman, Leather Sector Skill Council",
  company: "CMD, Alpine Apparels Pvt.Ltd.",
  image:
    "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/2798584d-3d85-4f2d-8461-0a25f190e700/public",
};

const FALLBACK_MEMBERS = [
  { name: "Shri Mukhtarul Amin", designation: "Former Chairman, LSSC", company: "CMD, Super House Ltd", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/be5ec496-fd75-476a-775a-9ad008643e00/public" },
  { name: "Shri Habib Hussain", designation: "Former Chairman, LSSC", company: "Director, AV Thomas", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/6631a9a7-87b5-4019-ff6a-bca86c5e4600/public" },
  { name: "Shri Rajendra K. Jalan", designation: "Director", company: "AFPL Global Pvt. Ltd.", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/6de98bf3-d491-48c0-9af4-fab9faaa5700/public" },
  { name: "Shri Rakesh Suri", designation: "Director", company: "Irus International Pvt. Ltd", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/af9b74fe-9c45-47b1-4128-054ce44b8300/public" },
  { name: "Shri Puran Chand Dawar", designation: "Managing Director", company: "Dawar Footwear Pvt. Ltd", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/fc3107e7-5e1d-4ffa-7df5-dbd8a8bf5200/public" },
  { name: "Shri Motilal Sethi", designation: "Managing Director", company: "Saroj International Leathers Pvt. Ltd.", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/e4680a6d-550a-47ba-6f91-c88462f64500/public" },
  { name: "Shri Gopal Gupta", designation: "Managing Director", company: "Gupta HC Overseas Exports (I)Pvt. Ltd", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/51602bc2-c894-4a76-5385-604295571900/public" },
  { name: "Shri N. Shafeeq Ahmed", designation: "Managing Director", company: "Shafeeq Shameel & Co", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/ca161eb2-e2af-4f30-c3b0-efb1f1594b00/public" },
  { name: "Shri Ramesh Kumar Juneja", designation: "Director", company: "JC International", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/01efe762-0fb2-462c-9daa-7f52d691d200/public" },
  { name: "Shri Rajiv Bhatia", designation: "Director", company: "D2 International", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/92beca67-52be-4853-8fbe-e36e88fac300/public" },
  { name: "Shri Sunil Taneja", designation: "Director", company: "M/s.Cheyyar SEZ Developers", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/2051bd1d-2b56-4ac1-5972-c46ea5332a00/public" },
  { name: "Dr.  J. Rafiq Ahmed", designation: "Managing Director", company: "M/s. Kothari Industrial Corpn. Ltd.", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/a4f47a67-4bff-43ff-9caf-6fcdbe703700/public" },
  { name: "Shri Sahil Malik", designation: "Managing Director", company: "M/s. Da Milano Leather Pvt. Ltd.", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/91dd01c8-d5ef-41cb-77a6-7bc9f35d1f00/public" },
  { name: "Shri Dilip Kapur", designation: "Managing Director", company: "M/s. Hidesign India Pvt. Ltd", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/e2945b00-5027-4353-97b8-ca723bb95000/public" },
  { name: "Shri Javed Iqbal", designation: "Managing Director", company: "Naaz Exports Pvt. Ltd.", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/2a92b3f9-ab7b-4c3d-2207-7aa62e157b00/public" },
  { name: "Shri Kumar Nitesh", designation: "CEO – Footwear Business", company: "M/s. Reliance Retail Ltd.", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/58e7e526-ef6b-4fc0-aa82-54815b58b400/public" },
  { name: "Mr. P. S. Suresh.", designation: "CEO of Calsea Footwear (P) Ltd.", company: "A wholly-owned subsidiary of TATA International Limited", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/08f33ecc-02a2-41f0-5ed0-61a691056800/public" },
  { name: "Shri Anjan Kundu", designation: "Head – Supply Chain Management", company: "M/s. Bata India Ltd.", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/73ced810-c765-4637-ac59-a292b9593c00/public" },
  { name: "Shri Sanjay Gupta", designation: "President", company: "IFCOMA", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/75809d65-a157-4936-68e1-6f7dcd244a00/public" },
  { name: "Dr. P. Thanikaivelan", designation: "Director", company: "Central Leather Research Institute", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/18bd254e-0a16-4b05-67da-c93de6924900/public" },
  { name: "Shri Vivek Sharma, IRS", designation: "Managing Director", company: "Footwear Design & Development Institutue (FDDI).", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/60b6ff4d-4d2f-4779-d3d9-020285d01c00/public" },
  { name: "Shri K. Murali", designation: "Director", company: "Central Footwear Training Institute", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/afb6dfac-75fc-4858-55dd-ad0c64bf7f00/public" },
  { name: "Shri Dharmendra Kumar", designation: "Nominee Director", company: "NSDC", image: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/7f369bd5-ad1a-4d8c-407c-cb89286e9800/public" },
];

const GoverningCouncil = () => {
  const [chairman, setChairman] = useState(FALLBACK_CHAIRMAN);
  const [members, setMembers] = useState(FALLBACK_MEMBERS);
  const sliderRef = useRef(null);

  useEffect(() => {
    const load = async () => {
      try {
        const base = process.env.NEXT_PUBLIC_API_URL;
        if (!base) return;
        const res = await fetch(`${base}/api/public/governingCouncil?limit=500`);
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
        if (list.length > 0) {
          setChairman(list.find((m) => m.isChairman) || FALLBACK_CHAIRMAN);
          setMembers(list.filter((m) => !m.isChairman));
        }
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