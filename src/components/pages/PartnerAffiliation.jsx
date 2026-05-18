import Link from "next/link";
import BackButton from "../atoms/BackButton";
import Image from "next/image";
import { FaEye } from "react-icons/fa6";

const PartnerAffiliation = () => {
  return (
    <main className="py-6">
      <section className="container">
        <BackButton />

        <div className="w-full space-y-6">
          <h2 className="text-center font-bold text-2xl lg:text-4xl text-[#073B4C]">
            Training Partner Affiliation
          </h2>

          <h3 className="bg-[#F5FBFF] w-fit px-6 py-3 rounded-lg">
            <Link
              href="https://docs.google.com/document/d/1QkN2SITcB6RVjl_rZWrvRX_J_Dgs3WsO/edit?rtpof=true&sd=true&tab=t.0"
              className="text-[#073B4C] flex items-center gap-2 text-2xl font-bold underline"
            >
              <FaEye />
              Affiliation form
            </Link>
          </h3>

          <p className="text-lg leading-8">
            Training partners can get affiliated with the LSSC provided they
            meet the criteria and follow the protocols. LSSC follows stringent
            guidelines set by NSDC in identifying, assessing and approving
            public and private training institutes in region to deliver NSQF and
            NOS aligned curriculum.
          </p>

          {/* WHO CAN AFFILIATE */}
          <div className="space-y-4">
            <h3 className="text-[#073B4C] text-2xl font-bold">
              Who can affiliate with LSSC:
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>
                Any private or public academic institution or Vocational
                Training provider (VTP) in the domain of leather education and
                skill development
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
          </div>

          {/* BENEFITS */}
          <div className="space-y-4">
            <h3 className="text-[#073B4C] text-2xl font-bold">
              Benefits of affiliation:
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>
                Alignment of training with National Skill Qualification
                Framework (NSQF) leading to equivalence with educational
                degrees, diplomas and certifications.
              </li>

              <li>
                Ratification of National Occupational Standards (NOS) based
                curriculum.
              </li>

              <li>
                Access to Master Trainers of LSSC and certification of the
                trainers of the affiliating training provider.
              </li>

              <li>
                Assist in On the Job Training (OJT) and / or Placements of the
                affiliating partner trainees.
              </li>

              <li>
                Assessment of trainees on NOS based curriculum.
              </li>

              <li>
                Industry recognized Certification of the successful trainees.
              </li>

              <li>
                Participation in Government led programs at institutional and
                state level, aligned to NSQF.
              </li>

              <li>
                Access to the reports on the Sectorial Researches conducted by
                the LSSC
              </li>

              <li>
                Participation in the various sector specific seminars and events
              </li>

              <li>
                Access to international bodies available in similar space
              </li>
            </ul>
          </div>

          {/* NOTE */}
          <div className="space-y-4">
            <h3 className="text-[#073B4C] text-2xl font-bold">NOTE:</h3>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>
                Submission of application does not guarantee affiliation.
              </li>

              <li>Application fee is NON-REFUNDABLE.</li>

              <li>
                Complete documents are required to be submitted along with
                application for processing the request. In case documents are
                deficient request will not be considered.
              </li>

              <li>
                Observations if any, are to be cleared within time specified to
                ensure the request is not closed.
              </li>

              <li>
                Attach supporting documents wherever required. Please sign and
                stamp every page of the document.
              </li>
            </ul>

            <div className="text-lg leading-8">
              <p>
                To apply for affiliation, submit completed copies of the
                appropriate affiliation form and evaluation form and send it to:
              </p>

              <p className="mt-4 font-semibold">
                Leather Sector Skill Council
                <br />
                CFTI Campus, Annex Building,
                <br />
                No.65/1, GST Road,
                <br />
                Guindy, Chennai – 600 032.
              </p>
            </div>
          </div>
          {/* TABLE SECTION */}
          <div className="overflow-x-auto pt-10">
            <h2 className="text-center text-2xl lg:text-4xl font-bold text-[#073B4C] mb-8">
              Annexure – 2: Affiliation and Accreditation Fee
            </h2>

            <table className="w-full border-4 border-black border-collapse">
              <thead>
                <tr className="bg-[#d9d4bf]">
                  <th className="border-4 border-black p-4 text-left text-lg lg:text-2xl font-bold">
                    Sr. No.
                  </th>

                  <th className="border-4 border-black p-4 text-left text-lg lg:text-2xl font-bold">
                    Details
                  </th>

                  <th className="border-4 border-black p-4 text-left text-lg lg:text-2xl font-bold">
                    Charges
                  </th>

                  <th className="border-4 border-black p-4 text-left text-lg lg:text-2xl font-bold">
                    Remarks
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border-4 border-black p-4 text-lg">1</td>

                  <td className="border-4 border-black p-4 text-lg">
                    New Training Partner (TP) Affiliation Fee.
                  </td>

                  <td className="border-4 border-black p-4 text-lg font-bold italic text-red-600">
                    Rs. 50,000/-
                  </td>

                  <td className="border-4 border-black p-4 text-lg italic">
                    (Non refundable), Duration one year
                  </td>
                </tr>

                <tr>
                  <td className="border-4 border-black p-4 text-lg">2</td>

                  <td className="border-4 border-black p-4 text-lg">
                    Existing Training Partner Affiliation Fee
                  </td>

                  <td className="border-4 border-black p-4 text-lg font-bold italic text-red-600">
                    Rs. 25,000/-
                  </td>

                  <td className="border-4 border-black p-4 text-lg italic">
                    (Non refundable), Duration one year
                  </td>
                </tr>

                <tr>
                  <td className="border-4 border-black p-4 text-lg">3</td>

                  <td className="border-4 border-black p-4 text-lg">
                    Training center Accreditation Fee
                  </td>

                  <td className="border-4 border-black p-4 text-lg font-bold italic text-red-600">
                    Rs. 6,000/- per Job role
                  </td>

                  <td className="border-4 border-black p-4 text-lg italic">
                    (Non refundable), Duration one year
                  </td>
                </tr>

                <tr>
                  <td className="border-4 border-black p-4 text-lg">4</td>

                  <td className="border-4 border-black p-4 text-lg">
                    Training of Trainers (ToT) - New
                  </td>

                  <td className="border-4 border-black p-4 text-lg font-bold italic text-red-600">
                    Rs. 11,200/- per Job Role
                  </td>

                  <td className="border-4 border-black p-4 text-lg italic">
                    As of 2024
                  </td>
                </tr>

                <tr>
                  <td className="border-4 border-black p-4 text-lg">5</td>

                  <td className="border-4 border-black p-4 text-lg">
                    Training of Trainers (ToT) - Existing
                  </td>

                  <td className="border-4 border-black p-4 text-lg font-bold italic text-red-600">
                    Rs. 2,200/- per Job Role
                  </td>

                  <td className="border-4 border-black p-4 text-lg italic">
                    As of 2024
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PartnerAffiliation;