import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";

const teamMembers = [
  {
    name: "Atul Kumar Mishra",
    designation: "Interim Chief Executive Officer",
    email: "ceo@leatherssc.org",
    mobile: "9971489936",
    linkedin: "https://linkedin.com/in/atul-kumar-mishra-60090715",
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/0fe75bb2-cd9c-4a2e-a82a-41bd2cea6700/public",
  },
  {
    name: "Mir Maqsood Ali",
    designation: "Head - Administration & Governance",
    email: "maqsood@leatherssc.org",
    mobile: "7358588688",
    linkedin: "https://linkedin.com/in/mir-maqsood-ali-7488641b1",
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/f96c1872-baba-4cde-cf73-027683bf5700/public",
  },
  {
    name: "K Vimalathithan",
    designation: "Head - Training & Operations",
    email: "vimal@leatherssc.org",
    mobile: "9585011594",
    linkedin: "https://linkedin.com/in/vimalathithan-krishnasamy-27386298",
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/658ccec6-b83a-4d9f-273d-5ae39b706a00/public",
  },
  {
    name: "Ayush Chaturvedi",
    designation: "Head - Assessments",
    email: "assessments@leatherssc.org",
    mobile: "9205615261",
    linkedin: "https://linkedin.com/in/ayush-chaturvedi-176900138",
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/f02a79e9-1d32-4df0-b203-d716739bfe00/public",
  },
  {
    name: "Abhimanyu Kumar",
    designation: "Manager – IT",
    email: "it@leatherssc.org",
    mobile: "9833040928",
    linkedin: "https://linkedin.com/in/abhimanyu-kumar-98b94512b",
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/84af7bce-a21e-4e27-c3d4-efa442a23700/public",
  },
  {
    name: "Satish Kumar",
    designation: "Manager – Accounts",
    email: "accounts@leatherssc.org",
    mobile: "7277239976",
    linkedin: "https://linkedin.com/in/",
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/65eeeae1-2f3a-4bad-671a-20a1ecfd3b00/public",
  },
  {
    name: "Amit Shukla",
    designation: "Manager - Employer Relations",
    email: "amit@leatherssc.org",
    mobile: "8299227304",
    linkedin: "https://linkedin.com/in/amit-shukla-486225215",
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/9816057c-4944-4fa4-7eb0-c9168632d400/public",
  },
  {
    name: "Shahzeb Alam",
    designation: "Manager - Employer Relations",
    email: "shahzeb@leatherssc.org",
    mobile: "9123381187",
    linkedin: "https://linkedin.com/in/shahzeb-alam-448127110",
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/aed5c730-4057-49d7-cbbe-1d3bd593ee00/public",
  },
  {
    name: "Neeraj Kumar Sharma",
    designation:
      "Assistant Manager - Academics & Technical Research",
    email: "technical@leatherssc.org",
    mobile: "9910286513",
    linkedin: "https://linkedin.com/in/neeraj-sharma-01946467",
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/aed5c730-4057-49d7-cbbe-1d3bd593ee00/public",
  },
  {
    name: "Mohammed Yusuff",
    designation: "Assistant Manager - IT & Assessment",
    email: "yusuff@leatherssc.org",
    mobile: "8939736143",
    linkedin: "https://linkedin.com/in/mohammed-yusuff-b7835923b",
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/a16f7c6b-3234-49dd-7035-d5a58d8a6300/public",
  },
  {
    name: "Anuj Kumar Patel",
    designation: "Executive - Assessments",
    email: "anuj@leatherssc.org",
    mobile: "9131473018",
    linkedin: "https://linkedin.com/in/anuj-kumar-patel-94218436b",
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/aed5c730-4057-49d7-cbbe-1d3bd593ee00/public",
  },
  {
    name: "Govindarajan B",
    designation: "Master Trainer",
    email: "govindarajan@leatherssc.org",
    mobile: "9445241516",
    linkedin: "https://linkedin.com/in/govindarajan-balasundaram-33911421a",
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/aed5c730-4057-49d7-cbbe-1d3bd593ee00/public",
  },
  {
    name: "M. Elangovan",
    designation: "Pattern Maker & Master Trainer",
    email: "elangovan@leatherssc.org",
    mobile: "9176662820",
    linkedin: "https://linkedin.com/in/",
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/aed5c730-4057-49d7-cbbe-1d3bd593ee00/public",
  },
  {
    name: "Dhivakaran",
    designation: "Executive",
    email: "lssc@leatherssc.org",
    mobile: "9994441917",
    linkedin: "https://linkedin.com/in/",
    image:
      "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/aed5c730-4057-49d7-cbbe-1d3bd593ee00/public",
  },
];

const Team = () => {
  return (
    <section
      id="our-team"
      className="py-16 px-4 bg-gradient-to-b from-white to-primary-50"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <StyledHeading
          heading={
            <>
              Meet Our{" "}
              <span className="text-primary-600">Team</span>
            </>
          }
          containerStyle={"mx-auto"}
        />

        {/* DESCRIPTION */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4 leading-7">
          Our dedicated professionals work together to drive
          excellence in training, assessments, skill development,
          and industry collaboration across the leather sector.
        </p>

        {/* CEO CARD */}
        <div className="flex justify-center mt-14 mb-16">
          <div className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-br from-primary-400 via-primary-200 to-primary-600 max-w-sm w-full">

            <div className="bg-white rounded-3xl p-8 text-center relative">

              {/* GLOW */}
              <div className="absolute top-0 left-0 w-full h-32 bg-primary-100 opacity-40 blur-3xl"></div>

              {/* CEO IMAGE */}
              <div className="relative flex justify-center z-10">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary-100 shadow-xl">

                  <Image
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* CEO NAME */}
              <h2 className="mt-6 text-2xl font-bold text-gray-800 relative z-10">
                {teamMembers[0].name}
              </h2>

              {/* CEO DESIGNATION */}
              <p className="text-primary-600 font-medium mt-2 relative z-10">
                {teamMembers[0].designation}
              </p>

              {/* CEO EMAIL */}
              <a
                href={`mailto:${teamMembers[0].email}`}
                className="text-gray-600 text-sm mt-5 break-all relative z-10 flex items-center justify-center gap-2 hover:text-primary-600"
              >
                <img
                  src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/fd4855fa-0f2e-4317-d998-da9ae051d300/public"
                  alt="Zoho Mail"
                  className="w-5 h-5 object-contain"
                />
                {teamMembers[0].email}
              </a>

              {/* CEO MOBILE */}
              <a
                href={`tel:${teamMembers[0].mobile}`}
                className="text-gray-700 text-sm mt-3 relative z-10 flex items-center justify-center gap-2 hover:text-primary-600"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                  alt="phone"
                  className="w-5 h-5"
                />
                {teamMembers[0].mobile}
              </a>

              {/* CEO LINKEDIN */}
              <a
                href={teamMembers[0].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="linkedin"
                  className="w-6 h-6"
                />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* TEAM MEMBERS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {teamMembers.slice(1).map((team, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-br from-primary-400 via-primary-200 to-primary-600 hover:scale-105 transition-all duration-300"
            >

              {/* CARD */}
              <div className="bg-white rounded-3xl h-full p-10 text-center relative">

                {/* GLOW */}
                <div className="absolute top-0 left-0 w-full h-32 bg-primary-100 opacity-40 blur-3xl"></div>

                {/* IMAGE */}
                <div className="relative flex justify-center z-10">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary-100 shadow-lg">

                    <Image
                      src={team.image}
                      alt={team.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* NAME */}
                <h3 className="mt-5 text-lg font-bold text-gray-800 relative z-10">
                  {team.name}
                </h3>

                {/* DESIGNATION */}
                <p className="text-primary-600 text-sm mt-2 min-h-[48px] relative z-10">
                  {team.designation}
                </p>

                {/* EMAIL */}
                <a
                  href={`mailto:${team.email}`}
                  className="text-gray-600 text-sm mt-4 break-all relative z-10 flex items-center justify-center gap-2 hover:text-primary-600"
                >
                  <img
                    src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/fd4855fa-0f2e-4317-d998-da9ae051d300/public"
                    alt="Zoho Mail"
                    className="w-5 h-5 object-contain"
                  />
                  {team.email}
                </a>

                {/* MOBILE */}
                <a
                  href={`tel:${team.mobile}`}
                  className="text-gray-700 text-sm mt-3 relative z-10 flex items-center justify-center gap-2 hover:text-primary-600"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                    alt="phone"
                    className="w-5 h-5"
                  />
                  {team.mobile}
                </a>

                {/* LINKEDIN */}
                <a
                  href={team.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="linkedin"
                    className="w-6 h-6"
                  />
                  LinkedIn
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;