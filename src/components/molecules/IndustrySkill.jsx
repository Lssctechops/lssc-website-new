import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";

const IndustrySkill = () => {
  return (
    <section>
      <StyledHeading
        heading={
          <>
            <span className="text-primary-600">Skill</span> First For Industry
          </>
        }
        containerStyle="mx-auto"
      />

      <div className="mt-10 grid lg:grid-cols-2">
        <div>
          <h4 className="mb-4 text-2xl font-bold">
            Supporting the Industry in Adopting a Skill-First Approach{" "}
          </h4>
          <div className="space-y-4">
            <h5 className="font-bold">I. Fee-Based Training Programs. </h5>
            <p>Structured training programs for workforce enhancement.</p>
            <p>
              Advanced skill training in leather processing, product design, and
              quality assurance.
            </p>
            <p>Customized programs for export-oriented manufacturing units.</p>

            <h5 className="font-bold">
              II. Development of National Occupational Standards (NOS) and
              Qualification Packs (QPs)
            </h5>
            <p>
              Developed 18+ Qualification Packs (QPs) for job roles across
              footwear, leather goods, garments, saddlery, and finished leather.
            </p>
            <p>
              Ensuring uniform training and assessment standards aligned with
              industry needs.
            </p>

            <h5 className="font-bold">III. Digital Learning Solutions</h5>
            <p>
              Launched digital platforms and e-learning modules to enhance
              accessibility and efficiency. Introduced VR/AR (Virtual
              Reality/Augmented Reality) training modules in the leather indus
            </p>
          </div>
        </div>
        <div className="relative h-96">
          <Image
            className="border-primary-200 absolute right-0 z-10 h-48 w-80 rounded-xl border-2"
            src="/img/skills/17.jpeg"
            alt="skill-first"
            width={500}
            height={500}
          />
          <Image
            className="border-primary-200 absolute top-36 right-60 h-60 w-40 rounded-xl border object-cover"
            src="/img/skills/18.jpeg"
            alt="skill-first"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default IndustrySkill;
