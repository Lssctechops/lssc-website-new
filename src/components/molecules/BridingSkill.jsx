import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const BridingSkill = () => {
  return (
    <section className="py-12 w-full space-y-5 xl:space-y-24">
      <div className="flex-center w-full flex-col gap-5 xl:gap-10 container">
        <StyledHeading />

        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-center max-w-4xl">
          The Leather Sector Skill Council (LSSC) has been working tirelessly to
          bridge skill gaps in the sector and support workforce development
          through structured training programs, industry collaboration, and
          policy advocacy. LSSC also plays a crucial role in assisting the
          industry with the adoption of Industry 4.0 and the transition towards
          smart factories.
        </p>

        <div className="w-full flex flex-col gap-5 xl:grid grid-cols-1 xl:grid-cols-3 xl:gap-7">
          {/* image grid  */}
          <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-3 xl:gap-5">
            {features.map((item, index) => {
              const { title, description, image, route = "#" } = item;
              return (
                <div key={index} className="flip-card w-full  h-[271px]  ">
                  <div className="flip-card-inner shadow-two rounded-[7.24px]  w-full h-full transition-transform duration-700 transform-style-preserve-3d">
                    <div className=" overflow-hidden relative flip-card-front w-full h-full backface-hidden bg-transparent rounded-lg shadow-md p-6 flex flex-col justify-center items-center ">
                      <h2 className="text-3xl font-semibold text-center relative z-10 text-white uppercase">
                        {title}
                      </h2>

                      <Image
                        alt="image"
                        src={`${image}`}
                        height={200}
                        width={150}
                        className="object-cover absolute h-full w-full brightness-75"
                      />
                    </div>
                    <div className="flip-card-back absolute overflow-hidden z-50 w-full h-full backface-hidden bg-black backdrop-blur-[2px] rounded-lg shadow-lg p-4 flex flex-col justify-between transform-rotate-y-180">
                      <p className="text-white text-sm md:text-sm relative z-10">
                        {description}
                      </p>
                      <Link
                        href={route}
                        className="mt-4 inline-flex items-center gap-1 text-xs relative z-10 px-3 py-2 shadow cursor-pointer bg-black text-white rounded-md self-end"
                      >
                        <span> Read more</span>
                        <span className="text-sm">
                          <MdKeyboardArrowRight />
                        </span>
                      </Link>

                      <Image
                        alt="image2"
                        src={image}
                        height={200}
                        width={150}
                        className="object-cover blur-xs absolute top-0 left-0 h-full w-full brightness-50"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="w-full col-span-2 h-fit bg-primary-200 p-5 rounded-[12px] "
            style={{ boxShadow: "8px 8px 24px 0px #0000001F" }}
          >
            <div className="w-full flex flex-col md:grid items-center md:grid-cols-3 gap-4 xl:gap-7">
              {/* image side  */}
              <div className="flex justify-center flex-col gap-2">
                <Image
                  src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/2798584d-3d85-4f2d-8461-0a25f190e700/public"
                  alt="Shri Sanjay Leekha"
                  height={254}
                  width={214}
                  className="w-full xl:w-[80%] mx-auto h-auto rounded-md "
                  style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                />

                <h3 className="text-[14px] text-center md:text-[16px] lg:text-[18px] font-medium">
                  Shri Sanjay Leekha
                </h3>
              </div>

              {/* content  */}
              <div className="w-full col-span-2 flex flex-col gap-2 md:gap-3">
                <h2 className="text-[18px] md:text-[20px] lg:text-[24px]  font-bold">
                  Chairman&apos;s Message
                </h2>

                <div className="font-medium text-[14px] leading-relaxed text-gray-800">
                  <p className="mb-4">
                    “A “Skill-First” approach is no longer optional, it is
                    imperative. As automation, digitisation, and sustainability
                    reshape manufacturing processes, we must align our people
                    with the evolving demands of the industry — from advanced
                    machinery handling to digital quality control and
                    sustainable product development.
                  </p>

                  <p className="mb-4">
                    The Leather Sector Skill Council (LSSC) remains committed to
                    bridging the skill gap through innovative training modules,
                    industry-aligned curricula, and partnerships that ensure
                    talent meets opportunity. We are working towards building an
                    inclusive and empowered workforce by encouraging greater
                    participation of women and persons with disabilities across
                    all roles in the value chain.
                  </p>

                  <p className="mb-4">
                    I urge the industry to wholeheartedly embrace skill
                    development as a core business strategy. The Government of
                    India has introduced several forward-looking schemes and
                    initiatives focused on skilling, upskilling, and reskilling
                    the workforce. These programs are not just opportunities —
                    they are enablers of long-term competitiveness and growth.
                  </p>

                  <p className="mb-4">
                    Together, let us build a skilled, agile, and globally
                    competitive Indian leather industry that leads not just in
                    output, but in excellence.
                  </p>

                  <p>
                    Let us invest in skills — because the future belongs to
                    those who are prepared for it.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <EDMessage />
      </div> */}
    </section>
  );
};

export default BridingSkill;

const features = [
  {
    title: "VISION",
    description:
      "To be the leading catalyst in building a highly skilled, globally competitive workforce for India's leather industry, driving innovation, sustainability and excellence in skill development.",
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/fdda324e-141d-4d9c-d8f5-082bd7048100/public",
    route: "/who-we-are#mission-vision",
  },
  {
    title: "MISSION",
    description:
      "Develop and implement industry-relevant skill development programs that enhance employability and productivity.",
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/bb238846-bcf3-47a8-9401-b9dd20a41900/public",
    route: "/who-we-are#mission",
  },
  {
    title: "GOVERNING COUNCIL",
    description:
      "The Leather Sector Skill Council is guided by a distinguished Governing Body comprising eminent industry leaders and key government nominees.",
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/4091924b-6fc3-4888-daf6-80d3149bcc00/public",
    route: "/who-we-are#governing-council",
  },
  {
    title: "Team",
    description:
      "Our team of passionate professionals with deep industry knowledge is committed to driving excellence in skill development, training, and industry collaboration.",
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/e86b5218-187b-4222-eb82-2bc141f2dd00/public",
    route: "/who-we-are#our-team",
  },
];
