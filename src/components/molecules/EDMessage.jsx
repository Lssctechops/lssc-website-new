import Image from "next/image";
import React from "react";

const EDMessage = () => {
  return (
    <div className="w-full p-5 lg:p-10 h-fit bg-[#FFF5F5]  rounded-[12px]">
      <div className="w-full flex flex-col lg:grid items-center md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-7">
        {/* image side  */}
        <div className="mx-auto xl:w-[75%] flex justify-center flex-col gap-2">
          <Image
            src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/0fe75bb2-cd9c-4a2e-a82a-41bd2cea6700/public"
            
            alt="Mukhtarul Amin"
            height={254}
            width={214}
            className="w-full h-auto rounded-2xl"
          />

          <h3 className="text-[14px] text-center md:text-[16px] lg:text-[18px] font-medium capitalize">
            Mr. Atul Kumar Mishra
          </h3>
        </div>

        {/* content  */}

        <div className="w-full col-span-2 xl:col-span-3 flex flex-col gap-2 md:gap-3">
          <h2 className="text-[18px] md:text-[20px] lg:text-[24px]  font-bold">
            From the Desk of Chief Executive Officer
          </h2>

          <div className="font-medium space-y-4 text-[10px] sm:text-[12px] md:text-[13px] lg:text-[14px] leading-relaxed text-gray-800">
            <p>Dear Members,</p>

            <p>
              I am pleased to share recent developments that promise to
              accelerate the growth of India’s leather industry. I extend my
              sincere thanks to the Government of India for the strong support
              in Union Budget 2025, including the removal of export duties on
              crust leather, import duties on wet blue leather, and the launch
              of a targeted production-linked incentive scheme. These are vital
              steps to enhance manufacturing, boost exports, and create
              employment.
            </p>
            <p>
              LSSC remains focused on upskilling the workforce with futuristic
              competencies—smart manufacturing, sustainable processing, digital
              design, and Industry 4.0 practices—to keep the sector globally
              competitive. We are aligned with major skilling initiatives like
              PMKVY, which empowers youth through demand-driven training, and
              the PM Vishwakarma Scheme, which supports traditional artisans
              with formal recognition, digital tools, and upskilling. We also
              highlight the National Apprenticeship Promotion Scheme (NAPS),
              which blends classroom training with on-the-job learning to create
              a future-ready workforce.
            </p>

            <p>
              Let us embrace innovation, invest in skill development, and work
              together to lead the leather sector into a new era of excellence.
            </p>
            <p>
              Warm regards,
              <br />
              Atul Kumar Mishra
              <br />
              Interim Chief Executive Officer
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EDMessage;
