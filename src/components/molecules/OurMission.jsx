import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";
import { RiCheckDoubleFill } from "react-icons/ri";

const OurMission = () => {
  return (
    <section
      id="mission"
      className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-0"
    >
      <div>
        <StyledHeading
          heading={
            <>
              <span className="text-primary-600">Our</span> Mission
            </>
          }
          containerStyle="mx-auto my-3 lg:my-0"
        />
        <ul className="mt-10 space-y-3">
          {[
            "Develop and implement industry-relevant skill development programs that enhance employability and productivity.",
            "Collaborate with industry stakeholders, government bodies, and academic institutions to bridge the skill gap.",
            "Promote global best practices and standards in leather manufacturing and exports.",
            "Increase the participation of women in the leather workforce by providing inclusive training and employment opportunities.",
            "Empower candidates with the necessary skills and certifications to build sustainable careers in the leather sector.",
            "Advocate for sustainable practices and support transitioning to a circular economy within the leather industry.",
            "Help companies establish a strong skilling and learning culture within their organizations, fostering continuous growth and innovation.",
          ].map((point) => (
            <li className="flex gap-2">
              <span className="flex-nowrap">
                <RiCheckDoubleFill color="#0070ba" size={25} />{" "}
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative flex h-96 w-full items-center justify-end">
        <Image
          className="absolute left-0 h-60 w-52 rounded-3xl border-8 border-white object-cover lg:left-10"
          src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/5037a676-090e-49b9-77c9-834b0d7d6b00/public"
          alt="img"
          width={1000}
          height={1000}
        />
        <Image
          className="h-full w-[75%] rounded-3xl object-cover"
          src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/3fe14edc-b7e5-4c6f-f2ea-a4ef2e660400/public"
          alt="img"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
};

export default OurMission;
