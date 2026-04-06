import Image from "next/image";
import React from "react";

const MinisterQuoteSection = () => {
  return (
    <>
      <div className="w-full py-2 lg:py-12 px-5 lg:px-0">
        <div className="w-full md:container mx-auto bg-[#F0F0F0]  rounded-[24px] overflow-hidden  ">
          <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-10 items-center  p-5 md:p-8 lg:p-10">
            {/* content  */}
            <div className="w-full flex flex-col gap-4 lg:gap-7 lg:col-span-4">
              <blockquote className="w-full text-[16px] lg:text-[18px] text-black font-medium leading-relaxed">
                <p>
                  “We must recognize that young India is breaking barriers,
                  moving beyond traditional career paths, and looking at new
                  opportunities. We are strengthening initiatives, ensuring
                  young Indians get industry-relevant training, language skills,
                  and cultural readiness. A Viksit Bharat by 2047 will be built
                  by individuals ready to take on global challenges, and our job
                  is to make sure they have the right support to get there.”
                </p>
              </blockquote>

              <div className="w-full flex items-center">
                <div className="w-full">
                  <p className="text-lg font-semibold text-gray-900">
                    Jayant Chaudhary
                  </p>
                  <p className="text-base text-gray-600">
                    Hon&apos;ble Minister of State (I/C) for Skill Development
                    and Entrepreneurship and Minister of State for Education,
                    <br />
                    Government of India
                  </p>
                </div>
              </div>
            </div>

            {/* image  */}

            <Image
              src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/ad489e43-400d-4816-f431-940b32361800/public"
              alt="Jayant Chaudhary"
              title="Jayant Chaudhary"
              height={277}
              priority={true}
              width={200}
              quality={50}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MinisterQuoteSection;
