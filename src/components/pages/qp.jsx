import Link from "next/link";
import BackButton from "../atoms/BackButton";

const QP = () => {
  return (
    <main className="py-6 container">
      <BackButton />
      <section className="space-y-6 ">
        <div className="bg-[#EBF7FF] space-y-3 mx-auto w-fit  shadow-three rounded-xl p-3">
          <h4 className="text-2xl font-bold text-[#073B4C]">
            Qualification Pack - Pre- Assembly Operator
          </h4>
          <ul className="flex  flex-col justify-center">
            <table className="lg:w-[70%] mx-auto">
              <tbody>
                <tr>
                  <td className="font-semibold">Sector : </td>
                  <td>Leather.</td>
                </tr>
                <tr>
                  <td className="font-semibold">Sub Sector : </td>
                  <td>Footwear.</td>
                </tr>
                <tr>
                  <td className="font-semibold">Occupation : </td>
                  <td>Pre-Assembly Operator.</td>
                </tr>
                <tr>
                  <td className="font-semibold">Reference Id : </td>
                  <td>LSS/Q2601.</td>
                </tr>
                <tr>
                  <td className="font-semibold">Aligned To : </td>
                  <td>NCO-2004/8266.86</td>
                </tr>
              </tbody>
            </table>
          </ul>
        </div>
        <div>
          <p className="text-center font-normal">
            A Pre-Assembly Operator is an important job-role associated with the
            Footwear Sector.
          </p>
          <p className="text-center mx-auto font-normal lg:w-[65%]">
            As part of its activities, the Leather Sector Skill Council (LSSC)
            has developed National Occupational Standards (NOS) for the
            following job roles concerning Finished Leather, Footwear and
            Leather Goods & Leather Garments segments
          </p>
        </div>
        {/* roles - seaction 1 -list  */}
        {jobRoles?.map(({ title, roles }, index) => {
          return (
            <div key={index}>
              <h3 className="border mb-4 rounded-lg text-xl text-center py-2 font-semibold border-[#E6E6E6] bg-[#F3F7F7]">
                {title}
              </h3>
              <table className="w-full rounded-xl overflow-hidden text-sm border border-collapse bg-[#F3F7F7] border-[#CCCCCC]">
                <thead className="border-b border-[#CCCCCC]">
                  <tr>
                    <th className="text-left p-3 ">S.No</th>
                    <th className="text-left p-3">Job Role Identified</th>
                    <th className="text-end p-3 ">NSQF Level</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((job, i) => {
                    const { sno, jobRole, nsqfLevel, href } = job;
                    return (
                      <tr key={i} className="border-b border-[#E6E6E6]">
                        <td className="text-left p-3">{sno}</td>
                        <td className="text-left p-3">
                          <Link
                            className="text-[#0000FF] underline"
                            href={href}
                          >
                            {" "}
                            {jobRole}
                          </Link>
                        </td>
                        <td className="text-end p-3">{nsqfLevel}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
        {/* roles - seaction 1  */}
        <h2 className="text-xl md:text-2xl xl:text-3xl text-center font-bold">
          New QP-NOS Endorsements
        </h2>

        {/* roles - seaction 1 -list */}
        {jobRolesData?.map(({ title, roles }, index) => {
          return (
            <div key={index}>
              <h3 className="border mb-4 rounded-lg text-xl text-center py-2 font-semibold border-[#E6E6E6] bg-[#F3F7F7]">
                {title}
              </h3>
              <table className="w-full rounded-xl overflow-hidden text-sm border border-collapse bg-[#F3F7F7] border-[#CCCCCC]">
                <thead className="border-b border-[#CCCCCC]">
                  <tr>
                    <th className="text-left p-3 ">S.No</th>
                    <th className="text-left p-3">Job Role Identified</th>
                    <th className="text-end p-3 ">NSQF Level</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((job, i) => {
                    const { sno, jobRole, nsqfLevel, href } = job;
                    return (
                      <tr key={i} className="border-b border-[#E6E6E6]">
                        <td className="text-left p-3">{sno}</td>
                        {/* <td className="text-left p-3">{jobRole}</td> */}
                        <td className="text-left p-3">
                          <Link
                            className="text-[#0000FF] underline"
                            href={href}
                          >
                            {jobRole}
                          </Link>
                        </td>
                        <td className="text-end p-3">{nsqfLevel}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default QP;

const jobRoles = [
  {
    title: "FINISHED LEATHER",
    roles: [
      {
        sno: 1,
        jobRole: "Drum Operator",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase1/Revised Leather QP_Finished Leather_Post NSQC/Drum Operator_Finished Leather_revised.pdf",
      },
      {
        sno: 2,
        jobRole: "Buffing Operator",
        nsqfLevel: 3,
        href: "https://leatherssc.org/pdf/LeatherPhase1/Revised Leather QP_Finished Leather_Post NSQC/Buffing Operator_Finished Leather_revised.pdf",
      },
      {
        sno: 3,
        jobRole: "Shaving Operator",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase1/Revised Leather QP_Finished Leather_Post NSQC/QP_Shaving Operator_Finished Leather_Revised.pdf",
      },
      {
        sno: 4,
        jobRole: "Post Tanning Operator",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase1/Revised Leather QP_Finished Leather_Post NSQC/Post Tanning Machine Operator_Finished Leather_Revised.pdf",
      },
      {
        sno: 5,
        jobRole: "Splitting - Sammying Operator",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase1/Revised Leather QP_Finished Leather_Post NSQC/Splitting and sammying Operator_Finished Leather_Revised.pdf",
      },
      {
        sno: 6,
        jobRole: "Fleshing Operator",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase1/Revised Leather QP_Finished Leather_Post NSQC/Fleshing Operator_Finished Leather_revised.pdf",
      },
      {
        sno: 7,
        jobRole: "Helper – Dry Operation",
        nsqfLevel: 2,
        href: "https://leatherssc.org/pdf/LeatherPhase1/Revised Leather QP_Finished Leather_Post NSQC/Helper Dry Operations_Finished Leather_revised.pdf",
      },
      {
        sno: 8,
        jobRole: "Helper – Wet Operation",
        nsqfLevel: 2,
        href: "https://leatherssc.org/pdf/LeatherPhase1/Revised Leather QP_Finished Leather_Post NSQC/Helper Wet Operations_Finished Leather_revised.pdf",
      },
      {
        sno: 9,
        jobRole: "Helper – Finished Operations",
        nsqfLevel: 2,
        href: "https://leatherssc.org/pdf/LeatherPhase1/Revised Leather QP_Finished Leather_Post NSQC/Helper_Finishing Operations_Finished Leather_Revised.pdf",
      },
    ],
  },

  {
    title: "LEATHER GOODS & GARMENTS",
    roles: [
      {
        sno: 10,
        jobRole: "Cutter",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase1/Revised Leather QP_ G n G_Final/Cutter_Goods Garments_Revised.pdf",
      },
      {
        sno: 11,
        jobRole: "Stitcher",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase1/Revised Leather QP_ G n G_Final/Stitcher_Gn G_Revised.pdf",
      },
      {
        sno: 12,
        jobRole: "Helper - Finishing process",
        nsqfLevel: 2,
        href: "https://leatherssc.org/pdf/LeatherPhase1/Revised Leather QP_ G n G_Final/QP_Helper Finishing_Goods _ Garments_Post NSQC.pdf",
      },
      {
        sno: 13,
        jobRole: "Helper - Parts Making",
        nsqfLevel: 2,
        href: "https://leatherssc.org/pdf/LeatherPhase1/Revised Leather QP_ G n G_Final/helper Parts Making Gn G_Revised.pdf",
      },
    ],
  },

  {
    title: "FOOTWEAR",
    roles: [
      {
        sno: 14,
        jobRole: "Cutter",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase1/Revised Leather QP_Footwear_Final/Cutter (Footwear)_Revised.pdf",
      },
      {
        sno: 15,
        jobRole: "Operator - Moulding",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase1/Revised Leather QP_Footwear_Final/Moulding Operator( Non Leather Footwear)_Revised.pdf",
      },
      {
        sno: 16,
        jobRole: "Operator - Lasting",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase1/Revised Leather QP_Footwear_Final/Lasting Operator(Footwear)_Revised.pdf",
      },
      {
        sno: 17,
        jobRole: "Operator - Skiving",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase1/Revised Leather QP_Footwear_Final/QP_Skiving Operator_Footwear_Revised.pdf",
      },
      {
        sno: 18,
        jobRole: "Operator - Pre Assembly",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase1/Revised Leather QP_Footwear_Final/Pre - Assembly Operator(Footwear)_Revised.pdf",
      },
      {
        sno: 19,
        jobRole: "Operator - Stitching",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase1/Revised Leather QP_Footwear_Final/Stitching Operator (Footwear)_Revised.pdf",
      },
      {
        sno: 20,
        jobRole: "Helper - Finishing",
        nsqfLevel: 2,
        href: "https://leatherssc.org/pdf/LeatherPhase1/Revised Leather QP_Footwear_Final/QP_Helper_Finishing Operations_Footwear_revised.pdf",
      },
      {
        sno: 21,
        jobRole: "Helper - Uppers Making",
        nsqfLevel: 2,
        href: "https://leatherssc.org/pdf/LeatherPhase1/Revised Leather QP_Footwear_Final/Helper - Uppers Making(Footwear)_Revised.pdf",
      },
      {
        sno: 22,
        jobRole: "Helper - Bottom Making",
        nsqfLevel: 2,
        href: "https://leatherssc.org/pdf/LeatherPhase1/Revised Leather QP_Footwear_Final/Helper - Bottom Making(Footwear)_Revised.pdf",
      },
    ],
  },

  {
    title: "Non-Leather Footwear",
    roles: [
      {
        sno: 23,
        jobRole: "Knitting Operator Footwear",
        nsqfLevel: 4,
        href: "https://leatherssc.org/wp-content/uploads/2020/05/QP-TempID-206-updated.pdf",
      },
    ],
  },
];

const jobRolesData = [
  {
    title: "FINISHED LEATHER",
    roles: [
      {
        sno: 1,
        jobRole: "Scudder (Machine)",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Finished Leather_Post NSQC/Scudding Operator_Finished Leather_revised.pdf",
      },
      {
        sno: 2,
        jobRole: "Setting Operator",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Finished Leather_Post NSQC/Setting Operator_Finished Leather_Revised.pdf",
      },
      {
        sno: 3,
        jobRole: "Glazing Operator",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Finished Leather_Post NSQC/Glazing Operator_Finished Leather_Revised.pdf",
      },
      {
        sno: 4,
        jobRole: "Finishing Operator",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Finished Leather_Post NSQC/Finishing Operator_Finished Leather_Revised.pdf",
      },
    ],
  },
  {
    title: "LEATHER GOODS & GARMENTS",
    roles: [
      {
        sno: 5,
        jobRole: "Skiving Operator (Machine)",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Goods and Garments_Post NSQC/QP_Skiving Operator_GnG_Revised.pdf",
      },
      {
        sno: 6,
        jobRole: "Pattern Cutter",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Goods and Garments_Post NSQC/QP_Pattern Cutter_GnG_Revised.pdf",
      },
      {
        sno: 7,
        jobRole: "Goods & Garments- Quality Control Inspector",
        nsqfLevel: 5,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Goods and Garments_Post NSQC/QP_Quality Control Inspector_GnG_Revised.pdf",
      },
      {
        sno: 8,
        jobRole: "Sample Maker",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Goods and Garments_Post NSQC/QP_Sample Maker_GnG_Revised.pdf",
      },
      {
        sno: 9,
        jobRole: "CAD CAM Operator- Goods",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Goods and Garments_Post NSQC/QP_CAD CAM Operator_Goods_Revised.pdf",
      },
      {
        sno: 10,
        jobRole: "CAD CAM Operator Garments",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Goods and Garments_Post NSQC/QP_ CAD CAM Operator_ Garment_Revised.pdf",
      },
      {
        sno: 11,
        jobRole: "Saddle- Maker",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Goods and Garments_Post NSQC/QP_Saddle Making_GnG_Revised.pdf",
      },
      {
        sno: 12,
        jobRole: "Saddlery-Harness Maker",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Goods and Garments_Post NSQC/QP_Harness Maker_GnG_Revised.pdf",
      },
      {
        sno: 13,
        jobRole: "Saddlery-Quality Control Inspector",
        nsqfLevel: 5,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Goods and Garments_Post NSQC/QP_Quality Control Inspector_Saddlery_Revised.pdf",
      },
      {
        sno: 14,
        jobRole: "Sewing Machine Operator",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Goods and Garments_Post NSQC/Sewing Machine Operator_Saddlery_Revised.pdf",
      },
    ],
  },
  {
    title: "Footwear",
    roles: [
      {
        sno: 15,
        jobRole: "Skiver (by hand)",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Footwear_Post NSQC/Skiver (By hand)_Footwear_Revised.pdf",
      },
      {
        sno: 16,
        jobRole: "Laster (By Hand)",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Footwear_Post NSQC/QP_laster (By hand)Footwear Revised.pdf",
      },
      {
        sno: 17,
        jobRole: "Heel Attacher",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Footwear_Post NSQC/Heel attacher_Footwear_Revised.pdf",
      },
      {
        sno: 18,
        jobRole: "Finishing Operator",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Footwear_Post NSQC/Finishing Operator_Footwear_Revised.pdf",
      },
      {
        sno: 19,
        jobRole: "Heel Builder",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Footwear_Post NSQC/Heel Builder_Footwear_Revised.pdf",
      },
      {
        sno: 20,
        jobRole: "Pattern Cutter",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Footwear_Post NSQC/QP_Pattern Cutter_Footwear_Revised.pdf",
      },
      {
        sno: 21,
        jobRole: "Line Supervisor",
        nsqfLevel: 5,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Footwear_Post NSQC/Line Supervisor_Footwear_Revised.pdf",
      },
      {
        sno: 22,
        jobRole: "Quality Control Inspector",
        nsqfLevel: 5,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Footwear_Post NSQC/QP_Quality Control Inspector_Footwear_Revised.pdf",
      },
      {
        sno: 23,
        jobRole: "Product Developer",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Footwear_Post NSQC/Product Developer_Footwear_Revised.pdf",
      },
      {
        sno: 24,
        jobRole: "CAD CAM Operator",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Footwear_Post NSQC/QP_CAD CAM Operator_Footwear_Revised.pdf",
      },
      {
        sno: 25,
        jobRole: "Sample Maker",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Footwear_Post NSQC/QP_Sample Maker_Footwear_Revised.pdf",
      },
      {
        sno: 26,
        jobRole: "Quality Control Supervisor",
        nsqfLevel: 5,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Footwear_Post NSQC/QCI Non Leather_Footwear_Revised.pdf",
      },
      {
        sno: 27,
        jobRole: "Store In-charge",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Footwear_Post NSQC/Store In-Charge_Footwear_Revised.pdf",
      },
      {
        sno: 28,
        jobRole: "Moulding Supervisor",
        nsqfLevel: 4,
        href: "https://leatherssc.org/pdf/LeatherPhase2/Revised QP_Footwear_Post NSQC/Moulding Supervisor_Footwear_Revised.pdf",
      },
    ],
  },
];
