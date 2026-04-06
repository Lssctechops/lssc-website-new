import moment from "moment";
import Image from "next/image";

const PostDetails = ({ post }) => {
  if (!post) return <div>Post not found.</div>;

  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        By {post.author?.name} ({post.author?.designation}) •{" "}
        {moment(post.createdAt).format("DD MMM YYYY")}
      </p>
      {post.thumbnail?.url && (
        <Image
          height={300}
          width={500}
          priority
          src={post.thumbnail.url}
          alt={post.thumbnail.alt || post.title}
          className="w-full h-auto mb-6 bg-gray-200"
        />
      )}
      <p className="text-lg font-medium mb-4 text-gray-700">
        {post.shortDescription}
      </p>
      <div
        id="lssc-blog-post-details-v1"
        className="prose prose-lg "
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
};

export default PostDetails;
