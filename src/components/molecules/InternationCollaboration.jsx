import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";
import Link from "next/link";
import { FaEye } from "react-icons/fa6";

const InternationCollaboration = () => {
  return (
    <section>
      <StyledHeading
        heading={
          <>
            <span className="text-primary-600">International</span>{" "}
            Collaboration
          </>
        }
        containerStyle="mx-auto"
      />
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <h4 className="text-2xl font-bold">Collaboration and Partnerships</h4>
          <p>
            MoU with AUSTRADE (Australian Trade and Investment Commission, New
            Delhi) to strengthen international collaboration and adopt best
            practices from Australia.
          </p>
          <p>
            Conducted a Skill Gap Study for tanneries and leather goods
            manufacturers in Kolkata Leather Complex, in collaboration with
            Solidaridad Network and Switch Asia.
          </p>
          <p>
            Actively participated in India Skills 2024, winning five medals in
            Leather Shoe Making and Leather Garment Making competitions
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <Image
            className="border-primary-200 w-full rounded-lg border-4 object-cover lg:w-1/2"
            src="/img/skills/1.png"
            alt="skill-1"
            width={500}
            height={500}
          />
          <Image
            className="border-primary-200 w-full rounded-lg border-4 object-cover lg:w-1/2"
            src="/img/skills/2.png"
            alt="skill-1"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default InternationCollaboration;
