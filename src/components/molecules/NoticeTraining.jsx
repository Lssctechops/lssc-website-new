import React from "react";
import NoticeUpdates from "./Notice/Notice";
import EventNotics from "./Notice/Event";

const NoticeTraining = ({ noticeList, eventList }) => {
  return (
    <section className="lg:w-[85%] mx-auto py-12">
      <div className="container grid w-full lg:grid-cols-2 gap-5">
        {/* 1  */}
        <NoticeUpdates noticeList={noticeList || []} />

        {/* 2  */}

        <EventNotics eventList={eventList || []} />
      </div>
    </section>
  );
};

export default NoticeTraining;
