import BookDetail from "~/components/pages/BookDetail";

const page = async ({ params }) => {
  const { book } = await params;
  return <BookDetail book={book} />;
};

export default page;
