import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";

const OurVision = () => {
  return (
    <section
      id="mission-vision"
      className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-0"
    >
      <div className="relative flex h-96 w-full items-center">
        <Image
          className="absolute right-0 h-60 w-52 rounded-3xl border-8 border-white object-cover lg:right-10"
          src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/74443470-757a-4b92-e096-1face38a6a00/public"
          alt="img"
          width={1000}
          height={1000}
        />
        <Image
          className="h-full w-[75%] rounded-3xl object-cover "
          src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/899a6f5e-6ee8-432a-5ca4-b6b153f29d00/public"
          alt="img"
          width={1000}
          height={1000}
        />
      </div>

      <div>
        <StyledHeading
          heading={
            <>
              <span className="text-primary-600">Our</span> Vision
            </>
          }
          containerStyle="mx-auto my-3 lg:my-0"
        />
        <p className="text-xs md:text-base my-5 lg:my-10 text-center lg:text-start">
          To be the leading catalyst in building a highly skilled, globally
          competitive workforce for India&apos;s leather industry, driving
          innovation, sustainability, and excellence in skill development.
        </p>
        <div className="flex justify-center w-full">
          <Image
            className="w-40 h-40"
            src={"/icon/eyeset.svg"}
            alt="eye"
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default OurVision;
