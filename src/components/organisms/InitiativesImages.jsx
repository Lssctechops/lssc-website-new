"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const InitiativesImages = () => {
  const [galleryList, setGalleryList] = useState([]);
  const [documentCount, setDocumentCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchGallery = async (filters) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/public/gallery`,
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

  // Control when animation starts
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Wait 0.2 sec, then enable animation
    const timer = setTimeout(() => setStartAnimation(true), 200);
    return () => clearTimeout(timer);
  }, []);
  return (
    // <main className="py-5 lg:py-10">
    //   <section className="h-full w-full overflow-y-auto bg-white">
    //     <div className="container flex flex-col gap-5 lg:gap-5">
    //       <Link href="/who-we-are">
    //         <IoArrowBackCircleSharp size={40} />
    //       </Link>
    //       <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-5">
    //         {galleryList?.map(({ _id, image, alt }) => (
    //           <figure
    //             key={_id}
    //             className="border-primary-600 w-full h-fit border-4 hover:cursor-zoom-in"
    //           >
    //             <Link
    //               href={image || "#"}
    //               target="_blank"
    //               className="hover:cursor-zoom-in"
    //             >
    //               <Image
    //                 className="w-full h-auto bg-gray-200"
    //                 src={image}
    //                 alt={alt}
    //                 title={alt}
    //                 width={600}
    //                 height={600}
    //               />
    //             </Link>
    //           </figure>
    //         ))}
    //       </div>
    //     </div>
    //   </section>
    // </main>
    <main className="py-5 lg:py-10">
      <section className="h-full w-full overflow-y-auto bg-white">
        <div className="container flex flex-col gap-5 lg:gap-5">
          <Link href="/who-we-are">
            <IoArrowBackCircleSharp size={40} />
          </Link>

          <div className="relative w-full">
            <motion.div
              className="grid gap-4 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-5"
              layout
            >
              {galleryList?.map(({ _id, image, alt }, index) => (
                <motion.figure
                  key={_id}
                  layout
                  initial={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={
                    startAnimation
                      ? {
                          position: "relative",
                          opacity: 1,
                          scale: 1,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.8, 0.25, 1],
                  }}
                  className="border-primary-600 w-full h-fit border-4 hover:cursor-zoom-in"
                >
                  <Link
                    href={image || "#"}
                    target="_blank"
                    className="hover:cursor-zoom-in"
                  >
                    <Image
                      className="w-full h-auto bg-gray-200"
                      src={image}
                      alt={alt}
                      title={alt}
                      width={600}
                      height={600}
                    />
                  </Link>
                </motion.figure>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default InitiativesImages;
