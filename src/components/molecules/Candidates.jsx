const Candidates = () => {
  return (
    <section id="candidate">
      <h2 className="mb-10 text-3xl font-semibold">CANDIDATE</h2>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 lg:gap-5">
        {/* <div
          className="flex h-64 items-end rounded-3xl p-4"
          style={{
            background: `url('/img/candidate/candidate_1.jpeg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <button className="w-full rounded-xl bg-black/30 py-2 text-xl font-semibold text-white backdrop-blur backdrop-brightness-75">
            Build Your Resume
          </button>
        </div> */}
        <div
          className="flex h-64 items-end rounded-3xl p-4"
          style={{
            background: `url('/img/candidate/candidate_2.png')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <button className="w-full rounded-xl bg-black/30 py-2 text-xl font-semibold text-white backdrop-blur backdrop-brightness-75">
            Government Schemes
          </button>
        </div>
        <div
          className="flex h-64 items-end rounded-3xl p-4"
          style={{
            background: `url('/img/candidate/candidate_3.png')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <button className="w-full rounded-xl bg-black/30 py-2 text-xl font-semibold text-white backdrop-blur backdrop-brightness-75">
            Courses for workers{" "}
          </button>
        </div>
        <div
          className="flex h-64 items-end rounded-3xl p-4"
          style={{
            background: `url('/img/candidate/candidate_4.jpeg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <button className="w-full rounded-xl bg-black/30 py-2 text-xl font-semibold text-white backdrop-blur backdrop-brightness-75">
            Courses for professionals{" "}
          </button>
        </div>
        <div
          className="flex h-64 items-end rounded-3xl p-4"
          style={{
            background: `url('/img/candidate/candidate_5.jpeg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <button className="w-full rounded-xl bg-black/30 py-2 text-xl font-semibold text-white backdrop-blur backdrop-brightness-75">
            Train the trainer{" "}
          </button>
        </div>
        <div
          className="flex h-64 items-end rounded-3xl p-4"
          style={{
            background: `url('/img/candidate/candidate_6.jpeg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <button className="w-full rounded-xl bg-black/30 py-2 text-xl font-semibold text-white backdrop-blur backdrop-brightness-75">
            Join our database{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Candidates;
