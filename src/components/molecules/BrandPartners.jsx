"use client";

import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const brandImages = [
  "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/2d2d9407-2d9f-44eb-59d2-520ce40d2100/public",
  "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/5a4456fd-f7a7-4774-d1b6-bbe82635e200/public",
  "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/fafc5811-dba3-4df2-78dd-265371ca8700/public",
  "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/0fc31094-08f5-42ba-2822-0fe6c88d5d00/public",
  "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/a1e408f4-84f6-4f8b-b96f-85d49d235600/public",
  "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/8263175b-7f01-49e9-053f-9615efba0300/public",
  "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/87d1b9bb-e408-4654-b664-29022fbee600/public",
  "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/01f6defc-b92b-45f1-1852-250d3d3df100/public",
];
const BrandPartners = () => {
  return (
    <section id="brand-partners" className="space-y-6">
      <StyledHeading
        heading={
          <>
            <span className="text-primary-600">Brand</span> Partners
          </>
        }
        containerStyle="mx-auto"
      />
      <p className="mx-auto text-center lg:w-[50%]">
        At LSSC, our Brand Partners are more than just collaborators, they are
        visionaries and champions of the leather industry who believe in the
        power of skills, innovation, and transformation. We proudly partner with
        some of the most influential brands, manufacturers, and thought leaders
        across the leather, footwear, apparel, accessories, and saddlery
        segments. <br />
        We are honored to walk this path alongside our esteemed Brand Partners,
        where every partnership is a promise to shape the future, hand in hand.
      </p>

      <Slider {...sliderSettings}>
        {brandImages.map((src, index) => (
          <div key={index} className="flex justify-center px-2  outline-none">
            <Image
              src={src}
              alt={`brand_${index + 1}`}
              width={120}
              height={120}
              className="w-auto h-[120px] object-contain mx-auto lg:h-[160px]"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BrandPartners;

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280, // lg
      settings: {
        slidesToShow: 4.6,
      },
    },
    {
      breakpoint: 1024, // md
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 640, // sm
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480, // xs
      settings: {
        slidesToShow: 2.5,
      },
    },
  ],
};
