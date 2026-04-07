import BackButton from "../atoms/BackButton";

const Candidate = () => {
  return (
    <main className="py-6 container">
      <BackButton />
      <section className="space-y-6 ">
        <div className="bg-[#EBF7FF] space-y-3 mx-auto w-fit  shadow-three rounded-xl lg:px-8 py-2">
          <h4 className="text-2xl text-center font-bold text-[#073B4C]">
            Trained and Assessed <br />
            Candidate Data
          </h4>
        </div>

        {trainingData?.map(({ title, projectList }, index) => {
          return (
            <div key={index}>
              <h3 className="border mb-6 rounded-lg text-xl text-center py-2 font-semibold border-[#E6E6E6] bg-[#F3F7F7]">
                {title}
              </h3>
              <table className="w-full text-sm border border-collapse bg-[#F3F7F7] border-[#CCCCCC] rounded-xl overflow-hidden">
                <thead className="border-b border-[#CCCCCC]">
                  <tr>
                    <th className="text-left p-3">Name of the Projects</th>
                    <th className="text-left p-3">Trained</th>
                    <th className="text-end p-3">Assessed</th>
                  </tr>
                </thead>
                <tbody>
                  {projectList?.map(({ name, trained, assessed }, i) => {
                    return (
                      <tr key={i} className={`border-b border-[#E6E6E6]`}>
                        <td className="text-left p-3">{name}</td>
                        <td className="text-left p-3">{trained}</td>
                        <td className="text-end p-3">{assessed}</td>
                      </tr>
                    );
                  })}

                  <tr className="bg-[#FFFF00]">
                    <td className="text-left p-3">Sub Total</td>
                    <td className="text-left p-3">
                      {projectList?.reduce(
                        (total, item) => total + (Number(item.trained) || 0),
                        0
                      )}
                    </td>
                    <td className="text-end p-3">
                      {projectList?.reduce(
                        (total, item) => total + (Number(item.assessed) || 0),
                        0
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Candidate;

const trainingData = [
  {
    title: "Financial Year 2023-2024",
    projectList: [
      { name: "NSDC RPL", trained: 4873, assessed: 3996 },
      { name: "NSDC STT", trained: 802, assessed: 658 },
      { name: "NSDC SP", trained: 820, assessed: 672 },
      { name: "PMVK", trained: 168, assessed: 138 },
      { name: "CSR Tata Strive", trained: 202, assessed: 166 },
      { name: "DDU GKY", trained: 1002, assessed: 822 },
      { name: "UPSDM", trained: 1063, assessed: 872 },
      { name: "TNSDC", trained: 862, assessed: 707 },
      { name: "ODOP", trained: 744, assessed: 610 },
      { name: "ORP", trained: 282, assessed: 231 },
      { name: "VSSY", trained: 1813, assessed: 1487 },
      { name: "WB SCST", trained: 590, assessed: 484 },
      { name: "PSDM JSA CSR", trained: 107, assessed: 88 },
      { name: "FDI BFDS", trained: 16, assessed: 13 },
      { name: "MSSDS", trained: 37, assessed: 30 },
      { name: "APSSDC", trained: 13, assessed: 11 },
      { name: "CADCAM", trained: 32, assessed: 26 },
      { name: "NAPS", trained: 4, assessed: 3 },
      { name: "PSDM RPL", trained: 113, assessed: 93 },
      { name: "Others", trained: 362, assessed: 297 },
    ],
  },
  {
    title: "Financial Year 2022-2023",
    projectList: [
      {
        name: "Leather Industries Development Corporation Ltd.",
        trained: 3273,
        assessed: 2880,
      },
      {
        name: "Outreach Program (ORP) - CFTI Agra",
        trained: 1413,
        assessed: 1243,
      },
      {
        name: "Uttar Pradesh Skill Development Mission - Short Term Training",
        trained: 1318,
        assessed: 1160,
      },
      {
        name: "Tamil Nadu State Skill Development Mission - Short Term Training",
        trained: 900,
        assessed: 792,
      },
      {
        name: "Skill Development Initiative Scheme-DDU-GKY",
        trained: 755,
        assessed: 664,
      },
      {
        name: "One District One Product Scheme - Uttar Pradesh",
        trained: 663,
        assessed: 583,
      },
      {
        name: "Haryana Skill Development Mission Surya - Short Term Training",
        trained: 440,
        assessed: 387,
      },
      { name: "West Bengal SC ST", trained: 385, assessed: 339 },
      {
        name: "Tamil Nadu State Skill Development Mission - RPL Bridge course",
        trained: 326,
        assessed: 287,
      },
      {
        name: "Outreach Program (ORP) - CFTI Chennai",
        trained: 176,
        assessed: 155,
      },
      {
        name: "Deendayal Antyodaya Yojana-National Urban Livelihoods Mission (DAY-NULM)",
        trained: 167,
        assessed: 147,
      },
      { name: "LSSC-Fee Based", trained: 130, assessed: 114 },
      { name: "PMKVY3.0 CSSM RPL Type 2", trained: 102, assessed: 90 },
      {
        name: "Tamil Nadu Adi Dravidar Housing & Development Corporation Ltd",
        trained: 72,
        assessed: 63,
      },
      {
        name: "Tamil Nadu State Skill Development Mission - TN Special project",
        trained: 68,
        assessed: 60,
      },
      {
        name: "Non PMKVY-New Delhi Municipal Council (NDMC) - RPL",
        trained: 47,
        assessed: 41,
      },
      { name: "Labour Welfare board - RPL", trained: 17, assessed: 15 },
      { name: "CAD/CAM", trained: 6, assessed: 5 },
    ],
  },
  {
    title: "Financial Year 2021-22",
    projectList: [
      {
        name: "Short Term Training (Central and State Projects)",
        trained: 2584,
        assessed: 2437,
      },
      { name: "RPL (Up-Skilling)", trained: 2766, assessed: 2390 },
      { name: "Fee Based", trained: 630, assessed: 596 },
      {
        name: "National Apprentices Promotion Scheme (NAPS)",
        trained: 748,
        assessed: 406,
      },
      { name: "Special Projects", trained: 62, assessed: 62 },
      { name: "State Schemes", trained: 2342, assessed: 2218 },
      { name: "ToT", trained: 36, assessed: 35 },
    ],
  },
  {
    title: "Financial Year 2020-2021",
    projectList: [
      {
        name: "Recognition of Prior Learning (RPL) - BICE",
        trained: 23534,
        assessed: 22296,
      },
      {
        name: "Recognition of Prior Learning (RPL) - Type 2",
        trained: 11109,
        assessed: 10508,
      },
      { name: "PMKK - Short Term Training (STT)", trained: 340, assessed: 281 },
      {
        name: "State Scheme- Short Term Training (STT)",
        trained: 7401,
        assessed: 7112,
      },
      {
        name: "Request for Proposal - Short Term Training (STT)",
        trained: 405,
        assessed: 370,
      },
      {
        name: "Special Project - Short Term Training (STT)",
        trained: 210,
        assessed: 209,
      },
      { name: "STT - Reallocation (PUNJAB)", trained: 93, assessed: 92 },
      {
        name: "Fee Based Project (CSR Projects & MSSDS)",
        trained: 1984,
        assessed: 1852,
      },
      {
        name: "Fee Based Project (NULM Projects)",
        trained: 228,
        assessed: 226,
      },
      {
        name: "HRD (DPIIT) - Primary Skill Development Program",
        trained: 1383,
        assessed: 1200,
      },
      {
        name: "HRD (DPIIT) - Secondary Skill Development Program",
        trained: 16348,
        assessed: 13952,
      },
      { name: "Out Reach Program (ORP)", trained: 1333, assessed: 1163 },
      { name: "One District one Product (ODOP)", trained: 400, assessed: 395 },
      { name: "SDMS ReAssessment", trained: 85, assessed: 54 },
      { name: "Training of Trainer (TOT)", trained: 72, assessed: 69 },
      { name: "Training of Assessor (TOA)", trained: 145, assessed: 140 },
      { name: "THADCO Assessment", trained: 147, assessed: 144 },
      { name: "Yerwada Jail - RPL BICE", trained: 25, assessed: 25 },
    ],
  },
  {
    title: "Financial Year 2019-2020",
    projectList: [
      { name: "Short Term Training (STT)", trained: 1225, assessed: 960 },
      {
        name: "Centrally Sponsored Skill Mission (CSSM)",
        trained: 3407,
        assessed: 3311,
      },
      { name: "Special Project", trained: 627, assessed: 601 },
      {
        name: "Paschim Banga Society for Skill Development (PBSSD)",
        trained: 545,
        assessed: 513,
      },
      {
        name: "Haryana Skill Development Mission (HSDM)",
        trained: 120,
        assessed: 101,
      },
      {
        name: "Recognition of Prior Learning (RPL) - BICE",
        trained: 64747,
        assessed: 64281,
      },
      {
        name: "Centrally Sponsored Skill Mission (CSSM)",
        trained: 854,
        assessed: 787,
      },
      {
        name: "Punjab Skill Development Mission (PSDM)",
        trained: 191,
        assessed: 179,
      },
      {
        name: "Rajasthan Skill and Livelihoods Development Corporation (RSLDC)",
        trained: 159,
        assessed: 146,
      },
      {
        name: "HRD (DPIIT) - Primary Skill Development Program",
        trained: 140651,
        assessed: 140651,
      },
      {
        name: "HRD (DPIIT) - Secondary Skill Development Program",
        trained: 10000,
        assessed: 10000,
      },
      {
        name: "Operator Training Centers (OTC)",
        trained: 16291,
        assessed: 16291,
      },
      { name: "Out Reach Program (ORP)", trained: 2730, assessed: 2730 },
      { name: "One District one Product (ODOP)", trained: 800, assessed: 800 },
      { name: "CAD-CAM", trained: 18, assessed: 18 },
    ],
  },
  {
    title: "Financial Year 2018-2019",
    projectList: [
      { name: "Short Term Training (STT)", trained: 3937, assessed: 3767 },
      { name: "Special Project", trained: 1698, assessed: 1605 },
      {
        name: "Recognition of Prior Learning (RPL) Type 2",
        trained: 435,
        assessed: 412,
      },
      {
        name: "Recognition of Prior Learning (RPL) - BICE",
        trained: 10666,
        assessed: 10243,
      },
      {
        name: "HRD (DPIIT) - Primary Skill Development Program",
        trained: 58546,
        assessed: 58546,
      },
      {
        name: "Centrally Sponsored Skill Mission (CSSM)",
        trained: 6228,
        assessed: 6093,
      },
      {
        name: "State Skill Development Mission (SSDM) (Maharastra)",
        trained: 4000,
        assessed: 4000,
      },
    ],
  },
  {
    title: "Financial Year 2017 -2018",
    projectList: [
      { name: "Short Term Training (STT)", trained: 3756, assessed: 3629 },
      { name: "Special Project", trained: 1463, assessed: 1357 },
      {
        name: "Recognition of Prior Learning (RPL) Type 1",
        trained: 3055,
        assessed: 2833,
      },
      {
        name: "Recognition of Prior Learning (RPL) Type 2",
        trained: 22591,
        assessed: 20183,
      },
      {
        name: "Haryana State Industrial and Infrastructure Development Corporation (HSIIDC)",
        trained: 15003,
        assessed: 13967,
      },
    ],
  },
];
