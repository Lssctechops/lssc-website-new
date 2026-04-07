import moment from "moment";
import Link from "next/link";

const EventNotics = ({ eventList }) => {
  return (
    <div className="w-full flex flex-col gap-2 h-fit">
      <div className="w-full text-[14px] font-bold text-white bg-primary-600 text-center py-4 px-5 rounded-[8px]">
        <h2>Events</h2>
      </div>
      <div className=" scroll-wrapper w-full flex flex-col gap-3 border border-gray-200 p-5 bg-primary-100 rounded-[11.4px] h-auto max-h-[280px]">
        {/* card  */}
        <div className="scroll-content">
          {eventList.map(({ title, _id, createdAt, hyperLink }, index) => (
            <Link key={_id} target="_blank" href={hyperLink || "#"}>
              <div className="w-full border-b py-3 border-gray-300 grid grid-cols-4 gap-4">
                <div className="border text-center border-primary-600/50 py-2 p-2 md:px-10 flex-center h-fit rounded-xl flex flex-col text-[12px] md:text-[14.84px]">
                  {moment(createdAt).format("D MMM")}
                </div>

                <div className="w-full col-span-3">
                  <p className=" text-[12px] md:text-[14.84px]">{title}</p>
                </div>
              </div>
            </Link>
          ))}
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
