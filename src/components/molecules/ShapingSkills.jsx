"use client";

import { useState } from "react";
import StyledHeading from "../atoms/StyledHeading";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const ShapingSkills = () => {
  const [content, setContent] = useState({
    title: "GOVERNMENT SCHEMES",
    content: (
      <>
        <div className="text-[14px] md:text-[16px]">
          <p className="font-semibold">
            I. PMKVY 4.0 (Pradhan Mantri Kaushal Vikas Yojana)
          </p>
          <ul className="text-gray-700">
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Special Projects: 3,500 candidates trained.
            </li>
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Recognition of Prior Learning (RPL): 30,400  certified.
            </li>
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Futuristic Skills RPL: 2,300  trained.
            </li>
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Short-Term Training (STT) in NE: 4,500 trained
            </li>
          </ul>
        </div>

        <div className="text-[14px] md:text-[16px]">
          <p className="font-semibold">II. PM Vishwakarma Yojana</p>
          <ul className="text-gray-700">
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Trained 560 Trainers & Assessors.
            </li>
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Assessed & certified over 95,000 artisans.
            </li>
          </ul>
        </div>

        <div className="text-[14px] md:text-[16px]">
          <p className="font-semibold">
            III. State Skill Development Missions (SSDMs){" "}
          </p>
          <ul className="text-gray-700">
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              West Bengal SC/ST Skill Training
            </li>
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Training for PwD in Tamil Nadu
            </li>
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Andhra Pradesh (PM Ajay Scheme)
            </li>
          </ul>
        </div>

        <div className="text-[14px] md:text-[16px]">
          <p className="font-semibold">
            IV. National Apprenticeship Promotion Scheme (NAPS){" "}
          </p>
          <ul className="text-gray-700">
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Industry-led on-the-job training through apprenticeships.{" "}
            </li>
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Developed 15+ Apprenticeship Curricula{" "}
            </li>
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              5,000+ enrolled apprentices across India.{" "}
            </li>
          </ul>
        </div>
      </>
    ),
    route: "/what-we-do#government-scheme",
  });
  return (
    <section className="py-12">
      <div className="container flex flex-col gap-5 xl:gap-7">
        <div className="w-full flex flex-col gap-5 xl:gap-7">
          <StyledHeading
            containerStyle="mx-auto"
            heading={
              <>
                <span className="text-primary-600">Shaping Skills, </span>{" "}
                Powering Industry
              </>
            }
          />
          <div className="w-full bg-gray-50 border lg:grid lg:grid-cols-2 gap-1 xl:gap-8 border-gray-100 rounded-[20px] p-4 md:p-7 lg:p-8">
            {/* image  */}

            <div className="w-full hidden lg:block">
              <div className={`grid grid-cols-8 gap-3 xl:gap-4 group`}>
                {features.map((feature, index) => (
                  <div
                    onMouseEnter={() => setContent(feature)}
                    key={index}
                    className="feature-card h-[450px] rounded-xl overflow-hidden relative"
                  >
                    {/* Text Content (always visible) */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-primary-600 transition-opacity duration-300 hover:opacity-0">
                      <div className="origin-center transform rotate-90 whitespace-nowrap max-w-[450px] text-white uppercase font-medium text-[18px]">
                        {feature.title}
                      </div>
                    </div>

                    {/* Image Content (shown on hover) */}
                    <div className="absolute inset-0 bg-gray-200 overflow-hidden ">
                      {feature.image && (
                        <div className="w-full relative h-full ">
                          <Image
                            height={300}
                            width={300}
                            src={`${feature.image}`}
                            alt={feature.title}
                            quality={50}
                            className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute w-full bottom-0 py-4 left-0 bg-primary-600 text-center text-white uppercase font-medium text-[18px]">
                            {feature.title}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* content  */}
            <div className="w-full space-y-3">
              <h2 className="text-[25px] md:text-[28px] xl:text-[32px] font-semibold uppercase">
                {content.title}
              </h2>

              {content.content}

              <div className="w-full flex justify-end  mt-5">
                <Link
                  href={content.route || "#"}
                  className="bg-black inline-flex items-center text-white px-4 py-2 rounded-[10px] hover:opacity-65 text-sm"
                >
                  Read More{" "}
                  <span className="text-lg">
                    <MdKeyboardArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShapingSkills;

const features = [
  {
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/00bc0d07-fc0c-4589-e2dd-426079126300/public",

    title: "GOVERNMENT SCHEMES",
    route: "/what-we-do#government-scheme",

    content: (
      <>
        <div className="text-[14px] md:text-[16px]">
          <p className="font-semibold">
            I. PMKVY 4.0 (Pradhan Mantri Kaushal Vikas Yojana)
          </p>
          <ul className="text-gray-700">
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Special Projects: 3,500 candidates trained.
            </li>
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Recognition of Prior Learning (RPL): 30,400  certified.
            </li>
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Futuristic Skills RPL: 2,300  trained.
            </li>
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Short-Term Training (STT) in NE: 4,500 trained
            </li>
          </ul>
        </div>

        <div className="text-[14px] md:text-[16px]">
          <p className="font-semibold">II. PM Vishwakarma Yojana</p>
          <ul className="text-gray-700">
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Trained 560 Trainers & Assessors.
            </li>
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Assessed & certified over 95,000 artisans.
            </li>
          </ul>
        </div>

        <div className="text-[14px] md:text-[16px]">
          <p className="font-semibold">
            III. State Skill Development Missions (SSDMs){" "}
          </p>
          <ul className="text-gray-700">
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              West Bengal SC/ST Skill Training
            </li>
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Training for PwD in Tamil Nadu
            </li>
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Andhra Pradesh (PM Ajay Scheme)
            </li>
          </ul>
        </div>

        <div className="text-[14px] md:text-[16px]">
          <p className="font-semibold">
            IV. National Apprenticeship Promotion Scheme (NAPS){" "}
          </p>
          <ul className="text-gray-700">
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Industry-led on-the-job training through apprenticeships.{" "}
            </li>
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Developed 15+ Apprenticeship Curricula{" "}
            </li>
            <li className="flex gap-3">
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              5,000+ enrolled apprentices across India.{" "}
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/c8b5555c-2888-436a-c987-ce0f4e7ff200/public",
    title: "SKILL-FIRST APPROACH FOR INDUSTRY",
    content: (
      <>
        <div className="text-[14px] md:text-[16px]">
          <h3 className="font-semibold">I. Structured Training</h3>
          <p className="text-gray-700">
            {" "}
            Fee-Based structured and advanced skill training in leather
            procesing, product design, and quality assurance
          </p>
        </div>

        <div className="text-[14px] md:text-[16px]">
          <h3 className="font-semibold">II. Uniform skilling standards</h3>
          <p className="text-gray-700">
            Development of National Occupational Standards (NOS) and 18+
            Qualification Packs (QPs) for job roles across footwear, leather
            goods, garments, addlery and finished leather
          </p>
        </div>

        <div className="text-[14px] md:text-[16px]">
          <h3 className="font-semibold">III. Industry Partnerships</h3>
          <p className="text-gray-700">
            Partnered with 3, 000+ leading leather manufaturers, footwear
            brands, and MSMEs to facilitate industry-relevant skill training.
          </p>
        </div>

        <div className="text-[14px] md:text-[16px]">
          <h3 className="font-semibold">IV. Digital Solutions</h3>
          <p className="text-gray-700">
            Launched digital platform SCALE and e-Learning modules to enhance
            accessibility and efficiency. Introduced VR/AR (Virtual Relaity /
            Augmented Realtiy) training modules in the leather industry.
          </p>
        </div>
      </>
    ),
    route: "/what-we-do#skill-first-for-industry",
  },
  {
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/f3d0e48b-ce1b-497d-4754-a95d43e97e00/public",

    title: "SKILL INFRASTRUCTURE",
    route: "/what-we-do#skill-infrastructure",

    content: (
      <>
        <div className="text-[14px] md:text-[16px]">
          <h3 className="font-semibold">I. Centre of Excellence (COE)</h3>
          <p className="text-gray-700">
            {" "}
            Proposed establishing Centres of Excellence in key leather clusters:
            Agra Trade Centre, Ambur Trade Centre, Kanpur Leather Cluster, BFDS
            and Jalandhar.
          </p>
        </div>

        <div className="text-[14px] md:text-[16px]">
          <h3 className="font-semibold">II. State-of-the-Art Skill Centres</h3>
          <p className="text-gray-700">
            {" "}
            Set-up five "State-of-the-Art" Skill centers in Odisha with NSDC
            support: Angul , Sambalpur, Dhenkanal, Deogarh and Bhadrak
          </p>
        </div>

        <div className="text-[14px] md:text-[16px]">
          <h3 className="font-semibold">III. Design studio for PwDs</h3>
          <p className="text-gray-700">
            Estabilishing a Design Studio for Persons with Disabilities PwD at
            GIID, Tambaram, sponsored by AVT Leather & Allied Industries Pvt.
            Ltd, Chennai.
          </p>
        </div>
      </>
    ),
  },
  {
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/a77a9fe2-0b63-46aa-2fbc-6bec0459b700/public",

    title: "COLLABORATIONS",
    route: "/what-we-do#international-collaboration",
    content: (
      <>
        <div className="text-[14px] md:text-[16px]">
          <p className="text-gray-700 flex gap-3">
            {" "}
            <Image
              className="h-5 w-5"
              src={"/icon/round.svg"}
              alt="rounded"
              width={100}
              height={100}
            />{" "}
            MoU with AUSTRADE (Australian Trade and Investment Comission, New
            Delhi) for adopting best practices from Australia.
          </p>
        </div>

        <div className="text-[14px] md:text-[16px]">
          <p className="text-gray-700 flex gap-3">
            <Image
              className="h-5 w-5"
              src={"/icon/round.svg"}
              alt="rounded"
              width={100}
              height={100}
            />{" "}
            Consucted a Skill Gap Study for tanneries and leather goods
            manufacturers in Kolkata Leather Complex, in collaboration with
            Solidaridad Network and Switch Asia.
          </p>
        </div>

        <div className="text-[14px] md:text-[16px]">
          <p className="text-gray-700 flex gap-3">
            <Image
              className="h-5 w-5"
              src={"/icon/round.svg"}
              alt="rounded"
              width={100}
              height={100}
            />{" "}
            Actively participated in India Skills 2024, winning five medals in
            Leather Shoe Making and Leather Garment Making competitions.
          </p>
        </div>
      </>
    ),
  },
  {
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/83be7fa5-d9ab-47a7-28ea-51e3cae0eb00/public",

    title: "FUTURE ROADMAP",
    route: "/what-we-do#future-roadmap",

    content: (
      <>
        <h3 className="font-semibold">
          LSSC aims to further expand it's initiatives by:{" "}
        </h3>
        <div className="text-[14px] md:text-[16px]">
          <p className="text-gray-700 flex gap-3">
            <Image
              className="h-5 w-5"
              src={"/icon/round.svg"}
              alt="rounded"
              width={100}
              height={100}
            />{" "}
            Strengthening industry likages fir improved employment
            opportunities.
          </p>
        </div>

        <div className="text-[14px] md:text-[16px]">
          <p className="text-gray-700 flex gap-3">
            <Image
              className="h-5 w-5"
              src={"/icon/round.svg"}
              alt="rounded"
              width={100}
              height={100}
            />{" "}
            Expanding digital learning through e-learning platforms and AI-based
            training tools.
          </p>
        </div>

        <div className="text-[14px] md:text-[16px]">
          <p className="text-gray-700 flex gap-3">
            <Image
              className="h-5 w-5"
              src={"/icon/round.svg"}
              alt="rounded"
              width={100}
              height={100}
            />{" "}
            Enhancing quality monitoring mechnaisms for skill development
            projects.
          </p>
        </div>

        <div className="text-[14px] md:text-[16px]">
          <p className="text-gray-700 flex gap-3">
            <Image
              className="h-5 w-5"
              src={"/icon/round.svg"}
              alt="rounded"
              width={100}
              height={100}
            />
            Supporing MSSMes and traditionalartisans through focused training
            and financial linkages.
          </p>{" "}
        </div>
      </>
    ),
  },
];
