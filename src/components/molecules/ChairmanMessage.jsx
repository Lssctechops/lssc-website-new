"use client";

import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import EDMessage from "./EDMessage";
import { useState } from "react";
import { BsArrow90DegDown } from "react-icons/bs";
import { IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";
const ChairmanMessage = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="space-y-10">
      <section className="relative rounded-3xl border-2 border-gray-200 bg-gray-50 shadow-lg shadow-blue-200">
        <StyledHeading
          heading={
            <>
              <span className="text-primary-600">The</span> Chairman's Message
            </>
          }
          containerStyle={"absolute -top-10 left-1/2 -translate-x-1/2"}
        />
        <div className="grid gap-10 p-3 lg:grid-cols-5 lg:gap-0 lg:p-10">
          <div className="flex flex-col items-center justify-center gap-4 lg:col-span-2">
            <Image
              className="h-96 w-72 rounded-3xl bg-gradient-to-t to-transparent object-cover shadow-[4px_4px_4px_0px_#00000040]
"
              src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/2798584d-3d85-4f2d-8461-0a25f190e700/public"
              alt="chairman"
              width={600}
              height={1200}
            />
            {/* <h2 className="text-3xl font-semibold">Shri Sanjay Leekha</h2> */}
            <h3 className="text-[14px] text-center md:text-[16px] lg:text-[18px] font-medium">
              Shri Sanjay Leekha
            </h3>
          </div>
          <div className="space-y-6 lg:col-span-3">
            <p className="flex gap-2">
              <sup>
                <FaQuoteLeft size={25} color="#0070ba" />
              </sup>{" "}
              Dear Friends,
            </p>
            <p>
              The Indian leather and footwear sector stands at the threshold of
              a transformative era. With rising global demand, a shift toward
              sustainable practices, and rapid technological advancements, our
              industry is poised for remarkable growth. However, to fully
              realise this potential, we must address one of our most pressing
              challenges — the skill gap.
            </p>
            <p>
              A “Skill-First” approach is no longer optional, it is imperative.
              As automation, digitisation, and sustainability reshape
              manufacturing processes, we must align our people with the
              evolving demands of the industry — from advanced machinery
              handling to digital quality control and sustainable product
              development.
            </p>
            <p>
              I urge the industry to wholeheartedly embrace skill development as
              a core business strategy. The Government of India has introduced
              several forward-looking schemes and initiatives focused on
              skilling, upskilling, and reskilling the workforce. These programs
              are not just opportunities — they are enablers of long-term
              competitiveness and growth.  There is no better time for entrants
              and experienced professionals to take charge of their own learning
              journeys. Whether it’s a first-time skilling program or
              cross-functional re-skilling, this is the time to enhance your
              capabilities and future-proof your careers.
            </p>
            <p>
              The Leather Sector Skill Council (LSSC) remains committed to
              bridging the skill gap through innovative training modules,
              industry-aligned curricula, and partnerships that ensure talent
              meets opportunity. Together, let us build a skilled, agile, and
              globally competitive Indian leather industry that leads not just
              in output, but in excellence.
            </p>
            <p className="flex gap-2">
              Let us invest in skills — because the future belongs to those who
              are prepared for it.{" "}
              <sub>
                <FaQuoteRight size={25} color="#0070ba" />
              </sub>
            </p>
            <p>Best Wishes</p>
            {/* <button
              onClick={() => setIsShow(!isShow)}
              className="text-primary-600 font-medium text-sm cursor-pointer inline-flex items-center gap-.5"
            >
              Message from ED{" "}
              <span className={`${isShow && "rotate-180"} text-lg`}>
                <IoMdArrowDropdown />
              </span>
            </button> */}
          </div>
        </div>
      </section>

      <EDMessage />
    </div>
  );
};

export default ChairmanMessage;
