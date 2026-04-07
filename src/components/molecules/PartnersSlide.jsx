"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LuCircleChevronLeft, LuCircleChevronRight } from "react-icons/lu";
import StyledHeading from "../atoms/StyledHeading";
import { useRef } from "react";
import PartnerContainer from "../atoms/PartnerContainer";

const PartnersSlide = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="pt-12 lg:pb-12 container pb-20">
      <div className="bg-[#F0F0F0] relative  rounded-xl shadow-lg shadow-gray-300">
        <span className="absolute left-[25%] lg:left-12 -top-12">
          <StyledHeading
            heading={
              <>
                <span className="text-primary-600">Partners</span>
              </>
            }
          />
        </span>

        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute opacity-50 cursor-pointer hover:opacity-90 top-[105%] left-[40%] lg:top-[50%] lg:-left-4 z-10"
        >
          <LuCircleChevronLeft size={28} />
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute opacity-50 cursor-pointer hover:opacity-90 top-[105%] right-[40%] lg:top-[50%] lg:-right-4 z-10"
        >
          <LuCircleChevronRight size={28} />
        </button>

        <div className="lg:pt-24 lg:pb-10 lg:px-10 pt-8 pb-3 px-3 ">
          <Slider className="" ref={sliderRef} {...settings}>
            {partners.map((partner, index) => (
              <PartnerContainer key={index} {...partner} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PartnersSlide;

const partners = [
  {
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/8af1715d-aaa9-4098-94be-33c806296600/public",
    title: "INDUSTRY",
    description:
      "At LSSC, we believe collaboration is the key to sustainable skill development. By forging strategic partnerships with industry leaders, training providers, and assessment agencies, we are creating a robust ecosystem that nurtures talent, ensures quality, and meets the evolving demands of the leather sector. Together, we're shaping a skilled workforce that drives growth, innovation, and global competitiveness.",
    route: "/who-we-are",
  },
  {
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/97cbde7f-ea9b-44b4-1089-432609c8b100/public",
    title: "ASSOCIATION",
    description:
      "LSSC works closely with leading leather industry manufacturers, exporters, and brands to align skilling with real-time industry needs. Our network with Industry associations across the country facilitates faster and quicker exchange of ideas and execution. In close coordination, we are building a future-ready workforce that supports innovation, quality, and global competitiveness.",
    route: "/partners#association",
  },
  {
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/864ac56f-e54f-4eb5-db07-22e7687a7d00/public",
    title: "KNOWLEDGE",
    description:
      "Our knowledge partners bring deep industry insight, academic expertise, and research capabilities to support curriculum development, training design, and policy inputs. Through these collaborations, LSSC ensures that its skilling programs remain current, future-focused, and globally relevant.",
    route: "/partners#knowledge",
  },
  {
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/5538f6e9-3e7b-4be3-bc00-e062764c7200/public",
    title: "TRAINING",
    description:
      "We collaborate with a network of accredited training institutes to deliver high-quality, hands-on skill development training on a scale. These institutions play a crucial role in equipping learners with practical knowledge and industry-aligned competencies. LSSC supports them through curriculum design, trainer certification, and capacity building.",
    route: "/partners#training-partners",
  },
  {
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/64bdd980-5c99-4be0-70fe-84370800cb00/public",
    title: "INSTITUTION",
    description:
      "Our collaboration with universities, technical institutes, and management schools is a two-way exchange of knowledge and skills. While academic institutions impart foundational learning and research into skilling programs, LSSC brings the real-world application and industry linkages to develop job-ready capabilities of students.",
    route: "/partners#assessment",
  },
  {
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/b30a1377-8908-467b-ecde-294da3a6e000/public",
    title: "MEDIA",
    description:
      "Our media partners play a pivotal role in amplifying our vision and mission across the industry. Through strategic collaborations with leading publications, digital platforms, and broadcasting networks, we ensure that our stories, innovations, and milestones reach the right audience locally and globally.",
    route: "/partners#media",
  },
];
