import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";
import Link from "next/link";

const IndustryAssociates = () => {
  return (
    <section id="association" className="grid gap-10 lg:grid-cols-2">
      <div className="flex flex-col gap-6 items-center justify-center">
        <Image
          className=" h-64 w-full rounded-3xl border-4 object-cover lg:w-[80%]"
          src="/img/partners/7.svg"
          alt="partner"
          width={1200}
          height={600}
        />
        <Image
          className=" h-64 w-full rounded-3xl border-4 object-cover lg:w-[80%]"
          src="/img/partners/8.svg"
          alt="partner"
          width={1200}
          height={600}
        />
      </div>
      <div>
        <StyledHeading
          heading={
            <>
              <span className="text-primary-600">Industry</span> Associates
            </>
          }
          containerStyle="mx-auto"
        />
        <div className="space-y-6">
          <p className="mt-10 font-normal">
            LSSC works closely with leading leather industry manufacturers,
            exporters, and brands to align skilling with real-time industry
            needs. Our network with Industry associations across the country
            facilitates faster and quicker exchange of ideas and execution. In
            close coordination, we are building a future-ready workforce that
            supports innovation, quality, and global competitiveness.
          </p>
          <p className="font-normal">
            The Associations like KLC work with a strong emphasis on sustainable
            practices, technological advancements, and skill development for its
            workforce.
            <Link
              className="text-[#0000FF] underline"
              href="https://drive.google.com/file/d/1kD58Dpi_hR5yHQ8JI5M-BF4V-YE-ehVy/view"
            >
              Read More
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustryAssociates;
