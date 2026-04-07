import React from "react";
import StyledHeading from "../atoms/StyledHeading";
import Image from "next/image";

const KnowledgePartners = () => {
  return (
    <section id="knowledge" className="grid gap-10 lg:grid-cols-2">
      <div>
        <StyledHeading
          heading={
            <>
              <span className="text-primary-600">Knowledge </span> Partners
            </>
          }
          containerStyle="mx-auto lg:mx-0"
        />
        <div className="space-y-6">
          <p className="mt-10 font-normal">
            Our knowledge partners bring deep industry insight, academic
            expertise, and research capabilities to support curriculum
            development, training design, and policy inputs. Through these
            collaborations, LSSC ensures that its skilling programs remain
            current, future-focused, and globally relevant
          </p>
          <p className="font-normal">
            We have dedicated partners designed to support and strengthen
            India’s leather and footwear industry. It connects businesses with
            the skilled workforce they need, as well as verified vendors and
            reliable fabricators, bridging critical gaps across the value chain.
          </p>
          <p className="font-normal">
            The valued knowledge partner of LSSC plays a vital role in enriching
            the skilling ecosystem through its deep domain expertise and
            industry insight. It actively supports LSSC in developing
            industry-aligned curricula and advancing comprehensive,
            outcome-driven skilling initiatives across the sector.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          className="border-primary-200  w-full rounded-3xl border-4 object-cover lg:w-[80%]"
          src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/96580f24-4344-43ad-a71a-5055660fab00/public"
          alt="partner"
          width={1200}
          height={600}
        />
      </div>
    </section>
  );
};

export default KnowledgePartners;
