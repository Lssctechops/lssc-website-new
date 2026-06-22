"use client";

import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { useRef } from "react";
const GoverningCouncil = () => {
  const members = [
       {
      name: "Shri Mukhtarul Amin",
      designation: "Former Chairman, LSSC",
      image:
        "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/be5ec496-fd75-476a-775a-9ad008643e00/public",
      company: "CMD, Super House Ltd",
    },
    // {
    //   name: "Shri P.R. Aqeel Ahmed",
    //   designation: "Former Chairman, LSSC",
    //   image:
    //     "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/7daccee0-ed8d-4953-ad6e-028f92a98100/public",
    //   company: "MD, Florence Shoe Company Pvt. Ltd",
    // },
    {
      name: "Shri Habib Hussain",
      designation: "Former Chairman, LSSC",
      image:
        "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/6631a9a7-87b5-4019-ff6a-bca86c5e4600/public",
      company: "Director, AV Thomas",
    },
    {
      name: "Shri Rajendra K. Jalan",
      designation: "Director",
      image:
        "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/6de98bf3-d491-48c0-9af4-fab9faaa5700/public",
      company: "AFPL Global Pvt. Ltd.",
    },
    // {
    //   name: "Shri Shri K.R. Vijayan",
    //   designation: "Managing Director",
    //   image:
    //     "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/9ad50805-a20d-418b-f5e0-5068b4085900/public",
    //   company: "Good Leather Shoes Pvt. Ltd.",
    // },
 
    {
      name: "Shri Rakesh Suri",
      designation: "Director",
      image:
        "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/af9b74fe-9c45-47b1-4128-054ce44b8300/public",
      company: "Irus International Pvt. Ltd",
    },
    {
      name: "Shri Puran Chand Dawar",
      designation: "Managing Director",
      image:
        "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/fc3107e7-5e1d-4ffa-7df5-dbd8a8bf5200/public",
      company: "Dawar Footwear Pvt. Ltd",
    },
    // {
    //   name: "Shri Naresh S. Bhasin",
    //   designation: "Managing Director",
    //   image:
    //     "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/85b01249-136b-4964-0f27-3332e191c000/public",
    //   company: "Ram Fashion Exports Pvt. Ltd.",
    // },
    {
      name: "Shri Motilal Sethi",
      designation: "Managing Director",
      image:
        "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/e4680a6d-550a-47ba-6f91-c88462f64500/public",
      company: "Saroj International Leathers Pvt. Ltd.",
    },
    {
      name: "Shri Gopal Gupta",
      designation: "Managing Director",
      image:
        "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/51602bc2-c894-4a76-5385-604295571900/public",
      company: "Gupta HC Overseas Exports (I)Pvt. Ltd",
    },
    {
      name: "Shri N. Shafeeq Ahmed",
      designation: "Managing Director",
      image:
        "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/ca161eb2-e2af-4f30-c3b0-efb1f1594b00/public",
      company: "Shafeeq Shameel & Co",
    },
    {
      name: "Shri Ramesh Kumar Juneja",
      designation: "Director",
      image:
        "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/01efe762-0fb2-462c-9daa-7f52d691d200/public",
      company: "JC International",
    },
    // {
    //   name: "Shri Tauseef Ahmed Mirza",
    //   designation: "Director",
    //   image:
    //     "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/fd1587e9-5878-47d8-79a6-52a3a832e600/public",
    //   company: "Mirza International Ltd.",
    // },
    {
      name: "Shri Rajiv Bhatia",
      designation: "Director",
      image:
        "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/92beca67-52be-4853-8fbe-e36e88fac300/public",
      company: "D2 International",
    },
    {
      name: "Shri Sunil Taneja",
      designation: "Director",
      image:
        "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/2051bd1d-2b56-4ac1-5972-c46ea5332a00/public",
      company: "M/s.Cheyyar SEZ Developers",
    },
    {
      name: "Dr.  J. Rafiq Ahmed",
      designation: "Managing Director",
      image:
        "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/a4f47a67-4bff-43ff-9caf-6fcdbe703700/public",
      company: "M/s. Kothari Industrial Corpn. Ltd.",
    },
    {
      name: "Shri Sahil Malik",
      designation: "Managing Director",
      image:
        "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/91dd01c8-d5ef-41cb-77a6-7bc9f35d1f00/public",
      company: "M/s. Da Milano Leather Pvt. Ltd.",
    },
    {
      name: "Shri Dilip Kapur",
      designation: "Managing Director",
      image:
        "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/e2945b00-5027-4353-97b8-ca723bb95000/public",
      company: "M/s. Hidesign India Pvt. Ltd",
    },
    {
      name: "Shri Javed Iqbal",
      designation: "Managing Director",
      image:
        "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/2a92b3f9-ab7b-4c3d-2207-7aa62e157b00/public",
      company: "Naaz Exports Pvt. Ltd.",
    },
    {
      name: "Shri Kumar Nitesh",
      designation: "CEO – Footwear Business",
      image:
        "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/58e7e526-ef6b-4fc0-aa82-54815b58b400/public",
      company: "M/s. Reliance Retail Ltd.",
    },
    {
      name: "Mr. P. S. Suresh.",
      designation: "CEO of Calsea Footwear (P) Ltd.",
       image:
         "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/08f33ecc-02a2-41f0-5ed0-61a691056800/public",
      company: "A wholly-owned subsidiary of TATA International Limited",
    },
    {
      name: "Shri Anjan Kundu",
      designation: "Head – Supply Chain Management",
      image:
        "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/73ced810-c765-4637-ac59-a292b9593c00/public",
      company: "M/s. Bata India Ltd.",
    },
    {
      name: "Shri Sanjay Gupta",
      designation: "President",
      image:
        "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/75809d65-a157-4936-68e1-6f7dcd244a00/public",
      company: "IFCOMA",
    },
    // {
    //   name: "Dr. Dnyaneshwar Manohar Mulay",
    //   designation: "Nominee Director",
    //   image:
    //     "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/6d31debd-05ce-4100-c6ce-4f742e4d8a00/public",
    //   company: "National Skill Development Corporation",
    // },
    // {
    //   name: "Shri R. Selvam IAS",
    //   designation: "Executive Director",
    //   image:
    //     "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/234388a5-26c3-4e09-ec51-5d67b2ea4900/public",
    //   company: "Council for Leather Exports",
    // },
    {
  name: "Dr. P. Thanikaivelan",
  designation: "Director",
  image:
    "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/18bd254e-0a16-4b05-67da-c93de6924900/public",
  company: "Central Leather Research Institute",
},
    {
      name: "Shri Vivek Sharma, IRS",
      designation: "Managing Director",
      image:
        "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/60b6ff4d-4d2f-4779-d3d9-020285d01c00/public",
      company: "Footwear Design & Development Institutue (FDDI).",
    },
    {
      name: "Shri K. Murali",
      designation: "Director",
      image:
        "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/afb6dfac-75fc-4858-55dd-ad0c64bf7f00/public",
      company: "Central Footwear Training Institute",
    },
     {
      name: "Shri Dharmendra Kumar",
      designation: "Nominee Director",
      image:
        "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/7f369bd5-ad1a-4d8c-407c-cb89286e9800/public",
      company: "NSDC",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    // autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1120,
        settings: { slidesToShow: 5, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2.1, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const sliderRef = useRef(null);

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

      <div className="w-fit mx-auto text-center mt-6">
        <Image
          className="w-[215px] rounded-3xl object-cover"
          src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/2798584d-3d85-4f2d-8461-0a25f190e700/public"
          alt={"name"}
          width={500}
          height={500}
          priority
          quality={80}
        />

        <h3 className="font-medium mt-2">Shri Sanjay Leekha</h3>
        <p className="text-sm font-normal">Chairman, Leather Sector Skill Council</p>
        <p className="text-sm font-normal">CMD, Alpine Apparels Pvt.Ltd.</p>
      </div>
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
        <Slider ref={sliderRef} {...settings}>
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
