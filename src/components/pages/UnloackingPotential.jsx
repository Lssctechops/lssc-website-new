import React from "react";
import StyledHeading from "../atoms/StyledHeading";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import BackButton from "../atoms/BackButton";

const UnloackingPotential = () => {
  return (
    <main className=" container py-10">
      <BackButton />
      <div className="space-y-10">
        <section className=" w-full">
          <StyledHeading
            heading={
              <>
                <span className="text-primary-600">Unlocking</span> Potential
              </>
            }
            containerStyle="mx-auto"
          />
          <div className="grid lg:grid-cols-2 mt-10 gap-8">
            <div className="space-y-6">
              <h3 className="text-[#073B4C] font-bold text-3xl">
                LSSC’s Journey Towards Inclusive Skilling
              </h3>
              <p className="italic">
                Leather Sector Skill Council (LSSC) is empowering Persons with
                Disabilities (PwDs) through inclusive skill development,
                accessible training, and meaningful employment in India's
                leather and footwear industry
              </p>
              <p className="font-normal">
                The leather and footwear industry in India employs nearly 4.5
                million people, and the industry is recognized for nurturing
                craftsmanship and is valued for its export potential. As the
                sector evolves, there is a growing realization that only a truly
                inclusive workforce can bring about real progress. This includes
                women and persons with disabilities (PwD) – the class that has
                been kept out of the fold for various societal and economic
                reasons.
                <br /> The Leather Sector Skill Council (LSSC) has taken
                meaningful steps to include persons with disabilities in the
                leather and footwear industry workforce through targeted skill
                development and employment support.{" "}
              </p>

              <h3 className="text-[#073B4C] font-bold text-3xl">
                Why A Diverse Workforce Matters{" "}
              </h3>
              <p className="font-normal">
                Being a part of the workforce not just opens up new
                opportunities, but is also about living a life with dignity and
                independence. For the PwDs, workplace inclusion can be
                transformative. Considering that almost 2 percent of the
                country’s population is challenged by some or other kind of
                disability, inclusion is not just a social obligation but a
                potential driver of economic growth.{" "}
                <Link
                  href="https://docs.google.com/document/d/1eUy2mQr6fAGtTCQ0ekhHSqRSkUKCCVQh/edit"
                  className="text-[#0000FF] underline"
                >
                  Read Blog
                </Link>
              </p>
            </div>
            <div className="space-y-6">
              <Image
                className="lg:w-[85%] mx-auto"
                src={"/img/courses/5.svg"}
                alt="image"
                width={1200}
                height={600}
              />
              <Image
                className="lg:w-[85%] mx-auto"
                src={"/img/courses/6.svg"}
                alt="image"
                width={1200}
                height={600}
              />
              <p className="font-normal">
                The Welfare of Differently Abled Persons department under the
                Tamil Nadu RIGHTS project has established a design studio at the
                Government Institute for Intellectual Disability (GIID),
                Tambaram. The initiative is aimed at offering training to
                intellectually disabled persons in leather goods production in
                order to make them independent.
              </p>
            </div>
          </div>
        </section>
        <section className="">
          <Image
            className="mx-auto"
            src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/e849bbf8-ad3f-40ee-5da3-aa14e858ce00/public"
            alt="laptop"
            width={1200}
            height={600}
          />
        </section>
        <section className=" ">
          <StyledHeading
            heading={
              <>
                <span className="text-primary-600">A Change</span> Waiting To
                Happen
              </>
            }
            containerStyle="mx-auto"
          />
          <div className="grid lg:grid-cols-2 mt-10 gap-10">
            <div className="space-y-6">
              <h3 className="text-[#073B4C] font-bold text-3xl">
                Let’s not wait to catch up. Let’s lead with purpose{" "}
              </h3>
              <p className="italic">
                Global competitors are leveraging women to boost productivity
                and scale. India’s leather and footwear sector must stop
                ignoring its biggest untapped workforce
              </p>
              <p className="font-normal">
                The{" "}
                <span className="font-semibold">
                  {" "}
                  Leather Sector Skill Council
                </span>{" "}
                is committed to making women an integral part of India’s
                manufacturing story. The Council is working closely with
                manufacturers and exporters to increase the participation of
                women in the workforce. LSSC is rolling out skilling and
                upskilling courses for women for making them a force that
                propels Indian leather and footwear sector
              </p>

              <h3 className="text-[#073B4C] font-bold text-3xl">
                LSSC and Industry leaders are enabling this shift{" "}
              </h3>
              <div className=" flex gap-2">
                <MdOutlineKeyboardDoubleArrowRight
                  className="shrink-0"
                  size={24}
                />
                <p className="font-normal">
                  {" "}
                  <span className="font-semibold">
                    Skilling programs tailored for women:
                  </span>
                  Targeted training in soft skills, machine operation, safety,
                  and productivity can help women overcome hesitation and build
                  confidence. LSSC is committed to expanding access to such
                  programs.
                </p>
              </div>
              <div className="flex gap-2">
                <MdOutlineKeyboardDoubleArrowRight
                  className="shrink-0"
                  size={24}
                />
                <p className="font-normal">
                  <span className="font-semibold">
                    Factory-level sensitisation:
                  </span>{" "}
                  Training for male colleagues and supervisors to ensure a
                  respectful and supportive environment. At the factory level we
                  have to imagine a greater role play for women and pay parity
                  to encourage them to join the industry. Better amenities like
                  wash rooms, rest room, crèches and flexible work hours can
                  make whole lot of difference.
                </p>
              </div>
              <div className="flex gap-2">
                <MdOutlineKeyboardDoubleArrowRight
                  className="shrink-0"
                  size={24}
                />
                <p className="font-normal">
                  <span className="font-semibold">
                    {" "}
                    Partnerships with MSMEs:
                  </span>{" "}
                  Many smaller units are eager to scale but need help with
                  workforce strategy. LSSC along with its partners is helping
                  them bridge that gap where availability of trained women
                  workforce is not an issue.
                </p>
              </div>
              <div className="flex gap-2">
                <MdOutlineKeyboardDoubleArrowRight
                  className="shrink-0"
                  size={24}
                />
                <p className="font-normal">
                  <span className="font-semibold"> Policy Advocacy:</span> There
                  should be incentives for factories that achieve gender
                  diversity on the floor.  This would create an enabling
                  environment for manufacturers to make the necessary changes
                  for welcoming more women to the workforce. LSSC supports
                  advocacy for such policies to create an enabling ecosystem for
                  employers.{" "}
                  <Link
                    href="https://docs.google.com/document/d/1tphEQ5wdjwiH-CDc5YfWkmBj2gSzd7bS/edit"
                    className="text-[#0000FF] underline"
                  >
                    Read Blog
                  </Link>
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Image
                className="lg:w-[85%] mx-auto"
                src={"/img/courses/7.svg"}
                alt="image"
                width={1200}
                height={600}
              />
              <Image
                className="lg:w-[85%] mx-auto"
                src={"/img/courses/8.svg"}
                alt="image"
                width={1200}
                height={600}
              />
              <Image
                className="lg:w-[85%] mx-auto"
                src={"/img/courses/9.svg"}
                alt="image"
                width={1200}
                height={600}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default UnloackingPotential;
