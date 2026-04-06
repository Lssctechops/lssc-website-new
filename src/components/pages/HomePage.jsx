import HeroSlider from "../organisms/HeroSlider";
import Partners from "../molecules/Partners";
import MinisterQuoteSection from "../molecules/MinisterQuoteSection";
import NoticeTraining from "../molecules/NoticeTraining";
import BridingSkill from "../molecules/BridingSkill";
import KeyAchievements from "../molecules/KeyAchievements";
import ShapingSkills from "../molecules/ShapingSkills";
import SkillYourself from "../molecules/SkillYourself";
import CTA1 from "../molecules/CTA1";
import OurServices from "../molecules/OurServices";
import PartnersSlide from "../molecules/PartnersSlide";
import NewsEvents from "../molecules/NewsEvents";
import Impact from "../molecules/Impact";

const HomePage = ({ heroBanners, noticeList, eventList }) => {
  return (
    <main className="w-full">
      <HeroSlider
        heroBanners={heroBanners}
        eventList={eventList}
        noticeList={noticeList}
      />
      <Partners />
      <MinisterQuoteSection />
      <NoticeTraining noticeList={noticeList} eventList={eventList} />
      <BridingSkill />
      <KeyAchievements
        heading={
          <>
            <span className="text-primary-600">Tracing</span> our footsteps
          </>
        }
      />
      <ShapingSkills />
      <Impact />
      <SkillYourself />
      <div className="w-full py-10 hidden lg:block ">
        <CTA1 />
      </div>
      <OurServices />
      <PartnersSlide />
      <NewsEvents />
    </main>
  );
};

export default HomePage;
