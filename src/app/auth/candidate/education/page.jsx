import EducationalDetails from "~/components/pages/CandidateReg/EducationalDetails";
import MainLayout from "~/components/templates/MainLayout";

const page = async ({ searchParams }) => {
  const { reg } = await searchParams;
  return (
    <MainLayout>
      <EducationalDetails regId={reg} />
    </MainLayout>
  );
};

export default page;
