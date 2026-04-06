"use client";

import Image from "next/image";
import Link from "next/link";
import BackButton from "../atoms/BackButton";
import { useEffect, useState } from "react";
import axios from "axios";

const NewsLetter = () => {
  const [galleryList, setGalleryList] = useState([]);
  const [documentCount, setDocumentCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchGallery = async (filters) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/public/resourcePdf?category=News Letter`,
        {
          params: filters,
        }
      );

      const { data, count } = response.data;
      setGalleryList(data || []);
      setDocumentCount(count || 0);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);
  return (
    <main className="py-12 container">
      <BackButton />

      <section className="grid  mt-4 lg:grid-cols-3 gap-5">
        {isLoading && (
          <>
            <div className="w-full h-[300px] animate-pulse bg-gray-100" />
            <div className="w-full h-[300px] animate-pulse bg-gray-100" />
            <div className="w-full h-[300px] animate-pulse bg-gray-100" />
            <div className="w-full h-[300px] animate-pulse bg-gray-100" />
            <div className="w-full h-[300px] animate-pulse bg-gray-100" />
            <div className="w-full h-[300px] animate-pulse bg-gray-100" />
          </>
        )}
        {!isLoading &&
          galleryList?.map((item, i) => {
            const { _id, img, route, coverImage, pdfUrl = "#" } = item;
            return (
              <div
                key={_id}
                className="w-full flex justify-center items-center flex-col gap-5"
              >
                <Image
                  priority
                  quality={50}
                  src={coverImage}
                  alt="library"
                  width={300}
                  height={600}
                />
                <Link className="lg:w-[80%] w-full" href={pdfUrl}>
                  <button className="text-lg cursor-pointer w-full rounded-lg py-2 bg-gradient-to-t from-[#8C0902] to-[#420705] text-white">
                    View
                  </button>
                </Link>
              </div>
            );
          })}
      </section>
    </main>
  );
};

export default NewsLetter;

const media = [
  {
    route:
      "https://drive.google.com/file/d/1ONyShyUpWAu6R-yfB3e9bYHWgjZXnSik/view?usp=sharing",
    img: "111.png",
  },
  {
    route:
      "https://drive.google.com/file/d/1Uxq4gkxKFheNYZdaxy0AB7llSXdy7yOQ/view?usp=sharing",
    img: "211.png",
  },
  // {
  //   route:
  //     "https://leatherssc.org/wp-content/uploads/2019/08/LSSC-July-NL_Small-file.pdf",
  //   img: "3.png",
  // },
  // {
  //   route:
  //     "https://leatherssc.org/wp-content/uploads/2019/05/LSSC-Apr-2019-V7.pdf",
  //   img: "4.png",
  // },
  // {
  //   route:
  //     "https://leatherssc.org/wp-content/uploads/2019/07/LSSC-Newsletter_Jan2019_Final.pdf",
  //   img: "5.png",
  // },
  // {
  //   route:
  //     "https://leatherssc.org/wp-content/uploads/2018/11/LSSC-Oct-2018-V4.pdf",
  //   img: "6.png",
  // },
];
