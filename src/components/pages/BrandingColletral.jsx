import Image from "next/image";
import Link from "next/link";
import BackButton from "../atoms/BackButton";

const BrandingColletral = () => {
  return (
    <main className="py-6 container">
      <BackButton />
      <section className="space-y-8 ">
        <h4 className="text-[#073B4C] font-bold bg-[#EBF7FF]  text-2xl shadow-three rounded-xl px-6 py-2 w-fit mx-auto ">
          Important information on Posters PMKVY 4.0
        </h4>

        <p className="font-normal">
          It has been decided by MSDE that the following informational posters
          need to be put up by Training Partners at their Training Centers for
          each job role under PMKVY 4.0:
        </p>

        <ul>
          <li className="font-normal">Poster 1 – Placement Poster</li>
          <li className="font-normal">Poster 2 – Equipment List</li>
          <li className="font-normal">Poster 3 – Job Role Overview</li>
          <li className="font-normal">Poster 4 – Occupation Map</li>
        </ul>

        <p className="font-normal">
          Training Partners are requested to go through the instructions
          carefully and get the posters printed as per the below specifications
          and put them up in classrooms/labs at your Training
          Centers. Specifications for Posters
        </p>

        <div className="space-y-2">
          <p>
            Position:{" "}
            <span className="font-normal">
               On Walls in the Classroom (Two Posters each – One in English and
              the other in Hindi)
            </span>
          </p>
          <p>
            Size:  <span className="font-normal">17inx22in</span>
          </p>
          <p>
            Material: 
            <span className="font-normal">
              Digital Printing on Imported Art Paper (300 GSM)
            </span>
          </p>
        </div>

        <div className="grid   lg:grid-cols-3 gap-10 xl:gap-20">
          {brands?.map((item, i) => {
            const { img, route, title } = item;
            return (
              <div
                key={i}
                className="flex justify-center items-center flex-col gap-5"
              >
                <h3 className="font-semibold text-center text-2xl">{title}</h3>
                <Image
                  src={`/img/brands/${img}`}
                  alt="library"
                  width={300}
                  height={600}
                />
                <Link className="w-[80%] " href={route}>
                  <button className="text-lg cursor-pointer w-full rounded-lg py-2 bg-gradient-to-t from-[#8C0902] to-[#420705] text-white">
                    View
                  </button>
                </Link>
              </div>
            );
          })}
          {/* <div className="flex flex-col gap-5">
            <h3 className="font-semibold text-center text-2xl">LSSC Video</h3>
            <video
              className="rounded-lg border"
              poster="/img/video.svg"
              controls
              preload="none"
            >
              <source src="/vid/branding.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default BrandingColletral;

const brands = [
  {
    title: "Stitching Operator Footwear - Posters",
    img: "1.svg",
    route:
      "https://leatherssc.org/wp-content/uploads/2019/02/Stitching-Operator-Footwear-Posters-1.pdf",
  },
  {
    title: "Cutter Footwear - Posters",
    img: "1.svg",
    route:
      "https://leatherssc.org/wp-content/uploads/2019/02/Cutter-Footwear-Posters.pdf",
  },
];
