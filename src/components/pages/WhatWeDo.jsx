import React from "react";
import KeyAchievements from "../molecules/KeyAchievements";
import WhatWeDoDescription from "../molecules/WhatWeDoDescription";
import NosDevelopment from "../molecules/NosDevelopment";
import Impact from "../molecules/Impact";
import LeatherClusterSkill from "../molecules/LeatherClusterSkill";
import Initiatives from "../molecules/Initiatives";
import FutureRoadmap from "../molecules/FutureRoadmap";
import GovScheme from "../molecules/GovScheme";
import OurServices from "../molecules/OurServices";
import SkillYourself from "../molecules/SkillYourself";

const WhatWeDo = () => {
  return (
    <main>
      <WhatWeDoDescription />
      <div className="md:container mx-auto space-y-28">
        <SkillYourself isHeadingTwo={true} />
        <OurServices />
        <KeyAchievements />
        <div className="px-5 md:px-0">
          <GovScheme />
          <NosDevelopment />
          <LeatherClusterSkill />
          <Initiatives />
        </div>

        <FutureRoadmap />
      </div>
    </main>
  );
};

export default WhatWeDo;
