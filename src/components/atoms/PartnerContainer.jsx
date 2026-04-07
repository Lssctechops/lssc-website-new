import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const PartnerContainer = ({ title, description, img, route = "#" }) => {
  return (
    <div className="flip-card w-full px-2 py-4 h-[380px] rounded-[7.24px] ">
      <div className="flip-card-inner  w-full h-full transition-transform duration-700 transform-style-preserve-3d">
        <div className=" overflow-hidden relative flip-card-front w-full h-full backface-hidden bg-transparent rounded-lg shadow-md p-6 flex flex-col justify-center items-center ">
          <h2 className="text-3xl font-bold text-center relative z-10 text-white uppercase">
            {title}
          </h2>
          <Image
            alt={title}
            src={img}
            height={400}
            width={400}
            className="object-cover absolute h-full w-full brightness-75"
          />
        </div>
        <div className="flip-card-back absolute overflow-hidden z-50 w-full h-full backface-hidden bg-black backdrop-blur-[2px] rounded-lg shadow-lg p-4 flex flex-col justify-between transform-rotate-y-180">
          <p className="text-white text-sm md:text-sm relative z-10">
            {description}
          </p>
          <Link
            href={route}
            className="mt-4 inline-flex items-center gap-1 text-xs relative z-10 px-3 py-2 shadow cursor-pointer bg-black hover:bg-[#9e5cf2] text-white rounded-md self-end"
          >
            <span> Read more</span>
            <span className="text-sm">
              <MdKeyboardArrowRight />
            </span>
          </Link>

          <Image
            alt={title}
            src={img}
            height={400}
            width={400}
            className="object-cover blur-xs absolute top-0 left-0 h-full w-full brightness-50"
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerContainer;
