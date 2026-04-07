import StyledHeading from "../atoms/StyledHeading";
import ImpactCard from "./ImpactCard";

const Impact = () => {
  return (
    <section className="px-5 py-12">
      <StyledHeading
        containerStyle="mx-auto mb-10"
        heading={<span className="text-primary-600">Impact</span>}
      />
      <p className="mx-auto text-center mb-8 lg:w-[60%]">
        LSSC has positively impacted key stakeholders in the skill development
        ecosystem through training, certification and content development for
        various job roles.
      </p>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        <ImpactCard
          iconSrc="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/98440b13-acc0-4240-2aea-24493bb15900/public"
          title="Training Centers"
          count="12"
        />
        <ImpactCard
          iconSrc="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/ca0e06e5-e7c1-4f4a-bfb1-5bf54810ba00/public"
          title="Trained Candidates"
          count="438985"
        />
        <ImpactCard
          iconSrc="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/47a4dd8e-b188-409e-aa78-e6aacb585c00/public"
          title="Assessed Candidates"
          count="428092"
        />
        <ImpactCard
          iconSrc="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/d9c76108-9992-44aa-ba29-6c34f4c9ec00/public"
          title="Associates"
          count="22"
        />
      </div>
    </section>
  );
};

export default Impact;
