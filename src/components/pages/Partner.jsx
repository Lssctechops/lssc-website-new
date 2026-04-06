import Partnerships from "../molecules/Partnerships";
import IndustryAssociates from "../molecules/IndustryAssociates";
import TrainingInstitutes from "../molecules/TrainingInstitutes";
import AssessmenCompanies from "../molecules/AssessmenCompanies";
import KnowledgePartners from "../molecules/KnowledgePartners";
import MediaPartners from "../molecules/MediaPartners";
import BrandPartners from "../molecules/BrandPartners";
import CLE from "../molecules/CLE";
import BackButton from "../atoms/BackButton";

const Partner = () => {
  return (
    <main className="container  py-10 ">
      <BackButton />
      <div className="space-y-10 lg:space-y-28">
        <Partnerships />
        <IndustryAssociates />
        <CLE />
        <TrainingInstitutes />
        <AssessmenCompanies />
        <KnowledgePartners />
        <MediaPartners />
        <BrandPartners />
      </div>
    </main>
  );
};

export default Partner;
