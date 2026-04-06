import BackButton from "../atoms/BackButton";

const WhatWeDoDescription = () => {
  return (
    <section className="from-primary-200 flex items-start mb-10 bg-gradient-to-b to-white p-5 md:p-10">
      <BackButton />
      <p className="mx-auto w-full text-center text-lg md:text-2xl font-semibold text-gray-600 lg:w-[70%]">
        The Leather Sector Skill Council operates under the aegis of the
        National Skill Development Corporation (NSDC) and the Ministry of Skill
        Development & Entrepreneurship (MSDE). The Leather Sector Skill Council
        (LSSC) has been working tirelessly to bridge skill gaps in the sector
        and support workforce development through structured training programs,
        industry collaboration, and policy advocacy. LSSC also plays a crucial
        role in assisting the industry with the adoption of Industry 4.0 and the
        transition towards smart factories.
      </p>
    </section>
  );
};

export default WhatWeDoDescription;
