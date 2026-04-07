import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const LeatherClusterSkill = () => {
  return (
    <section id="skill-infrastructure" className="lg:w-[80%] mx-auto">
      <StyledHeading
        heading={
          <>
            <span className="text-primary-600">Skill </span> Infrastructure in
            Leather Clusters
          </>
        }
        containerStyle="mx-auto mt-16"
      />

      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-4">
        <div className="rounded-xl">
          <Image
            className="h-full w-full rounded-xl object-cover"
            src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/52313896-d957-4b9a-250b-473c068c5900/public"
            alt=""
            width={300}
            height={600}
          />
        </div>
        <div className="space-y-4">
          <div className="space-y-8 rounded-xl text-white bg-[#073B4C] p-6">
            <h4 className="text-xl font-bold">
              State-of-the-Art Skill Centres{" "}
            </h4>
            <p className="text-sm">
              LSSC has set up five “State-of-the-Art” Skill Centres in Odisha
              with NSDC support:
            </p>
            <ol className="text-sm">
              <li>1. Angul</li>
              <li>2. Sambalpur</li>
              <li>3. Dhenkanal</li>
              <li>4. Deogarh</li>
              <li>5. Bhadrak</li>
            </ol>
          </div>
          <div>
            <Image
              src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/7d62c450-ec1a-41d9-70dd-864ad77e6f00/public"
              alt="skill"
              width={300}
              height={600}
              className="h-20 w-full rounded-xl object-cover"
            />
          </div>
        </div>
        <div className="rounded-xl bg-[#1E6091] text-white p-3 lg:col-span-2 lg:p-10">
          <h2 className="mb-4 text-3xl font-semibold ">Centre of Excellence</h2>
          <ul className="space-y-6">
            <li className="text-sm flex gap-2">
              <span className="pt-1.5">
                {" "}
                <IoArrowForwardCircleOutline size={18} />
              </span>
              To strengthen skill development infrastructure, LSSC is working on
              establishing Centres of Excellence in key leather clusters.
            </li>
            <li className="text-sm flex gap-2">
              <span className="pt-1.5">
                <IoArrowForwardCircleOutline size={18} />
              </span>
              Identified five COEs in major leather hubs: Agra Trade Centre,
              Ambur Trade Centre, Kanpur Leather Cluster, BFDS, and Jalandhar.
            </li>
            <li className="text-sm flex gap-2">
              <span className="pt-1.5">
                <IoArrowForwardCircleOutline size={18} />
              </span>
              Proposals submitted to MSDE and respective state governments for
              final approval.
            </li>
            <li className="text-sm flex gap-2">
              <span className="pt-1.5">
                <IoArrowForwardCircleOutline size={18} />
              </span>
              Establishing a Design Studio for Persons with Disabilities (PwD)
              at GIID, Tambaram, sponsored by AVT Leather & Allied Industries
              Pvt. Ltd, Chennai.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LeatherClusterSkill;
