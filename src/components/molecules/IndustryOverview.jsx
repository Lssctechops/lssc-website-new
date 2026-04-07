import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";
import Link from "next/link";

const IndustryOverview = () => {
  return (
    <section className="pb-12 lg:pb-0">
      <StyledHeading
        heading={
          <>
            <span className="text-primary-600">Industry</span> Overview
          </>
        }
        containerStyle="mx-auto"
      />
      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-5 lg:gap-0">
        <div className="lg:col-span-3">
          <h2 className="mb-10 text-xl md:text-3xl font-semibold">
            Leather Industry: A Key Driver of Growth and Employment
          </h2>
          <p className="text-xs md:text-base">
            The leather industry is one of India&apos;s top ten foreign exchange
            earners, playing a vital role in the country&apos;s economy. Backed
            by a strong base of skilled manpower and cutting-edge technology,
            India is known for its eco-sustainable tanning processes and modern
            manufacturing infrastructure. Employing around 4.42 million people,
            the industry is a major source of livelihood, especially in rural
            areas. Women make up about 30% of the workforce
          </p>
          <p className="text-xs md:text-base">
            India&apos;s leather sector is broadly divided into four major
            segments: Tanning, Footwear, Leather Garments, and Leather
            Accessories. The country contributes approximately 13% of global
            leather production and ranks as the second-largest producer and
            consumer of leather footwear in the world.
          </p>
          <p className="text-xs md:text-base">
            Key leather and footwear-producing states include Tamil Nadu, West
            Bengal, Uttar Pradesh, Maharashtra, Punjab, Karnataka, Madhya
            Pradesh, Haryana, Kerala, Rajasthan, and Jammu & Kashmir.
          </p>
          <p className="text-xs md:text-base">
            With an aim to reach a turnover of $47 Bn by 2030, the government of
            India has launched the Indian Footwear and Leather Development
            Programme (IFLDP) with an allocation of INR 1,700 Cr to boost the
            current infrastructure .
          </p>
        </div>

        <div className="w-full  lg:col-span-2 relative flex-center">
          <div className="w-[55%] lg:w-[50%]  max-h-full animate-ping rounded-full absolute aspect-square bg-primary-600/50" />
          <Link href="/who-we-are/initiatives" className="relative z-50">
            <Image
              height={300}
              width={400}
              src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/443d3168-82f8-4822-8218-614e8079cd00/public"
              className="w-[80%] lg:w-full mx-auto object-contain"
            />
          </Link>
        </div>
      </div>

      {/* 👇 FULL WIDTH GRAPH + SCREEN SECTION OUTSIDE GRID 👇 */}
      <div className="w-full mt-10">
        <p className="text-xs md:text-base mb-5">
          India&apos;s productwise share of total leather exports April
          2023-March 2024
        </p>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-10 w-full lg:w-[75%] xl:w-[70%]">
          <div className="w-full lg:w-1/2">
            <Image
              src="/img/Who we are/graph.svg"
              alt="graph"
              width={1000}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <Link
              target="_blank"
              href="https://youtu.be/lK1H7v0Jhuc?si=YJ-5Wx85vMNmmwNl"
            >
              <Image
                src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/defbe285-be76-4fc4-4aac-b5255ee23400/public"
                alt="screen"
                width={1000}
                height={800}
                className="w-full h-auto"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* 👆 END OF FULL WIDTH SECTION 👆 */}
    </section>
  );
};

export default IndustryOverview;
