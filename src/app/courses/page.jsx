import Courses from "~/components/pages/Curses";
import MainLayout from "~/components/templates/MainLayout";

const page = async ({ searchParams }) => {
  const { category, duration, segment, scheme } = await searchParams;
  return (
    <MainLayout>
      <Courses
        selectedCategory={category?.split(",").filter(Boolean) || []}
        selectedDuration={duration?.split(",").filter(Boolean) || []}
        selectedSegment={segment?.split(",").filter(Boolean) || []}
        scheme={scheme || "all"}
      />
    </MainLayout>
  );
};

export default page;
