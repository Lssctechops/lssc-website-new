import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";

const LeatherSector = () => {
  return (
    <section
      id="about-us"
      className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-0"
    >
      <div>
        <StyledHeading
          heading={
            <>
              The<span className="text-primary-600"> Leather</span> Sector Skill
              Council
            </>
          }
        />
        <div className="mt-10 space-y-6">
          <p className="text-xs md:text-base">
            LSSC plays a pivotal role in identifying industry-specific skill
            gaps, developing occupational standards, and implementing
            high-quality training programs to meet the evolving needs of the
            sector.
          </p>
          <p className="text-xs md:text-base">
            With a strong focus on innovation, quality, and global
            competitiveness, LSSC collaborates with industry stakeholders,
            training partners, and government bodies to build a skilled and
            future-ready workforce.
          </p>
          <p className="text-xs md:text-base">
            We envision transforming the leather industry through excellence in
            skill development, aligning with national priorities and
            contributing to India&apos;s journey as a leading manufacturing hub
          </p>
        </div>
      </div>
      <div className="relative flex h-96 w-full items-center justify-end">
        <Image
          className="absolute left-0 h-60 w-52 rounded-3xl border-8 border-white object-cover lg:left-10"
          src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/4ec83fcc-eac5-49d1-956b-2562d6e99500/public"
          alt="img"
          width={1000}
          height={1000}
        />
        <Image
          className="h-full w-[75%] rounded-3xl object-cover"
          src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/88187493-1510-413b-48ba-55995e5e9800/public"
          alt="img"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
};

export default LeatherSector;
