import Industries from "../molecules/Industries";
import Candidates from "../molecules/Candidates";
import BackButton from "../atoms/BackButton";

const OurServices = () => {
  return (
    <main className="container  py-10 ">
      <BackButton />
      <div className="space-y-10 lg:space-y-28">
        <Industries />
        <Candidates />
      </div>
    </main>
  );
};

export default OurServices;
