"use client";

import Link from "next/link";
import BackButton from "../atoms/BackButton";
import { useEffect, useState } from "react";
import axios from "axios";

const Books = () => {
  const [galleryList, setGalleryList] = useState([]);
  const [documentCount, setDocumentCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchGallery = async (filters) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/public/resourcePdf?category=Books&limit=200`,
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
      <section className="grid   lg:grid-cols-3 gap-10 xl:gap-20">
        {galleryList?.map((item, i) => {
          const { _id, img, title, route, coverImage, pdfUrl = "#" } = item;

          return (
            <div
              key={i}
              className="flex justify-center items-center flex-col gap-5"
            >
              <h3 className="text-center text-xl font-semibold">{title}</h3>
              {/* <img
                src={coverImage}
                alt="library"
                width={300}
                height={600}
                className="w-full"
              /> */}
              <Link className="lg:w-[80%] w-full" href={pdfUrl || "#"}>
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

export default Books;

const media = [
  {
    route:
      "https://drive.google.com/file/d/1gy1G-CcJ2tlEOsz6ivb6-HoDozgSD2re/view?usp=sharing",
    img: "#",
    title: "Cobbler [English PHB]",
  },
  {
    route:
      "https://drive.google.com/file/d/13Ou1uZaPyXjP_9LCdcofNRg2-E9GjXYf/view?usp=sharing",
    img: "#",
    title: "Cutter (Footwear) [English PHB]",
  },
  {
    route:
      "https://drive.google.com/file/d/1_gMi1nfMOLV8zum-uuP1lNInOTvk3PlE/view?usp=sharing",
    img: "#",
    title: "Cutter (G&G) [English PHB]",
  },
  {
    route:
      "https://drive.google.com/file/d/1BFONX2VJgHh2ZBMnIbSzx8bnU9giL4Q2/view?usp=sharing",
    img: "#",
    title: "Pre-Assembly Operator (Footwear)  [English PHB]",
  },
  {
    route:
      "https://drive.google.com/file/d/1QRUoZtk_Gie-Kj8cSrveyPFLOS8CjrfE/view?usp=sharing",
    img: "#",
    title: "Stitcher (G&G)  [English PHB]",
  },
  {
    route:
      "https://drive.google.com/file/d/1i68FlNynERPjrarht4ChVl6dUpoyMydI/view?usp=sharing",
    img: "#",
    title: "Stitching Operator (Footwear) [English PHB]",
  },

  {
    route:
      "https://drive.google.com/file/d/1pMQLzzQ7g98_b3ersIAfmgqKioRn3rQV/view?usp=sharing",
    img: "#",
    title: "Cobbler V-16 [Hindi PHB]",
  },
  {
    route:
      "https://drive.google.com/file/d/1G0Cos_seSLodqHkjEp7HtNvYkdD5Rae_/view?usp=sharing",
    img: "#",
    title: "Cutter (G&G) [Hindi PHB]",
  },
  {
    route:
      "https://drive.google.com/file/d/1YB2ZAVk671ceXx190ZLotwsKoh1gRBiL/view?usp=sharing",
    img: "#",
    title: "Cutter Footwear [Hindi PHB]",
  },
  {
    route:
      "https://drive.google.com/file/d/1QrEffpVwBRoBqd2YsB9zx7jmfbZIcDRe/view?usp=sharing",
    img: "#",
    title: "Pre-Assembly Operator [Hindi PHB]",
  },
  {
    route:
      "https://drive.google.com/file/d/138ul9CPR0jbtNZVTW_Q3ztfB5EHl1WMa/view?usp=sharing",
    img: "#",
    title: "Sticher [Hindi PHB]",
  },
  {
    route:
      "https://drive.google.com/file/d/1GvCDB7tez7B7H3DdnZyVi3k0OZ9on3TQ/view?usp=sharing",
    img: "#",
    title: "Stitching Footwear [Hindi PHB]",
  },

  {
    route:
      "https://drive.google.com/file/d/1uAZkQ1YYHqXa87dtRVKuP-ngSxhIWaFB/view?usp=sharing",
    img: "#",
    title: "Cobbler V-16 [Tamil PHB]",
  },
  {
    route:
      "https://drive.google.com/file/d/1tD0Mez4m3yz6FkcOek0WNbwkN9SHt23O/view?usp=sharing",
    img: "#",
    title: "Cutter (G&G) [Tamil PHB]",
  },
  {
    route:
      "https://drive.google.com/file/d/1P4gXench_o9C7I5WaRwmXvNf_rTdwiMo/view?usp=sharing",
    img: "#",
    title: "Cutter Footwear [Tamil PHB]",
  },
  {
    route:
      "https://drive.google.com/file/d/1Nhj7ol5Zyvk8zCOoMMRns7IoqGbYXAVe/view?usp=sharing",
    img: "#",
    title: "Pre-Assembly Operator [Tamil PHB]",
  },
  {
    route:
      "https://drive.google.com/file/d/1dsUxxot59Vxnh3zr-urX1RwMFosfcpPH/view?usp=sharing",
    img: "#",
    title: "Sticher [Tamil PHB]",
  },
  {
    route:
      "https://drive.google.com/file/d/1V7j4pOUP8jPkzxsBC0J3x5u-J0dksRu3/view?usp=sharing",
    img: "#",
    title: "Stitching Footwear [Tamil PHB]",
  },
];
