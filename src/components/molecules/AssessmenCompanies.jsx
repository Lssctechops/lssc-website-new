import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";
import Link from "next/link";

const AssessmenCompanies = () => {
  return (
    <section
      id="assessment"
      className="grid gap-5 lg:gap-10 xl:gap-20 lg:grid-cols-2"
    >
      <div className="flex  justify-center">
        <Image
          className="border-primary-200 aspect-video w-full rounded-3xl border-4 object-cover lg:w-full"
          src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/4e31a468-252e-4b6a-fd59-fd34cc529300/public"
          alt="partner"
          width={1200}
          height={600}
        />
      </div>
      <div>
        <StyledHeading
          heading={
            <>
              <span className="text-primary-600">Institution </span>
              Partners
            </>
          }
          containerStyle="mx-auto"
        />
        <p className="mt-10 font-normal">
          Our collaboration with universities, technical institutes, and
          management schools is a two-way exchange of knowledge and skills.
          While academic institutions impart foundational learning and research
          into skilling programs, LSSC brings the real-world application and
          industry linkages to develop job-ready capabilities of students.
        </p>
        <table className="mt-6 w-full">
          <tbody>
            <tr>
              <td>
                <Link target="_blank" href="https://www.clri.org/">
                  CLRI
                </Link>
              </td>
              <td>
                <Link href="https://urise.up.gov.in/iti/87" target="_blank">
                  ITI Unnao
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link target="_blank" href="https://www.afmec.org/">
                  AFMEC
                </Link>
              </td>
              <td>
                <Link target="_blank" href="https://www.nift.ac.in/">
                  NIFT
                </Link>
              </td>
            </tr>

            <tr>
              <td>
                <Link target="_blank" href="https://www.fddiindia.com/">
                  FDDI
                </Link>
              </td>
              <td>
                <Link target="_blank" href="https://allenhouse.ac.in/">
                  Allen House Institute of Engineering
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link target="_blank" href="https://www.cftiagra.org.in/">
                  CFTI Agra
                </Link>
              </td>
              <td>
                <Link target="_blank" href=" https://aiom.ac.in/">
                  Allen House Institute of Management
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link target="_blank" href="https://www.cftichennai.in/">
                  CFTI Chennai
                </Link>
              </td>
              <td>
                <Link
                  target="_blank"
                  href="http://www.indianshoefederation.in/"
                >
                  Indian Shoe Federation
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link target="_blank" href="https://calcuttaleathercomplex.in/">
                  Kolkata Leather Cluster
                </Link>
              </td>
              <td>
                <Link target="_blank" href="https://gcelt.gov.in/">
                  GCELT
                </Link>
              </td>
            </tr>

            <tr>
              <td>
                <Link target="_blank" href="https://klcindia.org/">
                  Kanpur Leather Cluster
                </Link>
              </td>
              <td>
                <Link target="_blank" href="https://gitipurwa.in/">
                  Govt. ITI Purwa
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AssessmenCompanies;
