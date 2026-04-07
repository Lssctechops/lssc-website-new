import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import { limitTextLength } from "~/utils/limitText";

const NewsEventContainer = ({ title, thumbnail, route = "#", rating = 3 }) => {
  return (
    <div className="rounded-lg w-full shadow shadow-gray-200 bg-[#FAFAFA] p-3">
      <Image
        src={thumbnail}
        alt="news"
        width={500}
        height={500}
        className="w-full object-cover rounded-lg aspect-video"
      />
      <p className="py-2 text-sm">{limitTextLength(title, 50)}</p>
      <div className="flex items-center justify-between">
        <Link
          href={route}
          className="flex items-center gap-2 text-white bg-black text-sm p-3 rounded-lg"
        >
          Start Reading <FaAngleRight />
        </Link>
        <span className="px-4 py-2 text-black rounded-full border-4 text-lg font-medium border-dashed border-amber-300">
          {rating}
        </span>
      </div>
    </div>
  );
};

export default NewsEventContainer;
