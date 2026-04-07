import IndustrySkill from "../molecules/IndustrySkill";
import GovernmentSchemes from "../molecules/GovernmentSchemes";
import SkillInfrastructure from "../molecules/SkillInfrastructure";
import InternationCollaboration from "../molecules/InternationCollaboration";
import BackButton from "../atoms/BackButton";

const ShapingSkill = () => {
  return (
    <main className=" container  py-10">
      <BackButton />
      <div className="space-y-10 lg:space-y-28">
        <IndustrySkill />
        <GovernmentSchemes />
        <SkillInfrastructure />
        <InternationCollaboration />
      </div>
    </main>
  );
};

export default ShapingSkill;
