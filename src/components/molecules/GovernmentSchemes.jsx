import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";

const GovernmentSchemes = () => {
  return (
    <section className="grid lg:grid-cols-2">
      <div>
        <StyledHeading
          heading={
            <>
              <span className="text-primary-600">Government</span> Schemes
            </>
          }
          containerStyle="mx-auto"
        />

        <div className="mt-10">
          <h4 className="mb-4 text-2xl font-bold">
            Skill Development Initiatives under Government Schemes
          </h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <h5 className="font-bold">
                I. PMKVY 4.0 (Pradhan Mantri Kaushal Vikas Yojana)
              </h5>
              <ul>
                <li className="font-normal">
                  Special Projects: 3,500 candidates trained.
                </li>
                <li className="font-normal">
                  Recognition of Prior Learning (RPL): 30,400 candidates
                  certified.
                </li>
                <li className="font-normal">
                  Futuristic Skills RPL & Special Projects: 2,300 candidates
                  trained.
                </li>
                <li className="font-normal">
                  Short-Term Training (STT) in North Eastern States: 4,500
                  candidates trained.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h5 className="font-bold">II. PM Vishwakarma Yojana</h5>
              <p className="font-normal">
                A flagship initiative by the DC MSME and MSDE, Government of
                India, aimed at supporting traditional artisans and craftsmen,
                including those in the leather sector. The scheme provides skill
                development, certification, financial assistance, and market
                linkages to enhance livelihoods. Trained 560 Trainers &
                Assessors to ensure quality training delivery. Assessed &
                certified over 95,000 artisans who completed basic skill
                training across India. Supported traditional micro-entrepreneurs
                in leather craft through skill enhancement and financial
                linkages.
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="font-bold">
                III. State Skill Development Missions (SSDMs){" "}
              </h5>
              <p className="font-normal">
                West Bengal SC/ST Skill Training: 300 candidates trained.
                Inclusive Skill Training for Persons with Disabilities in Tamil
                Nadu (World Bank Funded): 420 candidates trained. Andhra Pradesh
                (PM Ajay Scheme): 300 candidates trained. Collaborating with
                other state governments to strengthen local employment
                opportunities.
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="font-bold">
                IV. National Apprenticeship Promotion Scheme (NAPS){" "}
              </h5>
              <p className="font-normal">
                Industry-led on-the-job training through apprenticeships.
                Financial incentives for employers to engage apprentices.
                On-the-Job Training (OJT) for structured skill development.
                Developed 15+ Apprenticeship Curricula with 5,000+ enrolled
                apprentices across India.  
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Image
          className="border-primary-200 h-44 rounded-xl border-4 object-cover"
          src="/img/skills/4.jpeg"
          alt="skill-infra"
          width={1000}
          height={600}
        />
        <Image
          className="border-primary-200 h-44 rounded-xl border-4 object-cover"
          src="/img/skills/5.jpeg"
          alt="skill-infra"
          width={1000}
          height={600}
        />
        <Image
          className="border-primary-200 h-44 rounded-xl border-4 object-cover"
          src="/img/skills/6.jpeg"
          alt="skill-infra"
          width={1000}
          height={600}
        />
        <Image
          className="border-primary-200 h-44 rounded-xl border-4 object-cover"
          src="/img/skills/7.jpeg"
          alt="skill-infra"
          width={1000}
          height={600}
        />
        <Image
          className="border-primary-200 h-44 rounded-xl border-4 object-cover"
          src="/img/skills/8.jpeg"
          alt="skill-infra"
          width={1000}
          height={600}
        />
        <Image
          className="border-primary-200 h-44 rounded-xl border-4 object-cover"
          src="/img/skills/9.jpeg"
          alt="skill-infra"
          width={1000}
          height={600}
        />
        <Image
          className="border-primary-200 h-44 rounded-xl border-4 object-cover"
          src="/img/skills/10.jpeg"
          alt="skill-infra"
          width={1000}
          height={600}
        />
        <Image
          className="border-primary-200 h-44 rounded-xl border-4 object-cover"
          src="/img/skills/14.jpeg"
          alt="skill-infra"
          width={1000}
          height={600}
        />
      </div>
    </section>
  );
};

export default GovernmentSchemes;
