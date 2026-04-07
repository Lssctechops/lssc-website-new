"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LibraryLayout = ({ children }) => {
  const path = usePathname();

  return (
    <>
      <div className="bg-[#0070BA] overflow-x-auto">
        <ul className="flex lg:justify-center gap-2 py-2">
          {libraryNav?.map((lib, i) => {
            const active = path === lib.route;
            return (
              <Link
                className={` font-normal  text-nowrap  px-4 py-1 rounded-md ${
                  active ? "bg-[#C3DB9A]" : "bg-white"
                }`}
                key={i}
                href={lib.route}
              >
                <li> {lib.label}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      {children}
    </>
  );
};

export default LibraryLayout;

const libraryNav = [
  {
    label: "News Letter",
    route: "/media/library/news-letter",
  },
  {
    label: "Branding and Collateral",
    route: "/media/library/branding-collateral",
  },
  {
    label: "Training of Trainers",
    route: "/media/library/training-trainers",
  },
  {
    label: "QP ",
    route: "/media/library/qp",
  },
  {
    label: "Books",
    route: "/media/library/books",
  },
  {
    label: "Model Curriculum",
    route: "/media/library/model-curriculum",
  },
  {
    label: "Model Question Papers ",
    route: "/media/library/question-paper",
  },
  {
    label: "Study Report  ",
    route: "/media/library/study-report",
  },
  {
    label: "Skill Survey  ",
    route: "/media/library/skill-survey",
  },
  {
    label: "Candidate  ",
    route: "/media/library/candidate",
  },
];
