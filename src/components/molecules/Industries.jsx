import Image from "next/image";

const Industries = () => {
  return (
    <section id="industry" className="space-y-6">
      <h2 className="text-3xl font-semibold">INDUSTRY</h2>
      <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <div className="border-primary-600 space-y-6  rounded-2xl lg:rounded-4xl border">
          <Image
            className="h-52 rounded-t-4xl object-cover"
            src="/img/services/service_1.jpeg"
            alt="hiring"
            width={1200}
            height={600}
          />
          <div className="space-y-6 px-6">
            <h3 className="text-center text-xl font-semibold">
              Apprenticeship Hiring
            </h3>
            <p className="text-center font-normal">
              We bridge the gap between industry and academia through our strong
              network of training partners, ITIs, and private technical
              institutions. This allows businesses to tap into a ready pool of
              talented candidates from various training programs, who can be
              groomed as skilled apprentices.
            </p>
            <div className="flex-1 items-end justify-center h-full">
            <button className="bg-primary-600 mb-4 w-full rounded-xl px-6 py-3 text-white">
              See More
            </button>
            </div>
          </div>
        </div>

        <div className="border-primary-600 space-y-6  rounded-2xl lg:rounded-4xl border">
          <Image
            className="bg-primary-100 h-52 rounded-t-4xl object-cover"
            src="/img/services/service_2.png"
            alt="hiring"
            width={1200}
            height={600}
          />
          <div className="space-y-6 px-6">
            <h3 className="text-center text-xl font-semibold">MSDE Schemes </h3>
            <p className="text-center font-normal">
              Whether you are implementing training projects like PMKVY or
              Recognition of Prior Learning (RPL), we provide end-to-end
              support. From assessments to certification, we assist you at every
              stage to ensure smooth execution.
            </p>
            <button className="bg-primary-600 mb-4 w-full rounded-xl px-6 py-3 text-white">
              See More
            </button>
          </div>
        </div>

        <div className="border-primary-600 space-y-6  rounded-2xl lg:rounded-4xl border">
          <Image
            className="h-52 rounded-t-4xl object-cover"
            src="/img/services/service_3.jpeg"
            alt="hiring"
            width={1200}
            height={600}
          />
          <div className="space-y-6 px-6">
            <h3 className="text-center text-xl font-semibold">
              Trainers on Demand{" "}
            </h3>
            <p className="text-center font-normal">
              Need skilled trainers for specific job roles? Our pool of
              certified trainers is available at a nominal fee. Equipped with
              industry-relevant expertise and aligned with SSC-defined
              Qualification Packs, they ensure high-quality training tailored to
              your needs.
            </p>
            <button className="bg-primary-600 mb-4 w-full rounded-xl px-6 py-3 text-white">
              See More
            </button>
          </div>
        </div>
        <div className="border-primary-600 space-y-6  rounded-2xl lg:rounded-4xl border">
          <Image
            className="h-52 rounded-t-4xl object-cover"
            src="/img/services/service_4.jpeg"
            alt="hiring"
            width={1200}
            height={600}
          />
          <div className="space-y-6 px-6">
            <h3 className="text-center text-xl font-semibold">Skilling Hub </h3>
            <p className="text-center font-normal">
              We collaborate with organizations in setting up customized
              in-house training hubs that cater to your specific workforce
              needs. With our knowledge and expertise, we guide you through
              capacity building and provide hands-on support until the pilot
              phase is successfully completed.
            </p>
            <button className="bg-primary-600 mb-4 w-full rounded-xl px-6 py-3 text-white">
              See More
            </button>
          </div>
        </div>
        <div className="border-primary-600 space-y-6  rounded-2xl lg:rounded-4xl border">
          <Image
            className="h-52 rounded-t-4xl object-cover"
            src="/img/services/service_5.jpeg"
            alt="hiring"
            width={1200}
            height={600}
          />
          <div className="space-y-6 px-6">
            <h3 className="text-center text-xl font-semibold">
              Skilling Advisory Services{" "}
            </h3>
            <p className="text-center font-normal">
              We help businesses identify skill gaps, develop a robust skilling
              strategy, and execute workforce development plans. Our expert
              advisory services enable organizations to stay competitive by
              ensuring their workforce is equipped with the right skills for
              evolving industry demands.
            </p>
            <button className="bg-primary-600 mb-4 w-full rounded-xl px-6 py-3 text-white">
              See More
            </button>
          </div>
        </div>
        <div className="border-primary-600 space-y-6  rounded-2xl lg:rounded-4xl border">
          <Image
            className="h-52 rounded-t-4xl object-cover"
            src="/img/services/service_6.jpeg"
            alt="hiring"
            width={1200}
            height={600}
          />
          <div className="space-y-6 px-6">
            <h3 className="text-center text-xl font-semibold">
              Workforce Solutions{" "}
            </h3>
            <p className="text-center font-normal">
              LSSC helps meet your workforce needs by providing access to
              skilled and unskilled labour, as well as industry-ready
              professionals. Whether you require trained shop-floor workers or
              skilled specialists, we connect you with the right talent to
              strengthen your workforce.
            </p>
            <button className="bg-primary-600 mb-4 w-full rounded-xl px-6 py-3 text-white">
              See More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
