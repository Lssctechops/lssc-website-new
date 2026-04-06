import Image from "next/image";

const JobDescription = () => {
  return (
    <section className="py-5">
      <Image
        className="mx-auto h-40 object-contain mb-3 "
        src="/home/talent-bank.svg"
        alt="talent_bank"
        width={400}
        height={400}
      />
      <p className="text-[18px] mb-8 mx-auto text-center font-normal w-[90%]">
        Enter the world of smarter hiring with Talent Bank. A curated pool of
        skilled, semi-skilled, and certified professionals is there to meet the
        workforce demands of the leather industry. Whether you're an employer
        seeking job-ready talent or a candidate looking for the right
        opportunity, our Talent Bank connects the right skills with the right
        role.
      </p>
    </section>
  );
};

export default JobDescription;
