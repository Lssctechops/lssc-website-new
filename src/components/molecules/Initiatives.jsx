import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import Link from "next/link";

const Initiatives = () => {
  return (
    <section id="international-collaboration" className="w-full">
      <StyledHeading
        heading={
          <>
            <span className="text-primary-600">Collaboration </span> Ready
          </>
        }
        containerStyle="mx-auto  mt-16"
      />

      <div className="lg:w-[60%] mx-auto mt-10 grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-5">
          <Image
            style={{
              boxShadow: "8px 8px 24px 0px #0000008C",
            }}
            className="h-56 rounded-xl border-2 border-[#770C0A]"
            src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/78bed8a4-f1ba-4ed5-1c91-aefb1f2e1800/public"
            alt="collab"
            width={500}
            height={300}
          />

          <div className="p-2 rounded-xl border bg-[#C7E9FF] border-[#770C0A]">
            <span className="text-primary"> MoU with AUSTRADE </span>(Australian
            Trade and Investment Commission, New Delhi) to strengthen
            international collaboration and adopt best practices from Australia.
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Image
            style={{
              boxShadow: "8px 8px 24px 0px #0000008C",
            }}
            className="h-56 rounded-xl border-2 border-[#770C0A]"
            src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/7cc9f240-4963-4868-9eb9-a89d722ba600/public"
            alt="collab"
            width={500}
            height={300}
          />

          <div className="p-2 rounded-xl border bg-[#C7E9FF] border-[#770C0A]">
            Conducted a Skill Gap Study for tanneries and leather goods
            manufacturers in Kolkata Leather Complex, in collaboration with{" "}
            <span className="text-primary">
              {" "}
              Solidaridad Network and Switch Asia.
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3 items-center ">
        <Link
          href="https://drive.google.com/file/d/1vOS_zRcY_ew668mgCYyj-pqc8PYNYPw2/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-2 py-1 bg-gradient-to-r from-[#8C0902] to-[#420705] text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300 text-lg font-semibold"
        >
          <FaEye className="text-xl" />
          View
        </Link>
      </div>

      <div className="mx-auto  mt-20 grid gap-14 text-sm lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col gap-5">
          <div className="bg-[#F5FBFF] border border-[#000000 ] rounded-xl p-2 lg:p-4 space-y-5">
            <h4 className="#073B4C font-semibold text-3xl">
              International Collaboration
            </h4>
            <p className="text-lg">
              At the Leather Sector Skill Council (LSSC), international
              collaboration is at the heart of our mission to elevate India’s
              leather and footwear workforce. By partnering with global
              institutions and industry leaders, we bring in cutting-edge
              technologies, international best practices, and world-class
              training standards—ensuring our skilling ecosystem remains aligned
              with evolving industry needs.
            </p>

            <div>
              <h5 className="#073B4C text-2xl font-semibold">
                Key Areas of Collaboration
              </h5>
              <p className="flex gap-2">
                <MdOutlineKeyboardDoubleArrowRight size={24} />
                <span className="font-normal text-lg">
                  Curriculum Development: Joint creation of training modules
                  aligned with global industry benchmarks.
                </span>
              </p>
              <p className="flex gap-2">
                <MdOutlineKeyboardDoubleArrowRight size={24} />
                <span className="font-normal text-lg">
                  Trainer and Assessor Exchange: International exposure and
                  capacity building for Indian trainers and assessors.
                </span>
              </p>
              <p className="flex gap-2">
                <MdOutlineKeyboardDoubleArrowRight size={24} />
                <span className="font-normal text-lg">
                  Technology Transfer: Adoption of cutting-edge techniques in
                  leather processing, footwear manufacturing, and design.
                </span>
              </p>
              <p className="flex gap-2">
                <MdOutlineKeyboardDoubleArrowRight size={24} />
                <span className="font-normal text-lg">
                  Certification Alignment: Harmonizing Indian skill
                  certifications with international frameworks.{" "}
                </span>
              </p>
              <p className="flex gap-2">
                <MdOutlineKeyboardDoubleArrowRight size={24} />
                <span className="font-normal text-lg">
                  Industry Exposure: Internships, study tours, and
                  knowledge-sharing programs with global companies.{" "}
                </span>
              </p>
            </div>
          </div>

          <div className="bg-[#F5FBFF] border border-[#000000 ] rounded-xl p-2 lg:p-4 space-y-5">
            <h4 className="#073B4C font-semibold text-3xl">
              Our National Partners{" "}
            </h4>
            <div>
              <p className="flex gap-2">
                <MdOutlineKeyboardDoubleArrowRight size={24} />
                <span className="font-normal text-lg">
                  Austrade (Australian Trade and Investment Commission)
                  Partnership focused on knowledge exchange, sustainable leather
                  practices, and vocational training excellence.
                </span>
              </p>
              <p className="flex gap-2">
                <MdOutlineKeyboardDoubleArrowRight size={24} />
                <span className="font-normal text-lg">
                  Solidaridad Network & Switch Asia (EU Funded Program)
                  Collaboration to address skill gaps in leather clusters,
                  promote responsible production, and build inclusive skilling
                  models.
                </span>
              </p>
              <p className="flex gap-2">
                <MdOutlineKeyboardDoubleArrowRight size={24} />
                <span className="font-normal text-lg">
                  Global Footwear and Leather Brands Engagement with
                  multinational brands for apprenticeships, mentorship programs,
                  and global market insights.
                </span>
              </p>
            </div>
          </div>

          <div className="bg-[#F5FBFF] border border-[#000000 ] rounded-xl p-2 lg:p-4 space-y-5">
            <h4 className="#073B4C font-semibold text-3xl">
              Why Collaborate with LSSC?
            </h4>
            <div>
              <p className="flex gap-2">
                <MdOutlineKeyboardDoubleArrowRight size={24} />
                <span className="font-normal text-lg">
                  Strong industry network across India's major leather clusters
                </span>
              </p>
              <p className="flex gap-2">
                <MdOutlineKeyboardDoubleArrowRight size={24} />
                <span className="font-normal text-lg">
                  Government recognition and affiliation with NSDC and MSDE
                </span>
              </p>
              <p className="flex gap-2">
                <MdOutlineKeyboardDoubleArrowRight size={24} />
                <span className="font-normal text-lg">
                  Proven success in training, assessment, and placement.{" "}
                </span>
              </p>
              <p className="flex gap-2">
                <MdOutlineKeyboardDoubleArrowRight size={24} />
                <span className="font-normal text-lg">
                  Agile skilling models tailored for global adaptability{" "}
                </span>
              </p>
              <p className="flex gap-2">
                <MdOutlineKeyboardDoubleArrowRight size={24} />
                <span className="font-normal text-lg">
                  Focus on sustainability, circular economy, and inclusive
                  growth
                </span>
              </p>
            </div>
          </div>

          <div className="bg-[#F5FBFF] border border-[#000000 ] rounded-xl p-2 lg:p-4 space-y-5">
            <h4 className="#073B4C font-semibold text-3xl">Partner with us</h4>

            <p className="text-lg">
              LSSC is actively seeking collaborations with international
              vocational institutes, trade bodies, and leather councils to
              co-create scalable, high-impact skilling programs for the global
              leather industry.
            </p>

            <p className="text-lg">
              Get in Touch:{" "}
              <span className="text-[#0000FF]"> ed@leatherssc.org</span>
            </p>
          </div>
        </div>

        <div className="flex col-span-1 flex-col gap-10">
          <div
            className="flex h-[380px] items-end rounded-xl p-3 text-white"
            style={{
              background: "url('/img/banner/banner13.jpeg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              boxShadow: "2px 4px 8px 0px #FF950052",
              backdropFilter: "blur(60px)",
            }}
          >
            <p className="rounded-xl border-2 border-gray-200/30 bg-black/30 p-2 backdrop-blur backdrop-brightness-90">
              Landmark Initiatives to Strengthen and Upskill Women in Leather
              Industry Launched in Kanpur Cluster
            </p>
          </div>
          <div
            className="flex h-[380px] items-end rounded-xl p-3 text-white"
            style={{
              background: "url('/img/banner/banner14.jpeg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              boxShadow: "2px 4px 8px 0px #FF950052",
              backdropFilter: "blur(60px)",
            }}
          >
            <p className="rounded-xl border-2 border-gray-200/30 bg-black/30 p-2 backdrop-blur backdrop-brightness-90">
              The MoU is set to benefit numerous home-based women workers by
              providing them with specialized training and resources.
            </p>
          </div>
          <div
            className="flex h-[380px] items-end rounded-xl p-3 text-white"
            style={{
              background:
                "url('https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/f2edc8e9-6b67-4547-35d4-ee27caf25b00/public')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              boxShadow: "2px 4px 8px 0px #FF950052",
              backdropFilter: "blur(60px)",
            }}
          >
            <p className="rounded-xl border-2 border-gray-200/30 bg-black/30 p-2 backdrop-blur backdrop-brightness-90">
              Actively participated in India Skills 2024, winning five medals in
              Leather Shoe Making and Leather Garment Making competitions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
