import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";

const MediaPartners = () => {
  return (
    <section id="media" className="grid gap-10 lg:grid-cols-2">
      <div className="flex items-center justify-center">
        <Image
          className="border-primary-200 w-full aspect-video rounded-3xl border-4 object-cover lg:w-[80%]"
          src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/789d883c-f821-4360-60bf-6e7e453b3e00/public"
          alt="partner"
          width={1200}
          height={600}
        />
      </div>
      <div>
        <StyledHeading
          heading={
            <>
              <span className="text-primary-600">Media</span> Partners
            </>
          }
          containerStyle="mx-auto"
        />
        <p className="mt-10 font-normal">
          Our media partners play a pivotal role in amplifying our vision and
          mission across the industry. Through strategic collaborations with
          leading publications, digital platforms, and broadcasting networks, we
          ensure that our stories, innovations, and milestones reach the right
          audience locally and globally.
          <br />
          <br />
          These valued partnerships help us share insights, promote key events,
          feature expert voices, and spotlight industry advancements. With their
          support, we continue to foster a more connected, informed, and
          forward-thinking ecosystem for all stakeholders in the leather,
          footwear, and fashion industries.
          <br />
          <br />
          We proudly recognize our media allies for their continued support in
          building visibility, credibility, and influence across the sector.
        </p>
      </div>
    </section>
  );
};

export default MediaPartners;
