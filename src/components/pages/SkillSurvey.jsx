import Link from "next/link";
import React from "react";
import BackButton from "../atoms/BackButton";

const SkillSurvey = () => {
  return (
    <main className="py-6 container">
      <BackButton />
      <section className="space-y-6 ">
        <div className="bg-[#EBF7FF] space-y-3 mx-auto w-fit  shadow-three rounded-xl p-2">
          <h4 className="text-2xl text-center font-bold text-[#073B4C]">
            <Link
              className="underline"
              href={
                "https://www.figma.com/design/cNeMLQRgjUrn19389Zk1hq/Lssc-DEV?node-id=27-11000&t=tChEcCxcSms2FaK1-0"
              }
            >
              {" "}
              FUTURISTIC SKILLS SURVEY QUESTIONNAIRE{" "}
            </Link>
            <br />
            MAY 2025
          </h4>
        </div>
        <div className="lg:w-[80%] space-y-6 mx-auto">
          <p className="font-normal text-lg">
            As the leather, footwear, accessories, garment, saddlery and allied
            industries evolve rapidly with advancements in technology and
            sustainability, it is essential to align our workforce with the
            future needs of the sector.{" "}
          </p>
          <p className="font-normal text-lg">
            This survey is an initiative by the Leather Sector Skill Council
            (LSSC) to assess current capabilities, identify skill gaps, and
            understand emerging trends influencing job roles and training
            requirements in the manufacturing set-up.
          </p>
          <p className="font-normal text-lg">
            Your input is invaluable. Your insights will guide the development
            of forward-looking training programs, enable industry-academia
            collaborations, and inform policy frameworks to build a future-ready
            workforce.
          </p>
          <p className="font-normal text-lg">
            Estimated Time to Complete: 5-8 minutes
          </p>
          <p className="font-normal text-lg">
            Target Respondents: Industry professionals, manufacturers,
            exporters, training institutions, and other stakeholders across the
            leather value chain.
          </p>
        </div>
        <h4 className="text-2xl bg-[#EBF7FF] px-4 py-1 w-fit rounded-lg mx-auto underline text-center font-bold text-[#073B4C]">
          <Link
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLScIp4npL-BIfb-4fv_GfkMNhh2d87kv3dcNORZoeKUR2tmrnA/viewform"
            }
          >
            {" "}
            FILL FORM{" "}
          </Link>
        </h4>
      </section>
    </main>
  );
};

export default SkillSurvey;
