import React from "react";
import BackButton from "~/components/atoms/BackButton";
import MainLayout from "~/components/templates/MainLayout";

const BlogPage = () => {
  return (
    <MainLayout>
      <article className="py-10 px-5 lg:p-10">
        <BackButton />
        <section class="max-w-5xl mx-auto">
          <h1 class="text-2xl md:text-5xl font-extrabold leading-tight mb-6">
            Women Are The Workforce Multiplier India&apos;s Factories Need
          </h1>

          <div class="mb-4">
            <img
              src="/blog/thumbnail-placeholder.png"
              alt="Women working in footwear factory"
              class="w-full h-auto object-cover "
            />
          </div>

          {/* <!-- Meta Description --> */}
          <p class="italic text-sm text-gray-700 mb-4">
            Meta description: Global competitors are leveraging women to boost
            productivity and scale. India&apos;s leather and footwear sector
            must stop ignoring its biggest untapped workforce
          </p>

          {/* <!-- Blog Body --> */}
          <h2 class="text-2xl md:text-3xl font-bold mb-3">
            India&apos;s Manufacturing Edge Is Being Wasted
          </h2>
          <p class="text-base leading-relaxed text-gray-800">
            Our team recently came across a thought-provoking LinkedIn post. An
            Indian businessman shared his experience of visiting a prospective
            investee&apos;s manufacturing unit in China. What he saw left a deep
            impression on him.
          </p>
        </section>

        <div className=" max-w-5xl mx-auto text-gray-800">
          <p>
            He observed a single man operating a fully automated production line
            for 12 hours straight. <strong>One man. One line.</strong>
          </p>

          <p>
            When he questioned the promoter about the higher margins at their
            Chinese facility, the explanation pointed to two decisive factors:
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>300 basis points advantage in material costs</li>
            <li>80 basis points edge due to labour efficiency</li>
          </ul>

          <p>
            This raised a natural question:{" "}
            <strong>
              How does a country with higher labour costs offer a labour
              advantage?
            </strong>
          </p>

          <p>The promoter&apos;s answer was simple—and telling:</p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
            “Chinese women are four times more efficient than our male workers.
            Each woman handles three to four lines, while here, one man handles
            one. They don’t leave until the work is done. No unions, no
            absenteeism. They take pride in contributing to a $19 trillion
            economy.”
          </blockquote>

          <p>
            This insight highlights not just the discipline and dedication of
            Chinese women workers in the apparel and footwear industries—but
            also the huge opportunity that India is yet to seize.
          </p>

          <div className="my-4">
            <h2 className="text-2xl font-bold">
              The case for women in India&apos;s manufacturing workforce
            </h2>

            <p>
              India&apos;s leather and footwear industry is highly
              labour-intensive, employing around 4 million people. However, as
              per Council of Leather Exports (CLE) data only 30% of that
              workforce comprises women, and a majority of them are concentrated
              in South India, where female workforce participation is
              traditionally higher. In contrast, North Indian clusters still lag
              far behind.
            </p>

            <p>
              Meanwhile, in China,{" "}
              <span className="italic">softline manufacturing</span>—including
              garments and footwear—is dominated by women, with female-to-male
              ratios as high as 4 to 1 on the factory floor.
            </p>

            <p>
              The Indian leather and footwear sector has the potential to create
              thousands of additional jobs, yet women remain underrepresented.
              This must change—
              <span className="font-semibold">urgently and deliberately</span>.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto my-4 space-y-5 text-gray-800">
          <h2 className="text-2xl font-bold">
            Women are the competitive advantage
          </h2>

          <p>
            Here’s why increasing women’s participation in the
            workforce—especially in the leather and footwear sector—makes both
            social and business sense:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">1. Higher efficiency and output</h3>
              <p>
                Chinese facilities have shown that women workers often
                outperform in repetitive, precision-based tasks. With proper
                training, women can manage more than one line, improving
                throughput without additional cost.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                2. Lower attrition, higher accountability
              </h3>
              <p>
                Global trends show women are less likely to switch jobs
                frequently and often show greater commitment. Factories that
                have invested in female workers report higher continuity and
                fewer disruptions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                3. A cultural shift towards pride in work
              </h3>
              <p>
                In China, contributing to national growth is a source of pride.
                Indian women are no less capable of matching that drive. All
                they need is access, opportunity, encouragement and a safe work
                environment.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                4. Inclusive Growth = Sustainable Growth
              </h3>
              <p>
                Empowering women in manufacturing can uplift entire families,
                reduce dependency ratios, and increase household incomes. A more
                inclusive workforce strengthens local economies and social
                fabrics.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto my-4 space-y-5 text-gray-800">
          <h2 className="text-2xl font-bold">
            LSSC and Industry leaders are enabling this shift
          </h2>

          <ul className="space-y-4 list-disc list-inside">
            <li>
              <span className="font-semibold">
                Skilling programs tailored for women:
              </span>{" "}
              Targeted training in soft skills, machine operation, safety, and
              productivity can help women overcome hesitation and build
              confidence. LSSC is committed to expanding access to such
              programs.
            </li>

            <li>
              <span className="font-semibold">
                Factory-level sensitisation:
              </span>{" "}
              Training for male colleagues and supervisors to ensure a
              respectful and supportive environment. At the factory level we
              have to imagine a greater role play for women and pay parity to
              encourage them to join the industry. Better amenities like wash
              rooms, rest rooms, crèches and flexible work hours can make whole
              lot of difference.
            </li>

            <li>
              <span className="font-semibold">Partnerships with MSMEs:</span>{" "}
              Many smaller units are eager to scale but need help with workforce
              strategy. LSSC along with its partners is helping them bridge that
              gap where availability of trained women workforce is not an issue.
            </li>

            <li>
              <span className="font-semibold">Policy Advocacy:</span> There
              should be incentives for factories that achieve gender diversity
              on the floor. This would create an enabling environment for
              manufacturers to make the necessary changes for welcoming more
              women to the workforce. LSSC supports advocacy for such policies
              to create an enabling ecosystem for employers.
            </li>
          </ul>
        </div>

        <div className="max-w-5xl mx-auto my-4 space-y-6 text-gray-800">
          <div>
            <h2 className="text-2xl font-bold">A change waiting to happen</h2>
            <p className="mt-2">
              China has shown that a skilled, empowered female workforce can
              drive productivity and profitability in manufacturing.
              India&apos;s leather and footwear industry is on the cusp of that
              same transformation. But it won&apos;t happen unless we invest in
              our women—through skilling, inclusion, and opportunity.
            </p>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <p>
              Let&apos;s not wait to catch up. Let&apos;s lead with purpose.
            </p>
            <p className="mt-4">
              The{" "}
              <span className="font-bold">Leather Sector Skill Council</span> is
              committed to making women an integral part of India&apos;s
              manufacturing story. The Council is working closely with
              manufacturers and exporters to increase the participation of women
              in the workforce. LSSC is rolling out skilling and{" "}
              <span className="underline">upskilling</span> courses for women
              for making them a force that propels Indian leather and footwear
              sector.
            </p>
          </div>
        </div>
      </article>
    </MainLayout>
  );
};

export default BlogPage;
