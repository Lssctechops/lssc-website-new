import moment from "moment";
import Link from "next/link";

const EventNotics = ({ eventList }) => {
  // Blocks empty links and the old vercel.app test links
  const isValidLink = (link) =>
    link && link !== "#" && !link.includes("vercel.app");

  // Fixes titles that start with "EOI)" instead of "(EOI)"
  const cleanTitle = (title = "") =>
    title.trim().replace(/^EOI\)/i, "(EOI)");

  // Removes duplicate entries with the same title
  const uniqueList = (eventList || []).filter(
    (item, i, arr) =>
      arr.findIndex(
        (x) => cleanTitle(x.title) === cleanTitle(item.title)
      ) === i
  );

  return (
    <div className="w-full flex flex-col gap-2 h-fit">
      <div className="w-full text-[14px] font-bold text-white bg-primary-600 text-center py-4 px-5 rounded-[8px]">
        <h2>Events</h2>
      </div>
      <div className=" scroll-wrapper w-full flex flex-col gap-3 border border-gray-200 p-5 bg-primary-100 rounded-[11.4px] h-auto max-h-[280px]">
        {/* card  */}
        <div className="scroll-content">
          {uniqueList.map(({ title, _id, createdAt, hyperLink }) => {
            const row = (
              <div className="w-full border-b py-3 border-gray-300 grid grid-cols-4 gap-4">
                <div className="border text-center border-primary-600/50 py-2 p-2 md:px-10 flex-center h-fit rounded-xl flex flex-col text-[12px] md:text-[14.84px]">
                  {moment(createdAt).format("D MMM YYYY")}
                </div>

                <div className="w-full col-span-3">
                  <p className=" text-[12px] md:text-[14.84px]">
                    {cleanTitle(title)}
                  </p>
                </div>
              </div>
            );

            return isValidLink(hyperLink) ? (
              <Link
                key={_id}
                href={hyperLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {row}
              </Link>
            ) : (
              <div key={_id}>{row}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventNotics;

const events = [
  {
    date: "05 Apr",
    title: "Award Ceremony",
  },
  {
    date: "06 Apr",
    title: "Certificate Distribution",
  },
  {
    date: "04 Mar",
    title: "Felicitation Ceremony",
  },
  {
    date: "05 Apr",
    title: "Collaboration",
  },
];