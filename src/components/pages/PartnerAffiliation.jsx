import Link from "next/link";
import BackButton from "../atoms/BackButton";
import Image from "next/image";
import { FaEye } from "react-icons/fa6";

const PartnerAffiliation = () => {
  return (
    <main className="py-6">
      <section className=" container ">
        <BackButton />
        <div className="w-full space-y-6">
          <h2 className="  text-center font-bold text-2xl lg:text-4xl text-[#073B4C]">
            Training Partner Affiliation
          </h2>

          <h3 className="bg-[#F5FBFF]  w-fit px-6 py-3 rounded-lg">
            <Link
              href={
                "https://docs.google.com/document/d/1QkN2SITcB6RVjl_rZWrvRX_J_Dgs3WsO/edit?rtpof=true&sd=true&tab=t.0"
              }
              className="text-[#073B4C] flex item-center gap-2  text-2xl font-bold underline "
            >
              <FaEye />
              Affiliation form
            </Link>
          </h3>

          <p>
            ++ Training partners can get affiliated with the LSSC provided they
            meet the criteria and follow the protocols. LSSC follows stringent
            guidelines set by NSDC in identifying, assessing and approving
            public and private training institutes in region to deliver NSQF and
            NOS aligned curriculum.
          </p>

          <h3 className="text-[#073B4C] text-2xl font-bold  ">
            Who can affiliate with LSSC:{" "}
          </h3>
          <ul>
            <li>
              Any private or public academic institution or Vocational Training
              provider (VTP) in the domain of leather education and skill
              development
            </li>
            <li>
              Corporates looking for aligning their training departments with
              CSR budgets
            </li>
            <li>
              Stand alone training companies operating in the private space
            </li>
            <li>Leather training academies</li>
          </ul>

          <h3 className="text-[#073B4C] text-2xl font-bold  ">
            Benefits of affiliation:{" "}
          </h3>
          <ul>
            <li>
              Alignment of training with National Skill Qualification Framework
              (NSQF) leading to equivalence with educational degrees, diplomas
              and certifications.
            </li>
            <li>
              Ratification of National Occupational Standards (NOS) based
              curriculum.
            </li>
            <li>
              Access to Master Trainers of LSSC and certification of the
              trainers of the affiliating training provider.{" "}
            </li>
            <li>
              Assist in On the Job Training (OJT) and / or Placements of the
              affiliating partner trainees.
            </li>
            <li>Assessment of trainees on NOS based curriculum.</li>
            <li>
              Industry recognized Certification of the successful trainees.
            </li>
            <li>
              Participation in Government led programs at institutional and
              state level, aligned to NSQF.
            </li>
            <li>
              Access to the reports on the Sectorial Researches conducted by the
              LSSC
            </li>
            <li>
              Participation in the various sector specific seminars and events
            </li>
            <li>Access to international bodies available in similar space</li>
          </ul>

          <h3 className="text-[#073B4C] text-2xl font-bold  ">NOTE: </h3>
          <ul>
            <li>
              1. Submission of application does not guarantee affiliation.
            </li>
            <li>2. Application fee is NON-REFUNDABLE</li>
            <li>
              3. Complete documents are required to be submitted along with
              application for processing the request. In case documents are
              deficient request will not be considered.
            </li>
            <li>
              4. Observations if any, are to be cleared within time specified to
              ensure the request is not closed.
            </li>
            <li>
              5. Attach supporting documents wherever required. Please sign and
              stamp every page of the document.
            </li>
            <p>
              To apply for affiliation, submit completed copies of the
              appropriate affiliation form and evaluation form and send it to:
            </p>
            <p>
              Leather Sector Skill Council <br /> CFTI Campus, Annex Building,{" "}
              <br /> No.65/1, GST Road, <br />
              Guindy, Chennai – 600 032.
            </p>
          </ul>
          <Image
            className="lg:w-[50%]"
            src={"/img/partculars.svg"}
            alt="particulars"
            width={1000}
            height={1000}
          />
        </div>
      </section>
    </main>
  );
};

export default PartnerAffiliation;
