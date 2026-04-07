import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";
// const teamMembers = [
//   {
//     name: "Sanjay Kumar",
//     designation: "Chief Executive Officer",
//     email: "ceo@leatherssc.org, ed@leatherssc.org",
//     mobile: "9958117009",
//   },
//   {
//     name: "Mir Maqsood Ali",
//     designation: "Sr Manager-Admin & Governance",
//     email: "maqsood@leatherssc.org",
//     mobile: "7358588688",
//   },
//   {
//     name: "J. Srilekha",
//     designation: "Manager- Finance",
//     email: "jsrilekha@leatherssc.org",
//     mobile: "7358037028",
//   },
//   {
//     name: "K Vimalathithan",
//     designation: "Manager- Training Operations",
//     email: "vimal@leatherssc.org",
//     mobile: "9585011594",
//   },
//   {
//     name: "Abhimanyu Kumar",
//     designation: "Manager – IT",
//     email: "-",
//     mobile: "9833040928",
//   },
//   {
//     name: "Amit Shukla",
//     designation: "Assistant Manager - Employer Relations",
//     email: "amit@leatherssc.org",
//     mobile: "8299227304",
//   },
//   {
//     name: "Shahzeb Alam",
//     designation: "Assistant Manager - Employer Relations",
//     email: "shahzeb@leatherssc.org",
//     mobile: "9123381187",
//   },
//   {
//     name: "Ayush Chaturvedi",
//     designation: "Head - Assessments",
//     email: "assessments@leatherssc.org",
//     mobile: "9205615261",
//   },
//   {
//     name: "Neeraj Kumar Sharma",
//     designation: "Assistant Manager - Academics & Technical Research",
//     email: "technical@leatherssc.org",
//     mobile: "9910286513",
//   },
//   {
//     name: "Mohammed Yusuff",
//     designation: "Executive - It & Assessments",
//     email: "yusuff@leatherssc.org",
//     mobile: "8939736143",
//   },
//   {
//     name: "Anuj Kumar Patel",
//     designation: "Executive - Assessments",
//     email: "anuj@leatherssc.org",
//     mobile: "9131473018",
//   },
//   {
//     name: "Govindarajan B",
//     designation: "Master Trainer",
//     email: "govindarajan@leatherssc.org",
//     mobile: "9445214516",
//   },
//   {
//     // name: "Elangovan M",
//     name: "M.Elangovan",
//     designation: "Pattern Master and Master Trainer",
//     email: "elangovan@leatherssc.org",
//     mobile: "9176662820",
//   },
//   {
//     name: "Dhivakaran",
//     designation: "Executive",
//     email: "lssc@leatherssc.org",
//     mobile: "9994441917",
//   },
//   // {
//   //   name: "Dev Chandra Joshi",
//   //   designation: "Executive - Assessments",
//   //   email: "lssc@leatherssc.org",
//   //   mobile: "9354143420",
//   // },
// ];
const teamMembers = [
  {
    name: "Atul Kumar Mishra",
    designation: "Interim Chief Executive Officer",
    email: "ceo@leatherssc.org",
    // email: "ceo@leatherssc.org, ed@leatherssc.org",
    mobile: " 9971489936",
  },
  {
    name: "Mir Maqsood Ali",
    designation: "Senior Manager- Administration & Governance",
    email: "maqsood@leatherssc.org",
    mobile: "7358588688",
  },
  // {
  //   name: "J. Srilekha",
  //   designation: "Manager- Finance",
  //   email: "jsrilekha@leatherssc.org",
  //   mobile: "7358037028",
  // },
  {
    name: "K Vimalathithan",
    designation: "Manager- Training & Operations",
    email: "vimal@leatherssc.org",
    mobile: "9585011594",
  },
  {
    name: "Ayush Chaturvedi",
    designation: "Head - Assessments",
    email: "assessments@leatherssc.org",
    mobile: "9205615261",
  },
  {
    name: "Abhimanyu Kumar",
    designation: "Manager – IT",
    email: "it@leatherssc.org",
    mobile: "9833040928",
  },
  {
    name: "Satish Kumar",
    designation: "Manager – Accounts",
    email: "accounts@leatherssc.org",
    mobile: "7277239976",
  },
  {
    name: "Amit Shukla",
    designation: "Assistant Manager- Northern Region- Employer Relations",
    email: "amit@leatherssc.org",
    mobile: "8299227304",
  },
  {
    name: "Shahzeb Alam",
    designation: "Assistant Manager- Eastern Region- Employer Relations",
    email: "shahzeb@leatherssc.org",
    mobile: "9123381187",
  },
  {
    name: "Neeraj Kumar Sharma",
    designation: "Assistant Manager- QP- Academics & Technical Research",
    email: "technical@leatherssc.org",
    mobile: "9910286513",
  },
  {
    name: "Mohammed Yusuff",
    designation: "Assistant- IT & Assessment",
    email: "yusuff@leatherssc.org",
    mobile: "8939736143",
  },
  {
    name: "Anuj Kumar Patel",
    designation: "Executive - Assessments",
    email: "anuj@leatherssc.org",
    mobile: "9131473018",
  },
  {
    name: "Govindarajan B",
    designation: "Master Trainer",
    email: "govindarajan@leatherssc.org",
    mobile: "9445241516",
  },
  {
    name: "M. Elangovan",
    designation: "Pattern Maker & Master Trainer",
    email: "elangovan@leatherssc.org",
    mobile: "9176662820",
  },
  {
    name: "Dhivakaran",
    designation: "Executive",
    email: "lssc@leatherssc.org",
    mobile: "9994441917",
  },
];

const Team = () => {
  return (
    <section id="our-team" className="space-y-6">
      <StyledHeading
        heading={
          <>
            <span className="text-primary-600">Meet</span> The Team
          </>
        }
        containerStyle={"mx-auto"}
      />
      <p className="mx-auto text-center lg:w-[60%]">
        Our team of passionate professionals with deep industry knowledge is
        committed to driving excellence in skill development, training, and
        industry collaboration. Whether you are an industry partner, a training
        provider, or an aspiring professional, our team is always ready to
        assist you. Please feel free to reach out to us.
      </p>
      <div className="xl:w-[80%] mx-auto">
        {/* <div className="relative">
          <div className="flex justify-center">
            <Image
              className="h-full ps-5 w-56 object-cover"
              src="/img/person.png"
              alt="team"
              width={600}
              height={1200}
            />
          </div>
          <h4 className="text-center text-lg font-medium">Sanjay Kumar</h4>
          <p className="text-center font-normal">EXECUTIVE DIRECTOR</p>
          <p className="absolute top-0 -right-5 w-[55%] text-center text-sm font-normal">
            “A strong organisation culture built on trust, engagement, and
            inclusivity.”
          </p>
        </div> */}
        <div className="overflow-x-auto ">
          <table className="w-full min-w-[1000px] border-collapse border-4 border-white lg:min-w-fit">
            <thead>
              <tr>
                <th className="bg-primary-200 border-4 border-white px-4 py-2 text-sm font-medium">
                  S.No
                </th>
                <th className="bg-primary-200 border-4 border-white px-4 py-2 text-sm font-medium">
                  Names
                </th>
                <th className="bg-primary-200 border-4 border-white px-4 py-2 text-sm font-medium">
                  Designation
                </th>
                <th className="bg-primary-200 border-4 border-white px-4 py-2 text-sm font-medium">
                  Email
                </th>
                <th className="bg-primary-200 border-4 border-white px-4 py-2 text-sm font-medium">
                  Mobile No.
                </th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((team, index) => (
                <tr>
                  <td className="text-center bg-primary-200 border-4 border-white px-4 py-2 text-sm">
                    {index + 1}
                  </td>
                  <td className="bg-primary-200 border-4 border-white px-4 py-2 text-sm capitalize">
                    {team.name}
                  </td>
                  <td className="bg-primary-200 border-4 border-white px-4 py-2 text-sm">
                    {team.designation}
                  </td>
                  <td className="bg-primary-200 border-4 border-white px-4 py-2 text-sm">
                    {team.email}
                  </td>
                  <td className="bg-primary-200 border-4 border-white px-4 py-2 text-sm">
                    {team.mobile}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Team;
