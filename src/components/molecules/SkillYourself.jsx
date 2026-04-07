"use client";
import StyledHeading from "../atoms/StyledHeading";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight, MdOutlineBook } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoTrophy } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { fetchCourses } from "~/lib/redux/slice/course-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const SkillYourself = ({ isHeadingTwo = true }) => {
  const dispatch = useDispatch();

  const { courseList } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(fetchCourses({ filters: { limit: 4, featured: true } }));
  }, []);
  return (
    <section className="py-12">
      <div className="container flex flex-col gap-6">
        <StyledHeading
          heading={
            <>
              <span className="text-primary-600">Skill </span>Yourself
            </>
          }
          containerStyle="mx-auto "
        />
        {isHeadingTwo && (
          <h3 className="text-center text-[25px] md:text-[30px] xl:text-[38px] font-semibold">
            Candidate
          </h3>
        )}
        <div className="md:flex md:justify-between items-center">
          <h3 className="text-center lg:text-start text-[25px] md:text-[30px] xl:text-[38px] font-semibold">
            Current Courses
          </h3>

          <Link
            href="/training-map"
            className="hidden md:flex items-center justify-center bg-gradient-to-r from-[#8C0902] to-[#420705]  text-white px-4 py-3 rounded-[10px] hover:bg-gradient-to-r hover:from-[#935cf2] hover:to-[#935cf2]  text-sm"
          >
            Training Map <MdKeyboardArrowRight size={20} />
          </Link>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          {courseList.map(({ thumbnail, title, type, slug }, index) => (
            <div key={index} className="p-2">
              <Card
                thumbnail={thumbnail?.url}
                name={title}
                route={`/news/${slug}`}
                rating={index + 1}
                mode={type}
              />
            </div>
          ))}
        </div>

        {/* <Link
          href="/courses"
          className="w-fit mx-auto lg:hidden bg-black  text-white px-4 py-2 rounded-[10px] hover:opacity-65 text-sm"
        >
          See all
        </Link> */}
        <Link
          href="/training-map"
          className="flex md:hidden items-center justify-center bg-gradient-to-r from-[#8C0902] to-[#420705]  text-white px-4 py-3 rounded-[10px] hover:bg-gradient-to-r hover:from-[#935cf2] hover:to-[#935cf2]  text-sm"
        >
          Training Map <MdKeyboardArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
};

export default SkillYourself;

const Card = ({ thumbnail = "/home/Courses 3.png", name = "PMKVY", mode }) => {
  const getTitle = (name) => {
    if (name == "PMKVY") {
      return (
        <p className="text-md md:text-sm">
          <b>Start Your Skill Journey with PMKVY</b>
          <br />
          Offering free training, industry-relevant courses, and job-ready
          skills to boost your career.
        </p>
      );
    } else if (name == "NAPS") {
      return (
        <p className="text-md md:text-sm">
          <b>Start Your Skill Journey with NAPS</b>
          <br />
          Your gateway to building real-world skills, gaining hands-on industry
          experience, and earning a stipend while you learn.
        </p>
      );
    } else if (name == "PM Vishwakarma Yojana") {
      return (
        <p className="text-md md:text-sm">
          <b>Start Your Skill Journey with PMVY</b>
          <br />
          This scheme opens doors to recognition, skill development, modern
          tools, financial support, and market linkage.
        </p>
      );
    } else if (name == "RPL") {
      return (
        <p className="text-md md:text-sm">
          <b>Start Your Skill Journey with RPL</b>
          <br />
          Helps convert your skills into a government-recognized certification
          by boosting your confidence, and improving job opportunities.
        </p>
      );
    } else {
      return (
        <p className="font-bold text-xl text-gray-700">
          Start your skill transformation now
        </p>
      );
    }
  };
  return (
    <div className="w-full bg-[#EBEBEB] hover:bg-white hover:shadow-xl shadow-blue-300/50 transition-all duration-200 rounded-2xl p-5 grid grid-cols-1 md:grid-cols-5  gap-4 ">
      <div className="w-full py-5 md:py-0 bg-white md:bg-transparent rounded-2xl col-span-2">
        <Image
          alt={name}
          src={thumbnail}
          height={300}
          width={300}
          className="object-cover mx-auto w-[40%] md:w-full lg:aspect-square  rounded-[10px] md:border-[1.23px] border-[#EBEBEB]"
        />
      </div>

      <div className="h-full w-full  md:col-span-3 flex flex-col justify-between">
        <div className="w-full py-3 flex flex-col gap-5 md:gap-8">
          <h3 className="text-base font-bold">{name}</h3>

          {/* <div className="w-full flex flex-wrap gap-3 flex-row  items-center">
            <div className="inline-flex items-center gap-1">
              <span className="text-gray-400 text-lg">
                <MdOutlineBook />
              </span>
              <span className="text-[13px] font-medium">Courses : 6</span>
            </div>
            <div className="inline-flex items-center gap-1">
              <span className="text-gray-400 text-lg">
                <FaUser />
              </span>
              <span className="text-[13px] font-medium">
                Student Enrolled : 198
              </span>
            </div>

            <div className="inline-flex items-center gap-1">
              <span className="text-gray-400 text-lg">
                <IoTrophy />
              </span>
              <span className="text-[13px] font-medium">{mode}</span>
            </div>
          </div> */}

          {/* <div className="w-full flex flex-col gap-3">
            <div className="w-full bg-gray-300 rounded-2xl h-[4px]">
              <div className="w-[80%] orange-gradient  rounded-2xl h-[4px] relative"></div>
            </div>

            <div className="w-full flex flex-row items-center justify-between">
              <span className="text-[12px] font-normal">Batch Close Date</span>

              <span className="text-[12px] font-normal">
                duration : 330 Hours
              </span>
            </div>
          </div> */}
          {getTitle(name)}
        </div>

        <div className="w-full flex justify-end justify-self-end">
          <Link
            href="/courses"
            className=" w-full inline-flex items-center justify-center bg-[#2EA446] hover:bg-[#9e5cf2] text-white px-4 py-3 rounded-[10px] transition-all duration-150 text-base"
          >
            Enroll Now
            <span className="text-lg">
              <MdKeyboardArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
