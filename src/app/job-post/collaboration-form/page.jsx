import CollaborationForm from "~/components/pages/CollaborationForm";
import MainLayout from "~/components/templates/MainLayout";

const page = async ({ searchParams }) => {
  const { industry } = await searchParams;
  return (
    <MainLayout>
      <CollaborationForm industryId={industry} />
    </MainLayout>
  );
};

export default page;
