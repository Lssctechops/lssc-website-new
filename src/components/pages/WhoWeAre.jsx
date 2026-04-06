import IndustryOverview from "../molecules/IndustryOverview";
import LeatherSector from "../molecules/LeatherSector";
import ChairmanMessage from "../molecules/ChairmanMessage";
import GoverningCouncil from "../molecules/GoverningCouncil";
import Team from "../molecules/Team";
import OurVision from "../molecules/OurVision";
import OurMission from "../molecules/OurMission";
import BackButton from "../atoms/BackButton";

const WhoWeAre = () => {
  return (
    <main className="container  py-10">
      <BackButton />
      <div className="space-y-10 lg:space-y-28">
        <IndustryOverview />
        <LeatherSector />
        <OurVision />
        <OurMission />
        <ChairmanMessage />
        <GoverningCouncil />
        <Team />
      </div>
    </main>
  );
};

export default WhoWeAre;
