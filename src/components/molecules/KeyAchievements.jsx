"use client";

import React, { useState } from "react";
import StyledHeading from "../atoms/StyledHeading";
import Image from "next/image";
import { LuCheckCheck } from "react-icons/lu";
import LottiePlayer from "./LottiePlayer";
import AnimationDtat from "../../../public/Flow 3.json";
const KeyAchievements = ({
  heading = (
    <>
      <span className="text-primary-600">Key</span> Achievements
    </>
  ),
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section id="key-achievement" className="py-12">
      <div className="container grid grid-cols-1 items-center lg:grid-cols-2 gap-14 md:gap-10 xl:gap-14">
        {/* image grid  */}
        {/* <div className="flex flex-col gap-3">
          <Image
            src="/img/achievement/1.jpg"
            height={200}
            width={400}
            className="object-cover max-h-[300px] rounded-xl md:rounded-2xl w-full aspect-video"
          />

          <div className="w-full grid grid-cols-2 gap-3">
            <Image
              src="/img/achievement/2.png"
              height={200}
              width={400}
              className="object-cover max-h-[300px] rounded-xl md:rounded-2xl w-full aspect-video"
            />{" "}
            <Image
              src="/img/achievement/3.jpg"
              height={200}
              width={400}
              className="object-cover max-h-[300px] rounded-xl md:rounded-2xl w-full aspect-video"
            />
          </div>
        </div> */}
        <div
          className="w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <LottiePlayer
              animationData={AnimationDtat}
              autoplay
              className="w-full h-full"
            />
          ) : (
            <Image
              height={300}
              width={200}
              src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/f8536e2f-c9d4-47fd-3fd8-ea4348d06500/public"
              className="w-full"
              alt="Preview"
            />
          )}
        </div>

        <div className="w-full flex flex-col gap-5 xl:gap-7">
          <StyledHeading containerStyle="mx-auto lg:mx-0" heading={heading} />

          <div className="font-medium text-[14px] lg:text-[18px] leading-relaxed text-gray-800">
            <p className="mb-4 inline-flex  gap-2">
              <span>
                <LuCheckCheck color="#0070BA" size={24} />
              </span>{" "}
              Trained over 1,40,000 candidates through various skill training
              programs under Government of India and State Government
              initiatives.
            </p>
            <p className="mb-4 inline-flex gap-2">
              <span>
                <LuCheckCheck color="#0070BA" size={24} />
              </span>{" "}
              Assessed and certified more than 5,50,000 candidates in different
              job roles.
            </p>
            <p className="mb-4 inline-flex gap-2">
              <span>
                <LuCheckCheck color="#0070BA" size={24} />
              </span>{" "}
              Established as the National Monitoring Unit (NMU) for the IFLADP
              Scheme, ensuring the effective execution of skill training under
              the Integrated Development of Leather Sector by DPIIT.
            </p>
            <p className="mb-4 inline-flex gap-2">
              <span>
                <LuCheckCheck color="#0070BA" size={24} />
              </span>{" "}
              Presence in major leather clusters across North, South, East, and
              West India.
            </p>
            <p className="mb-4 inline-flex gap-2">
              <span>
                <LuCheckCheck color="#0070BA" size={24} />
              </span>{" "}
              Implemented online video-based monitoring for all skill
              development projects to ensure transparency and effectiveness.
            </p>
            <p className="mb-4 inline-flex gap-2">
              <span>
                <LuCheckCheck color="#0070BA" size={24} />
              </span>{" "}
              Provided nationally recognized certification to trained
              candidates, enhancing their employability.
            </p>{" "}
            <p className="inline-flex gap-2">
              <span>
                <LuCheckCheck color="#0070BA" size={24} />
              </span>{" "}
              Facilitated employment by supporting industries in workforce
              placement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;
