"use client";

import Image from "next/image";
import Link from "next/link";

import { useBlog } from "~/hooks/useBlog";
import { limitTextLength } from "~/utils/limitText";

const MediaEvents = () => {
  const { blogList, documentCount, isLoading, error, refetch } = useBlog({
    limit: 10,
    type: "blog",
  });
  return (
    <section id="blog" className="space-y-6">
      <h2 className="text-3xl font-semibold">BLOG</h2>
      <div className="grid gap-6 lg:grid-cols-3">
        {blogList.map(({ _id, thumbnail, title, slug }, index) => (
          <Link key={_id} href={`/blog/${slug}`} className="space-y-2">
            <Image
              className="h-56 w-full object-cover rounded-sm"
              src={thumbnail?.url}
              alt="news-1"
              width={300}
              height={300}
            />
            <h4 className="text-lg font-semibold">
              {limitTextLength(title, 80)}
            </h4>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MediaEvents;
