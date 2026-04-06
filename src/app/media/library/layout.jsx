import LibraryLayout from "~/components/organisms/LibraryLayout";
import MainLayout from "~/components/templates/MainLayout";

const Libraryrootlayout = ({ children }) => {
  return (
    <MainLayout>
      <LibraryLayout>{children}</LibraryLayout>
    </MainLayout>
  );
};

export default Libraryrootlayout;
