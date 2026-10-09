import moment from "moment";
import Link from "next/link";

const NoticeUpdates = ({ noticeList }) => {
  // const [events, setEvents] = useState([]);
  // async function getEvents() {
  //   try {
  //     const res = await axios({
  //       method: "GET",
  //       url: `${process.env.NEXT_PUBLIC_API_URL}/api/public/notice?type=notice&limit=100`,
  //     });
  //       return res?.data?.data;
  //     setEvents(res?.data?.data);
  //   } catch (error) {}
  // }

  // useEffect(() => {
  //   getEvents();
  //   return () => {};
  // }, []);

  // Blocks empty links and the old vercel.app test links
  const isValidLink = (link) =>
    link && link !== "#" && !link.includes("vercel.app");

  return (
    <div className="w-full flex flex-col gap-2 h-fit">
      <div className="w-full text-[14px] font-bold text-black bg-[#C3DB9A] text-center py-4 px-5 rounded-[8px]">
        <h2>Notices And Updates </h2>
      </div>
      <div className="scroll-wrapper w-full flex flex-col gap-3 border border-gray-200 p-5 bg-[#F6FAF0] rounded-[11.4px] h-auto max-h-[280px]">
        <div className="scroll-content">
          {(noticeList || []).map(({ title, _id, createdAt, hyperLink }) => {
            const row = (
              <div className="w-full border-y py-3 border-gray-300 grid grid-cols-4 gap-4">
                <div className="border text-center flex-center h-fit border-[#C3DB9A] py-2 p-2 md:px-10 rounded-xl flex flex-col text-[12px] md:text-[14.84px]">
                  {moment(createdAt).format("D MMM YYYY")}
                </div>
                <div className="w-full col-span-3">
                  <p className="text-[12px] md:text-[14.84px]">{title}</p>
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

export default NoticeUpdates;