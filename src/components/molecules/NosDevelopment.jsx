import StyledHeading from "../atoms/StyledHeading";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const NosDevelopment = () => {
  const skillData = [
    {
      title: "Structured Training Programs",
      points: [
        "Fee based training programs for workforce enhancement.",
        "Advanced skill training in leather processing, product design, and quality assurance.",
        "Customized programs for export-oriented manufacturing units.",
      ],
    },
    {
      title: "Collaboration and Partnerships",
      points: [
        "Partnered with 3,000+ leading leather manufacturers, footwear brands, and MSMEs to facilitate industry-relevant skill training.",
        "Ensured training programs stay aligned with technological advancements and market demands.",
      ],
    },
    {
      title: "Development of NOS & QP",
      points: [
        "Developed 18+ Qualification Packs (QP) for job roles across footwear, leather goods, garments, saddlery, and finished leather.",
        "Ensuring uniform training and assessment standards aligned with industry needs.",
      ],
    },
    {
      title: "Digital Learning Solutions",
      points: [
        "Launched digital platforms and e-learning modules to enhance accessibility and efficiency.",
        "Introduced VR/AR (Virtual Reality/Augmented Reality) training modules in the leather industry.",
      ],
    },
  ];

  return (
    <section className="mx-auto " id="skill-first-for-industry">
      <StyledHeading
        containerStyle="mx-auto mt-16"
        heading={
          <>
            <span className="text-primary-600">Skill</span> First For Industry
          </>
        }
      />
      <div className="grid lg:grid-cols-2 lg:w-[75%] mx-auto mt-10 gap-7">
        {skillData?.map((skill, i) => {
          const { title, points } = skill;
          return (
            <div className="bg-[#C7E9FF] space-y-2 rounded-lg p-3 shadow-lg">
              <h4 className="bg-[#073B4C] text-white px-6 mx-auto text-center w-fit rounded-lg">
                {title}
              </h4>
              <div className="space-y-2">
                {points?.map((point, index) => (
                  <p className="font-normal flex gap-3" key={index}>
                    <span className="shrink-0 pt-1.5">
                      <IoArrowForwardCircleOutline size={18} />
                    </span>
                    {point}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NosDevelopment;
