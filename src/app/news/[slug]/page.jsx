import axios from "axios";
import { redirect } from "next/navigation";
import PostDetails from "~/components/pages/SinglePostPage";
import MainLayout from "~/components/templates/MainLayout";

// SEO Meta generator
export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const postData = await getPost(slug);

  const post = postData?.[0]; // since API returns array
  if (!post) return { title: "Post not found" };

  return {
    title: post?.seo?.metaTitle || post?.title,
    description: post?.seo?.metaDescription || post?.shortDescription,
    keywords: post?.seo?.metaKeywords || [],
    openGraph: {
      title: post?.seo?.metaTitle || post?.title,
      description: post?.seo?.metaDescription || post?.shortDescription,
      images: [
        {
          url: post?.thumbnail?.url,
          alt: post?.title,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
};

const SinglePostPage = async ({ params }) => {
  const postData = await getPost(params.slug);

  if (!postData || postData.length === 0) redirect("/story");

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <PostDetails post={postData[0]} />
      </div>
    </MainLayout>
  );
};

export default SinglePostPage;

// Fetch Post
async function getPost(slug) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/public/blog?slug=${slug}`
    );
    return res?.data?.data || [];
  } catch (err) {
    return [];
  }
}
