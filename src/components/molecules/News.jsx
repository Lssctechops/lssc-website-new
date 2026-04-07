import React from "react";

const News = () => {
  return (
    <section className="w-full">
      <div className="container flex flex-col gap-5">
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-col">
            <h3 className="text-[25px] md:text-[30px] lg:text-[38px] font-bold">
              Candidate
            </h3>

            <p>
              We regularly connect with our stakeholder by sharing news and
              holding occasional events to celebrate our success
            </p>
          </div>

          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export default News;
