import Register from "~/components/pages/CandidateReg/Register";
import MainLayout from "~/components/templates/MainLayout";

const page = async ({ searchParams }) => {
  const { course } = await searchParams;

  return (
    <MainLayout>
      <Register courseId={course} />
    </MainLayout>
  );
};

export default page;
