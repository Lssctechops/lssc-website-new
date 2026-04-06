"use client";

import Image from "next/image";
import BackButton from "../atoms/BackButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MediaPage = ({
  news,
  title = news === "blog-slug"
    ? "Understanding the social movements reshaping our world today"
    : "The global financial landscape and its implications for all",
  thumbnail = "/img/blog/1.svg",
  content = (
    <>
      <p>
        The Leather Sector Skill Council (LSSC) has been actively pushing for
        innovation and inclusivity in India’s leather industry. A key milestone
        is the launch of a Design cum Production Center at GIID, Tambaram, in
        partnership with AVT Leather. This facility is expected to boost
        creative capabilities and modern manufacturing practices in the sector,
        benefiting both students and professionals. In a major step toward
        inclusive skill development, LSSC, along with the Tamil Nadu
        Government’s Directorate for Welfare of the Differently Abled, has
        launched a ₹1.83 crore project to train 420 differently-abled
        individuals in leather and footwear skills. This initiative not only
        empowers marginalized communities but also helps meet the sector’s
        growing demand for skilled labor. LSSC is also embracing Industry 4.0
        technologies through its collaboration with IIT Madras. The newly
        launched SCALE Ind 4.0 platform and virtual reality training modules aim
        to modernize Indian leather factories, making them globally competitive.
        Additionally, new regional offices and skill development centers in
        states like Bihar are helping local youth access high-quality training
        and employment opportunities.
      </p>
      <p>
        The Leather Sector Skill Council (LSSC) has been actively pushing for
        innovation and inclusivity in India’s leather industry. A key milestone
        is the launch of a Design cum Production Center at GIID, Tambaram, in
        partnership with AVT Leather. This facility is expected to boost
        creative capabilities and modern manufacturing practices in the sector,
        benefiting both students and professionals. In a major step toward
        inclusive skill development, LSSC, along with the Tamil Nadu
        Government’s Directorate for Welfare of the Differently Abled, has
        launched a ₹1.83 crore project to train 420 differently-abled
        individuals in leather and footwear skills. This initiative not only
        empowers marginalized communities but also helps meet the sector’s
        growing demand for skilled labor. LSSC is also embracing Industry 4.0
        technologies through its collaboration with IIT Madras. The newly
        launched SCALE Ind 4.0 platform and virtual reality training modules aim
        to modernize Indian leather factories, making them globally competitive.
        Additionally, new regional offices and skill development centers in
        states like Bihar are helping local youth access high-quality training
        and employment opportunities.
      </p>
      <p>
        The Leather Sector Skill Council (LSSC) has been actively pushing for
        innovation and inclusivity in India’s leather industry. A key milestone
        is the launch of a Design cum Production Center at GIID, Tambaram, in
        partnership with AVT Leather. This facility is expected to boost
        creative capabilities and modern manufacturing practices in the sector,
        benefiting both students and professionals. In a major step toward
        inclusive skill development, LSSC, along with the Tamil Nadu
        Government’s Directorate for Welfare of the Differently Abled, has
        launched a ₹1.83 crore project to train 420 differently-abled
        individuals in leather and footwear skills. This initiative not only
        empowers marginalized communities but also helps meet the sector’s
        growing demand for skilled labor. LSSC is also embracing Industry 4.0
        technologies through its collaboration with IIT Madras. The newly
        launched SCALE Ind 4.0 platform and virtual reality training modules aim
        to modernize Indian leather factories, making them globally competitive.
        Additionally, new regional offices and skill development centers in
        states like Bihar are helping local youth access high-quality training
        and employment opportunities.The Leather Sector Skill Council (LSSC) has
        been actively pushing for innovation and inclusivity in India’s leather
        industry. A key milestone is the launch of a Design cum Production
        Center at GIID, Tambaram, in partnership with AVT Leather. This facility
        is expected to boost creative capabilities and modern manufacturing
        practices in the sector, benefiting both students and professionals. In
        a major step toward inclusive skill development, LSSC, along with the
        Tamil Nadu Government’s Directorate for Welfare of the Differently
        Abled, has launched a ₹1.83 crore project to train 420 differently-abled
        individuals in leather and footwear skills. This initiative not only
        empowers marginalized communities but also helps meet the sector’s
        growing demand for skilled labor. LSSC is also embracing Industry 4.0
        technologies through its collaboration with IIT Madras. The newly
        launched SCALE Ind 4.0 platform and virtual reality training modules aim
        to modernize Indian leather factories, making them globally competitive.
        Additionally, new regional offices and skill development centers in
        states like Bihar are helping local youth access high-quality training
        and employment opportunities.
      </p>
    </>
  ),
}) => {
  return (
    <>
      <main className="relative  py-5 lg:py-20 w-full px-5 md:w-[80%] lg:w-[70%] 2xl:w-[65%] mx-auto">
        <h2 className="mx-auto space-y-1 text-base md:text-lg lg:text-3xl font-semibold ">
          <BackButton />
          {title}
        </h2>
        <Image
          className="my-4 md:my-10 lg:h-96 w-full object-cover"
          src={thumbnail}
          alt="news-1"
          width={1000}
          height={1000}
        />

        {news === "matter-awaited" ? (
          <div className="w-full animate-pulse ">
            ~/MATTER AWAITED...
            <br />
            <br />
            ~/MATTER AWAITED...
            <br />
            <br />
            ~/MATTER AWAITED... <br />
            <br />
            ~/MATTER AWAITED... <br />
            <br />
            ~/MATTER AWAITED... <br />
            <br />
            ~/MATTER AWAITED... <br />
            <br />
            ~/MATTER AWAITED... <br />
            <br />
            ~/MATTER AWAITED... <br />
            <br />
            ~/MATTER AWAITED...
          </div>
        ) : (
          <article className="space-y-6">{content}</article>
        )}
      </main>
    </>
  );
};

export default MediaPage;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
  customPaging: (i) => (
    <div className="w-3 h-3 rounded-full bg-gray-400 transition-all duration-300 mt-4" />
  ),
};
