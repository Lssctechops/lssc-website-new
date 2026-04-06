"use client";
import {
  IoChevronDownCircleOutline,
  IoChevronUpCircleOutline,
} from "react-icons/io5";
import { useState } from "react";

const Sample = () => {
  const [isSample, setIsSample] = useState();

  return (
    <section
      onClick={() => setIsSample(!isSample)}
      className="mt-10 rounded-lg lg:w-[80%] mx-auto bg-[#0070BA]"
    >
      <h2 className="text-white  relative text-xl md:text-4xl font-semibold text-center py-1">
        Sample of Letter of Intent
        <span className="absolute right-5">
          {isSample ? (
            <IoChevronUpCircleOutline />
          ) : (
            <IoChevronDownCircleOutline />
          )}
        </span>
      </h2>
      {isSample && (
        <div className="mt-6 p-4 bg-[#fcf1ea] rounded-lg">
          <p>Letter of Intent</p>
          <p>Dummy</p>
          <p>[Upload on Company Letterhead]</p>
          <p>Date: [Insert Date]</p>
          <p className="font-normal">To</p>
          <p className="font-normal">The chief Executive Officer</p>
          <p className="font-normal">Leather Sector Council (LSSC)</p>
          <p className="font-normal">CFTI Campus, New Building 3rd Floor</p>
          <p className="font-normal">65/1, GST Road, Guimdy</p>
          <p className="font-normal">Chennai - 600032</p>

          <div className="py-6 text-[16px] font-normal text-gray-800">
            <h1 className=" font-medium mb-4">
              Subject: Letter of Interest for Collaboration with LSSC in Leather
              Sector Initiatives
            </h1>

            <p className="mb-4">Dear Sir/Madam,</p>

            <p className="mb-4">
              We, at <span className="font-medium">[Company Name]</span>, are
              pleased to express our keen interest in collaborating with the
              <span className="font-medium">
                {" "}
                Leather Sector Skill Council (LSSC)
              </span>{" "}
              to support and strengthen skill development initiatives in the
              <span className="font-medium">
                {" "}
                footwear and leather industry
              </span>
              .
            </p>

            <p className="mb-4">
              In line with our organizational commitment to quality, innovation,
              and sustainability, we are eager to contribute to and benefit from
              LSSC’s mission-driven programs.
            </p>

            <p className="mb-2 font-medium">
              Through this collaboration, we aim to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                Align our internal training systems with{" "}
                <span className="font-medium">
                  National Skills Qualifications Framework (NSQF)
                </span>{" "}
                standards.
              </li>
              <li>
                Participate actively in government-led schemes under{" "}
                <span className="font-medium">Skill India, PMKVY</span>, and
                other relevant initiatives facilitated by LSSC.
              </li>
              <li>
                Offer our infrastructure and technical expertise for{" "}
                <span className="font-medium">Training of Trainers (ToT)</span>{" "}
                and
                <span className="font-medium">
                  {" "}
                  Training of Assessors (ToA)
                </span>{" "}
                programs.
              </li>
              <li>
                Support in{" "}
                <span className="font-medium">
                  curriculum development, industry exposure
                </span>
                , and real-time assessment modules tailored to footwear
                manufacturing processes.
              </li>
            </ul>

            <p className="mb-4">
              We believe that a strategic partnership between industry and LSSC
              can significantly uplift the skill profile of the workforce,
              enhance productivity, and ensure global competitiveness for Indian
              footwear manufacturers.
            </p>

            <p className="mb-4">
              We look forward to a meaningful engagement and would appreciate an
              opportunity to discuss this further at your convenience.
            </p>

            <p className="mb-4">
              Thank you for considering our expression of interest.
            </p>

            <p className="mb-1">Warm regards,</p>
            <p className="font-medium">[Authorized Signatory Name]</p>
            <p>[Designation]</p>
            <p>[Company Name]</p>
            <p>[Address]</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Sample;
