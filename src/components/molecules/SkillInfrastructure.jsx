import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";

const SkillInfrastructure = () => {
  return (
    <section className="grid gap-10 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <Image
          className="border-primary-200 h-80 rounded-xl border-2 object-cover"
          src="/img/skills/3.png"
          alt="skill-infra"
          width={1000}
          height={600}
        />
      </div>
      <div className="lg:col-span-3">
        <StyledHeading
          heading={
            <>
              <span className="text-primary-600">Skill</span> Infrastructure
            </>
          }
          containerStyle="mx-auto"
        />

        <div className="mt-10 space-y-4">
          <h4 className="text-2xl font-bold">
            Creating Skill Infrastructure in Leather Clusters
          </h4>
          <div>
            <h5 className="font-bold">
              I. Centre of Excellence (COE) Initiatives
            </h5>
            <p className="font-normal">
              To strengthen skill development infrastructure, LSSC is working on
              establishing Centres of Excellence in key leather clusters.
            </p>
          </div>
          <p className="font-normal">
            Identified five COEs in major leather hubs: Agra Trade Centre, Ambur
            Trade Centre, Kanpur Leather Cluster, BFDS, and Jalandhar. Proposals
            submitted to MSDE and respective state governments for final
            approval.
          </p>
          <p className="font-normal">
            Establishing a Design Studio for Persons with Disabilities (PwD) at
            GIID, Tambaram, sponsored by AVT Leather & Allied Industries Pvt.
            Ltd, Chennai.
          </p>
          <div>
            <h5 className="font-semibold">
              II. Established State-of-the-Art Skill Centres
            </h5>
            <p className="font-normal">
              LSSC has set up five “State-of-the-Art” Skill Centres in Odisha
              with NSDC support:
            </p>
            <ul>
              <li className="font-normal">1. Angul</li>
              <li className="font-normal">2. Sambalpur</li>
              <li className="font-normal">3. Dhenkanal</li>
              <li className="font-normal">4. Deogarh</li>
              <li className="font-normal">5. Bhadrak</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillInfrastructure;
