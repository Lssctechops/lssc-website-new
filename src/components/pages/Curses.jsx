"use client";
import Image from "next/image";
import BackButton from "../atoms/BackButton";
import Link from "next/link";
import CourseCard from "../molecules/CourseCard";
import SegmentDropdown from "../atoms/SideBarSelect";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchCourseCategory,
  fetchCourses,
  fetchCourseSegments,
} from "~/lib/redux/slice/course-slice";
import { useRouter, useSearchParams } from "next/navigation";

const Courses = ({
  selectedCategory,
  selectedDuration,
  selectedSegment,
  scheme = "all",
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { courseList, segments, categories, loading } = useSelector(
    (state) => state.course
  );

  const handleCategory = (catId) => {
    const isSelected = selectedCategory.includes(catId);
    const updatedCategory = isSelected
      ? selectedCategory.filter((id) => id !== catId)
      : [...selectedCategory, catId];

    const params = new URLSearchParams(searchParams.toString());

    if (updatedCategory.length > 0) {
      params.set("category", updatedCategory.join(","));
    } else {
      params.delete("category");
    }

    params.set("page", "1");

    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  const handleDuration = (duration) => {
    const isSelected = selectedDuration.includes(duration);
    const updatedDuration = isSelected
      ? selectedDuration.filter((id) => id !== duration)
      : [...selectedDuration, duration];

    const params = new URLSearchParams(searchParams.toString());

    if (updatedDuration.length > 0) {
      params.set("duration", updatedDuration.join(","));
    } else {
      params.delete("duration");
    }

    params.set("page", "1");

    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  const handleSegment = (segment) => {
    const isSelected = selectedSegment.includes(segment);
    const updatedSegment = isSelected
      ? selectedSegment.filter((id) => id !== segment)
      : [...selectedSegment, segment];

    const params = new URLSearchParams(searchParams.toString());

    if (updatedSegment.length > 0) {
      params.set("segment", updatedSegment.join(","));
    } else {
      params.delete("segment");
    }

    params.set("page", "1");
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  useEffect(() => {
    dispatch(
      fetchCourses({
        filters: {
          limit: 200,
          featured: false,
          courseSegment:
            selectedSegment?.length > 0 ? selectedSegment?.join(",") : null,
          duration:
            selectedDuration?.length > 0 ? selectedDuration?.join(",") : null,
          category:
            selectedCategory?.length > 0 ? selectedCategory?.join(",") : null,
          selectedCategory,
          scheme: scheme && scheme !== "all" ? scheme : null,
        },
      })
    );
  }, [
    selectedCategory?.length,
    selectedDuration?.length,
    selectedSegment?.length,
    scheme,
  ]);
  useEffect(() => {
    dispatch(
      fetchCourseCategory({
        filters: { limit: 20 },
      })
    );
  }, []);

  useEffect(() => {
    dispatch(
      fetchCourseSegments({
        filters: { limit: 20 },
      })
    );
  }, []);
  return (
    <main className="relative container space-y-10 py-10 md:py-20">
      <Link href="/" className="hidden lg:block">
        <BackButton />
      </Link>
      <section className="mx-auto lg:w-[80%] flex items-center justify-center gap-0 ">
        <Image
          src="/img/courses/banner.png"
          alt="interest"
          width={1000}
          height={400}
        />
      </section>
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="my-2">
            {(selectedSegment?.length > 0 ||
              selectedCategory?.length > 0 ||
              selectedDuration?.length > 0) && (
              <Link href="/courses" className="text-blue-600 underline text-sm">
                ✕ Clear filter
              </Link>
            )}
          </div>
          <SegmentDropdown
            title={"Segment"}
            isTrue={selectedSegment?.length > 0}
            icon="Segment.svg"
            onChange={handleSegment}
            selected={selectedSegment}
            options={segments}
            str={{ label: "title", value: "_id" }}
          />

          <SegmentDropdown
            title={"Course"}
            icon="Courses.svg"
            isTrue={selectedCategory?.length > 0}
            options={categories}
            str={{ label: "title", value: "_id" }}
            onChange={handleCategory}
            selected={selectedCategory}
          />
          <SegmentDropdown
            title={"Duration"}
            icon="Duration.svg"
            onChange={handleDuration}
            selected={selectedDuration}
            isTrue={selectedDuration?.length > 0}
            str={{ label: "label", value: "value" }}
            options={[
              { label: "Short course", value: "short" },
              { label: "Long course", value: "long" },
            ]}
          />
          {/* <SegmentDropdown
            title={"Mode"}
            icon="Modes.svg"
            isTrue={false}
            options={["Offline", "Online"]}
          /> */}
        </div>

        <div className="lg:col-span-3">
          <div className="w-full">
            <div className="mb-2 flex flex-row flex-wrap text-nowrap max-w-[1000px] items-center gap-2">
              {/* <div className="mb-2 flex text-nowrap min-w-[1000px] items-center gap-3"> */}
              {!loading &&
                suggestedOptions?.map(({ label, value }, index) => (
                  <Link
                    href={`/courses?scheme=${value}`}
                    key={value}
                    className={`${
                      scheme == value
                        ? "bg-gradient-to-r from-[#7B0C0A] to-[#420705] text-white"
                        : "bg-white text-gray-700"
                    }  text-wrap rounded-xl border  border-gray-300  px-4 py-2 text-sm`}
                  >
                    {label}
                  </Link>
                ))}
            </div>
          </div>

          <div className="py-10">
            {!loading && courseList?.length < 1 && (
              <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
                <svg
                  className="w-20 h-20 text-gray-200 mb-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.172 14.828a4 4 0 015.656 0M15 9h.01M9 9h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                  />
                </svg>

                <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                  Sorry, No Course Found
                </h2>

                <p className="text-gray-600 text-center max-w-md">
                  We couldn’t find any courses matching your criteria. Please
                  try adjusting your search or browse other categories.
                </p>
              </div>
            )}
            {courseList?.length > 0 && (
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-7">
                {courseList.map(
                  ({
                    _id,
                    thumbnail,
                    title,
                    qp_code,
                    rating,
                    type,
                    slug,
                    level,
                    qp_link,
                    curriculam_link,
                    version_no,
                    totalHours,
                    nsqf_level,
                  }) => {
                    return (
                      <CourseCard
                        rating={rating}
                        thumbnail={thumbnail?.url}
                        key={_id}
                        title={title}
                        level={level}
                        courseId={_id}
                        qp_code={qp_code}
                        curriculam_link={curriculam_link}
                        qp_link={qp_link}
                        version_no={version_no}
                        totalHours={totalHours}
                        nsqf_level={nsqf_level}
                      />
                    );
                  }
                )}
              </div>
            )}

            {loading && (
              <div className="flex flex-col items-center justify-center py-5">
                <svg
                  className="animate-spin h-12 w-12 text-indigo-500 mb-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>

                <h2 className="text-xl font-medium text-gray-800 mb-2 text-center">
                  Loading Courses...
                </h2>

                <p className="text-gray-500 text-center">
                  Please wait while we fetch the content for you.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Courses;

const suggestedOptions = [
  { label: "All Recommendation", value: "all" },
  {
    label: "PMKVY 4.0 (Pradhan Mantri Kaushal Vikas Yojana)",
    value: "pmkvy-pradhan-mantri-kaushal-vikas-yojana",
  },
  { label: "PM Vishwakarma Yojana", value: "pm-vishwakarma-yojana" },
  {
    label: "State Skill Development Missions (SSDM)",
    value: "state-skill-development-missions-ssdm",
  },
  {
    label: "National Apprenticeship Promotion Scheme (NAPS)",
    value: "national-apprenticeship",
  },
];
