import Image from "next/image";
import Link from "next/link";
import BackButton from "../atoms/BackButton";

const IndustrySurvey = () => {
  return (
    <main className="py-10 container">
      <BackButton />
      <section className="grid  mt-4 lg:grid-cols-3 gap-10 xl:gap-20">
        {media?.map((item, i) => {
          const { img, route } = item;
          return (
            <div
              key={i}
              className="flex justify-center items-center flex-col gap-5"
            >
              <Image src={img} alt="library" width={300} height={600} />
              <Link className="lg:w-[80%] w-full" href={route}>
                <button className="text-lg cursor-pointer w-full rounded-lg py-2 bg-gradient-to-t from-[#8C0902] to-[#420705] text-white">
                  View
                </button>
              </Link>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default IndustrySurvey;

const media = [
  {
    route:
      "https://drive.google.com/file/d/1buocgatdAfbNwZR6GvQ4bRBaMDEVAaN1/view",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/4264f6e0-b3cf-4ddd-3ec9-9a4d923e0700/public",
  },
  {
    route:
      "https://drive.google.com/file/d/1job9N54oljPzxhOmQwdR9QaOrU4xAXf6/view",
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/2ae95838-07c8-49ee-d312-ae0429aeda00/public",
  },
];
