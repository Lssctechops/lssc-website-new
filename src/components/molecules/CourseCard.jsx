import Image from "next/image";
import { FaCircleNotch } from "react-icons/fa6";
import { MdTranslate } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { LiaStarHalf, LiaStarSolid, LiaStopwatchSolid } from "react-icons/lia";
import Link from "next/link";
import { limitTextLength } from "~/utils/limitText";
import StarRating from "./StarRating";

const CourseCard = ({
  thumbnail,
  nsqf,
  title,
  qpLink,
  currLink,
  time,
  qpCode,
  vNo,
  rating = 0,
  level,
  courseId,
  qp_code = "na",
  qp_link = "#",
  curriculam_link,
  version_no,
  totalHours,
  nsqf_level,
}) => {
  return (
    <div className="gap-2 w-full h-full  flex flex-col justify-between">
      <div className="relative w-full rounded-3xl">
        <Image
          className=" w-full aspect-video object-cover rounded-3xl bg-gray-200"
          src={thumbnail}
          alt={title}
          title={title}
          width={300}
          height={200}
        />
      </div>
      <h4 className="text-lg font-semibold">{limitTextLength(title, 50)}</h4>
      <div className="flex flex-row flex-wrap gap-3">
        <p className="flex gap-1 text-sm text-nowrap items-center">
          {" "}
          <span className="shrink-0">
            <FaCircleNotch />{" "}
          </span>
          QP Code: <span className="text-[#666666]">{qp_code}</span>
        </p>
        <p className="flex gap-1 text-sm text-nowrap items-center">
          {" "}
          <span className="shrink-0">
            <FaCircleNotch />
          </span>{" "}
          Version No: <span className="text-[#666666]">{version_no}</span>
        </p>
        <p className="flex gap-1 text-sm text-nowrap items-center">
          {" "}
          <span className="shrink-0">
            <FaCircleNotch />
          </span>{" "}
          NSQF Level: <span className="text-[#666666]">{nsqf_level}</span>
        </p>
      </div>
      <p className="flex gap-8 font-normal text-gray-600">
        <span className="flex items-center gap-2">
          <MdTranslate />
          Language
        </span>{" "}
        <span className="flex items-center gap-2">
          <LiaStopwatchSolid />
          {totalHours} hrs
        </span>
      </p>
      <div className="flex items-center gap-1">
        {/* <LiaStarSolid color="#ffd130" /> <LiaStarSolid color="#ffd130" />
        <LiaStarSolid color="#ffd130" />
        <LiaStarSolid color="#ffd130" />
        <LiaStarHalf color="#ffd130" /> */}

        <StarRating rating={rating} />
        <span>({rating})</span>
      </div>
      <div className="flex gap-3">
        <Link
          target="_blank"
          className="text-[#0070BA] underline border rounded-md text-xs px-2 border-[#0070BA]"
          href={qp_link || "#"}
        >
          QP Link
        </Link>
        <Link
          target="_blank"
          className="text-[#0070BA] underline border rounded-md text-xs px-2 border-[#0070BA]"
          href={curriculam_link || "#"}
        >
          Curriculum Link
        </Link>
      </div>
      <Link
        href={`/auth/candidate?course=${courseId}`}
        className="w-fit flex items-center gap-4 rounded-xl hover:bg-[#935cf2] bg-black px-6 py-3 font-semibold text-white"
      >
        {" "}
        <FaRegUser />
        Apply Now
      </Link>
    </div>
  );
};

export default CourseCard;
