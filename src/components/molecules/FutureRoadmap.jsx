import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";

const FutureRoadmap = () => {
  return (
    <section id="future-roadmap">
      <StyledHeading
        heading={
          <>
            <span className="text-primary-600">Future </span> Roadmap
          </>
        }
        containerStyle={"mx-auto"}
      />
      <h2 className="mb-10 text-center text-3xl font-bold">
        LSSC aims to further expand its initiatives by:
      </h2>
      <Image
        src="/img/lssc-aim.svg"
        alt="skill"
        width={1000}
        height={1000}
        className="w-full mb-10"
      />
    </section>
  );
};

export default FutureRoadmap;
