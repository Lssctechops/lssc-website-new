import Link from "next/link";
import BackButton from "../atoms/BackButton";
const QuestionPaper = () => {
  return (
    <main className="py-6 container">
      <BackButton />
      <section className="space-y-6 flex flex-col items-center ">
        <div className="bg-[#EBF7FF] space-y-3 mx-auto w-fit  shadow-three rounded-xl p-2">
          <h4 className="text-2xl font-bold text-[#073B4C]">
            Model Question Paper
          </h4>
        </div>
        <div className="space-y-4">
          <p className="text-lg">
            You can download these PDFs by clicking the links:
          </p>
          <ul className="text-lg list-disc space-y-1 ms-6">
            {trainingMaterials.map(({ label, route }, index) => {
              return (
                <Link
                  key={index}
                  href={route}
                  target="_blank"
                  className="text-blue-500"
                >
                  <li>{label}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default QuestionPaper;

const trainingMaterials = [
  {
    label: "Basic closing Operator- Practical",
    route: "/model-question/Basic closing Operator- Practical.pdf",
  },
  {
    label: "Stitcher footwear – for offline QB English",
    route: "/model-question/Stitcher footwear - for offline QB English.pdf",
  },
  {
    label: "Stitcher footwear – for offline QB Hindi",
    route: "/model-question/Stitcher footwear - for offline QB Hindi.pdf",
  },
];
