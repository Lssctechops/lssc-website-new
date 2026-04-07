import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";

const TrainingInstitutes = () => {
  return (
    <section id="training-partners" className="grid gap-10 lg:grid-cols-2">
      <div>
        <StyledHeading
          heading={
            <>
              <span className="text-primary-600">Training</span> Partners
            </>
          }
          containerStyle="mx-auto"
        />

        <p className="mt-10 font-normal">
          We collaborate with a network of accredited training institutes to
          deliver high-quality, hands-on skill development training on a scale.
          These institutions play a crucial role in equipping learners with
          practical knowledge and industry-aligned competencies.
        </p>
        <ol className="list-decimal ps-4 pt-2">
          <li className="font-normal">Shri Technologies India LLP </li>
          <li className="font-normal">
            Center for Advanced Research and Development (CARD){" "}
          </li>
          <li className="font-normal">Anayaas Foundation </li>
          <li className="font-normal">George Telegraph Training Institute </li>
          <li className="font-normal">New Lift Enlightment and Sewa Trust </li>
          <li className="font-normal">AISECT Limited </li>
          <li className="font-normal">Kongokz Infra Pvt. Ltd </li>
          <li className="font-normal">
            Sant Rohidas Leather Industries and Charmakar Developement
            Corporation LTD. (LIDCOM)
          </li>
          <li className="font-normal">Asensive Group</li>
        </ol>
      </div>
      <div className="flex items-center justify-center">
        <Image
          className="border-primary-200 h-64 w-full rounded-3xl border-4 lg:w-[80%]"
          src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/958b5f7a-3499-4233-fdde-70ea07668a00/public"
          alt="partner"
          width={1200}
          height={600}
        />
      </div>
    </section>
  );
};

export default TrainingInstitutes;
