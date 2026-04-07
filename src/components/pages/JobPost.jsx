import JobDescription from "../molecules/JobDescription";
import CandidateForm from "../molecules/CandidateForm";
import LetterOfInterest from "../molecules/LetterOfInterest";
import Sample from "../molecules/Sample";
import BackButton from "../atoms/BackButton";

const JobPost = () => {
  return (
    <main className="container py-10">
      <BackButton />
      <JobDescription />
      <CandidateForm />
      <Sample />
      {/* <LetterOfInterest /> */}
    </main>
  );
};

export default JobPost;
