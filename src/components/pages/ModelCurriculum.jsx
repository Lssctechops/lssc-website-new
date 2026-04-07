import Image from "next/image";
import Link from "next/link";
import BackButton from "../atoms/BackButton";

const ModelCurriculum = () => {
  return (
    <main className="container py-6">
      <BackButton />
      <section className=" space-y-4 ">
        <h3 className="text-[#073B4C] w-fit mx-auto text-center rounded-lg font-bold px-3 py-1 text-2xl bg-[#EBF7FF] shadow-three">
          Model Curriculum
        </h3>

        <div className="grid   lg:grid-cols-4 gap-5 pt-5">
          {curriculum?.map((item, i) => {
            const { img, route, title } = item;
            return (
              <div
                key={i}
                className="flex justify-center items-center flex-col gap-5"
              >
                <h3 className="font-semibold text-center text-2xl">{title}</h3>
                <Image
                  className="rounded-xl h-[213px] object-cover border border-gray-400 shadow "
                  src={`${img}`}
                  priority
                  quality={50}
                  alt="library"
                  width={300}
                  height={600}
                />
                <Link target="_blank" className="w-full" href={route}>
                  <button className="text-lg cursor-pointer w-full rounded-lg py-2 bg-gradient-to-t from-[#8C0902] to-[#420705] text-white">
                    View
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-6 space-y-4 ">
        <h3 className="text-[#073B4C]  w-fit mx-auto text-center rounded-lg font-bold px-3 py-1 text-2xl bg-[#EBF7FF] shadow">
          Apprenticeship Curriculum
        </h3>

        <div className="grid   lg:grid-cols-4 gap-5 pt-5">
          {apprenticeship?.map((item, i) => {
            const { img, route, title } = item;
            return (
              <div
                key={i}
                className="flex justify-center items-center flex-col gap-5"
              >
                <h3 className="font-semibold text-center text-2xl">{title}</h3>
                <Image
                  className="rounded-xl object-cover h-[213px] border border-gray-400 shadow "
                  src={img}
                  alt="library"
                  width={300}
                  height={600}
                />
                <Link target="_blank" className="w-full" href={route}>
                  <button className="text-lg cursor-pointer w-full rounded-lg py-2 bg-gradient-to-t from-[#8C0902] to-[#420705] text-white">
                    View
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default ModelCurriculum;

const curriculum = [
  {
    title: "CAD/CAM Operator (Footwear)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/ab9c7237-99d2-454f-e0de-775b61aa1500/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2019/03/MC_LSSQ2103_V1.0_CAD-CAM-Operator-Footwear_06.12.2018.pdf",
  },
  {
    title: "Cutter (Footwear)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/ef21dc52-24ad-4dd8-6a58-915cd939a000/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2019/03/MC_Rev_LSSQ2301_Cutter_Footwear_16.07.2018-2.pdf",
  },
  {
    title: "Harness Maker (Finished Leather)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/d3d21a66-f868-4967-b5ab-ebd75f098f00/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2019/03/MC_LSSQ7201_V1.0_Harness-Maker_29.10.2018-1.pdf",
  },
  {
    title: "Skiving operator (Goods & Garments)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/07ebafb0-540f-46d3-0499-b46d1c31c100/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2019/03/Skiving-operatorGGLSSQ5401.pdf",
  },
  {
    title: "Stitcher (Goods & Garments)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/445576fa-74ee-4141-bf2c-76bd5e6afc00/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2017/11/Model-Curriculum-for-Stitcher-Goods-Garments-V1.pdf",
  },
  {
    title: "Skiving Operator (Footwear)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/bfbc691e-5f0f-4ded-e87c-9b9044664700/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2018/07/Model-Curriculum-for-Skiving-Operator-Footwear-V1-4.pdf",
  },
  {
    title: "Helper-Finishing (Footwear)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/a3ca90ed-08e8-472b-6c8f-795777b49c00/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2018/07/MC_Helper-Finishing-Footwear.pdf",
  },
  {
    title: "Helper-Dry Operations (Finished Leather)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/a032ceb2-70c0-4da4-b0b5-64334e8d0300/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2018/07/MC_Helper-Dry-Operations-Finished-Leather.pdf",
  },
  {
    title: "Stitching Operator (Footwear)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/e81ad2bc-00c7-4507-7ee6-dfe490564e00/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2018/07/Model-Curriculum-for-Stitching-Operator-Footwear-V1-5.pdf",
  },
  {
    title: "Helper-Bottom Making (Footwear)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/a1120d57-dec2-47af-44a8-b91c7e99ea00/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2017/11/PL-MC_Helper-Bottom-Making-Footwear.pdf",
  },
  {
    title: "Post Tanning Machine Operator",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/abd4b039-ffb9-43b4-20ae-0485ddfad000/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2018/03/MC_LSS-Q0701_Post-Tanning-Machine-Operator-Copy.pdf",
  },
  {
    title: "Helper-Finishing (Goods and Garments)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/fd006d4c-8796-4d76-cf63-a53e3a0feb00/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2017/11/MC_Helper-Finishing-Goods-and-Garments.pdf",
  },
  {
    title: "Helper-Finishing Operations (Finished Leather)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/e6b00b49-f64a-4804-c708-e73c6f49f000/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2017/11/MC_Helper-Finishing-Operations-Finished-Leather-1.pdf",
  },
  {
    title: "Helper-Parts Making (Goods and Garments)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/bf417740-994b-4e3d-ac06-665f1ceb5100/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2017/11/MC_Helper-Parts-Making-Goods-and-Garments-1-2.pdf",
  },
  {
    title: "Helper-Upper Making (Footwear)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/89010f38-379a-4161-9c3d-d35c8dcafe00/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2017/11/MC_Helper-Upper-Making-Footwear.pdf",
  },
  {
    title: "Helper-Wet Operations (Multiskilled)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/0b766685-63d5-469c-1207-6983b8643500/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2017/11/MC_Helper-Wet-Operations-Finished-Leather.pdf",
  },
  {
    title: "Moulding Operator (Footwear - Non Leather)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/d64cb293-19c5-4346-9de6-bcd4ea37b900/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2017/11/MC_Moulding-Operator-Footwear-Non-Leather.pdf",
  },
  {
    title: "Pre-Assembly Operator (Footwear)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/5cbc7095-121f-4ca7-b8bc-6022020d5500/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2017/11/MC_Pre-Assembly-Operator-Footwear.pdf",
  },
  {
    title: "Buffing Operator (Finished Leather)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/9eb049ad-d2b4-4668-5b4a-c6f62bc98900/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2017/11/Model-Curriculum-for-Buffing-Operator-Finished-Leather-V1.pdf",
  },
  {
    title: "Cutter (Goods and Garments)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/2bb77a23-e31d-4272-dddb-a75a7d96bd00/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2017/11/Model-Curriculum-for-Cutter-Goods-and-Garments-V1.pdf",
  },
  {
    title: "Drum Operator (Finished Leather)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/9090d419-cb5b-433c-c731-b051feedf000/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2017/11/Model-Curriculum-for-Drum-Operator-Finished-Leather-V1.00.pdf",
  },
  {
    title: "Lasting Operator (Footwear)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/9af448ff-c65c-47c4-7cc1-06016921bd00/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2017/11/Model-Curriculum-for-Lasting-Operator-Footwear-V1-2.pdf",
  },
  {
    title: "Shaving Operator (Finished Leather)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/24634852-3ba7-4179-fef1-e95eff337000/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2017/11/Model-Curriculum_Shaving-Operator-Finished-Leather-V1.pdf",
  },
  {
    title: "Employability and Entrepreneurship Skills",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/cdaf3e1b-427d-4bd3-68c7-ec5603fcfe00/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2017/11/Model-urriculum_Entrepreneurship.pdf",
  },
  {
    title: "Saddle Maker (Saddlery)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/93365a63-e4cc-4e9a-9c30-12149eccc000/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2019/03/MC_LSSQ7101_Saddle_Maker_14_09_2018-1.pdf",
  },
  {
    title: "Pattern Cutter (Footwear)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/5626513c-c36f-4057-9743-5dfb2e5d8a00/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2019/03/MC_LSSQ2102_V1.0_Pattern-Cutter-Footwear_10.12.2018.pdf",
  },
];

const apprenticeship = [
  {
    title: "NAPS-Stitching Operator (footwear)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/efd98eb0-46e0-4cd5-55d4-3db9e4bef100/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2018/11/NAPS-Stitching-Operatorfootwear.pdf",
  },
  {
    title: "NAPS-Stitcher (Goods & Garments)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/a5fd1134-b25a-4d7e-7151-e1636de05b00/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2018/11/NAPS-StitcherGoodsGarments.pdf",
  },
  {
    title: "NAPS-Skiving Operator (footwear)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/ecf595f4-1ab2-45d7-e0d9-e3186b669500/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2018/11/NAPS-Skiving-Operatorfootwear.pdf",
  },
  {
    title: "NAPS - Cutter (footwear)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/af8c4531-61c1-416f-64f9-afdd726de100/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2018/11/NAPS-Cutterfootwear.pdf",
  },
  {
    title: "NAPS-Lasting operator (footwear)",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/833737f0-1848-4b0f-5af8-16ad38a29b00/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2018/11/NAPS-Lasting-operatorfootwear.pdf",
  },
  {
    title: "Quality Control Inspector (Footwear) - NAPS",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/b2026047-54db-424d-2396-fd3205dd8800/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2018/07/Cutter-FootwearQuality-Control-Inspector-Footwear.pdf",
  },
  {
    title: "Line Supervisor (Footwear) - NAPS",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/b1ce0ea1-270e-413c-318f-aa54883e3100/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2018/07/Word-file-of-Syllabus-for-Stitching-Operator-FootwearLine-Supervisor-Footwear-28.11.2017.pdf",
  },
  {
    title: "Quality Control Inspector (G&G) - NAPS",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/36c5d8e2-2cba-415a-0e1f-2396b5beb100/public",
    route:
      "https://leatherssc.org/wp-content/uploads/2018/07/Cutter-GGQuality-Control-Inspector-GG.pdf",
  },
];
