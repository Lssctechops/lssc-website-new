import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";

const GovScheme = () => {
  return (
    <section id="government-scheme">
      <StyledHeading
        containerStyle="mx-auto "
        heading={
          <>
            <span className="text-primary-600">Government</span> Schemes
          </>
        }
      />

      <div className="lg:w-[65%] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 xl:gap-10">
        {features.map((item, index) => {
          const {
            title,
            infoTitle,
            infoDesc,
            description,
            image,
            route = "#",
          } = item;
          return (
            <div key={index} className="flip-card w-full  h-[300px]    ">
              <div
                style={{
                  boxShadow: "8px 8px 24px 0px #0000008C",
                }}
                className="flip-card-inner border rounded-xl w-full h-full transition-transform duration-700 transform-style-preserve-3d"
              >
                <div className=" overflow-hidden relative flip-card-front w-full h-full backface-hidden bg-transparent rounded-lg shadow-md p-6 flex flex-col justify-center items-center ">
                  <h2 className="text-2xl bg-[#750C0A] px-2 rounded-lg font-semibold text-center relative z-10 text-white uppercase">
                    {title}
                  </h2>

                  <Image
                    src={`${image}`}
                    height={200}
                    width={150}
                    className="object-cover absolute h-full w-full brightness-75"
                  />
                </div>
                <div
                  className={`flip-card-back absolute overflow-hidden z-50 w-full h-full backface-hidden ${
                    index === 0 || index === 3
                      ? "bg-gradient-to-r from-[#420705] to-[#7B0C0A]"
                      : "bg-gradient-to-r from-[#669BBA] to-[#012F48]"
                  }  rounded-lg shadow-lg p-4 flex flex-col justify-between transform-rotate-y-180`}
                >
                  <h4 className="relative text-left mb-2 text-xl text-white">
                    {infoTitle}
                  </h4>
                  <ul className="space-y-1">
                    {infoDesc?.map((info, i) => {
                      return (
                        <li
                          key={i}
                          className="text-white flex gap-1 items-center text-sm md:text-sm relative z-10"
                        >
                          <IoIosArrowDropright size={20} />
                          {info}
                        </li>
                      );
                    })}
                  </ul>
                  <Link
                    target="_blank"
                    href={route}
                    className="mt-4 inline-flex items-center gap-1 text-xs relative z-10 px-3 py-2 shadow cursor-pointer bg-white text-black rounded-md self-end"
                  >
                    <span className="text-lg">
                      <FaEye />
                    </span>{" "}
                    <span> VIEW</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GovScheme;

const features = [
  {
    title: "PMKVY 4.0",
    description:
      "Employing around 4.42 million people, the industry is a major source of livelihood, especially in rural areas. Women make up about 30% of the workforce.",
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/d062cd28-9207-46e4-ff52-12979c386c00/public",
    route:
      "https://docs.google.com/document/d/16Y0ld0d4_BIW_jB-cqRNawM_MqYGGdl2/edit",
    infoTitle: "Pradhan Mantri Kaushal Vikas Yojna",
    infoDesc: [
      "Special Projects: 3,500 candidates trained.",
      "Recognition of Prior Learning: 30,400  certified.",
      "Futuristic Skills RPL: 2,300 trained.",
      "Special focus on North Eastern states",
      "Short-Term Training (STT) 4,500 trained.",
    ],
  },
  {
    title: "NAPS",
    description:
      "To be the leading catalyst in building a highly skilled, globally competitive workforce for India's leather industry, driving innovation, sustainability, and excellence in skill development.",
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/7512c224-0c3f-43c5-38d9-92221cb25d00/public",
    route:
      "https://docs.google.com/document/d/11uJM1DUb1DGnnCQ4AvEtMb6vDIBCFkic/edit",
    infoTitle: "National Apprenticeship Promotion Scheme ",
    infoDesc: [
      "Industry-led on-the-job training ",
      "Financial incentives for employers ",
      "Structured skill development training.",
      "Developed 15+ Apprenticeship Curricula",
      "5,000+ enrolled apprentices across India",
    ],
  },
  {
    title: "PM VISHWAKARMA",
    description:
      "Trained over 1,40,000 candidates through various skill training programs under Government of India and State Government initiatives. Assessed and certified more than 5,50,000 candidates in different job roles.",
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/58032caf-d2b6-4f49-8a92-48d1a5e3aa00/public",
    route:
      "https://docs.google.com/document/d/1cMcb06msiV0B5Xdp3r2UI2Ii9bNWhpjB/edit",
    infoTitle: " Pradhan Mantri Vishwakarma Yojana ",
    infoDesc: [
      "A flagship initiative of DC MSME and MSDE ",
      "Trained 560 Trainers & Assessors. ",
      "Assessed & certified over 95,000 leather artisans.",
      "Provided market linkages to traditional craftsperson",
      "Enhancing traditional skill with modern techniques",
    ],
  },
  {
    title: "SSDM",
    description:
      "MoU with AUSTRADE Solidaridad Network and Switch Asia. Participated in India Skills 2024.",
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/be5881a9-91c8-4889-23cc-14af05d0e800/public",
    route:
      "https://docs.google.com/document/d/1N1Rm1bcF7efQvemWoPVrWaTHAwXRYUnaGxFFIyaCFLw/edit?tab=t.0",
    infoTitle: " State Skill Development Missions  ",
    infoDesc: [
      "West Bengal SC/ST Skill Training: 300 trained.",
      "Training for PwD in Tamil Nadu: 420 trained ",
      "Andhra Pradesh (PM Ajay Scheme): 300 trained",
      "Collaborating with other state governments",
      "Strengthen local employment opportunities",
    ],
  },
];
