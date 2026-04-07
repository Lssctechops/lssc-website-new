import Success from "~/components/pages/Success";
import MainLayout from "~/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout>
      <Success
        title="You are successfully registered!"
        label="Back to home"
        route="/"
      />
    </MainLayout>
  );
};

export default page;
