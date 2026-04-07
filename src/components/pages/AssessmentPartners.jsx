import Image from "next/image";
import Link from "next/link";
import BackButton from "../atoms/BackButton";

const AssessmentPartners = () => {
  return (
    <main className="py-10">
      <section className="container ">
        <BackButton />
        <div className="space-y-8">
          <Image
            className="mx-auto lg:w-[20%]"
            src={"/img/partners/clri.jpg"}
            width={1000}
            height={400}
          />
          <p className="text-center">
            Central Leather Research Institute, India was founded on 24 April,
            1948. It was a landmark decision of the country born at the mid-
            night of 15th August 1947, to invest into leather research. In 1947,
            the export basket of India included mostly raw hides and skins.
            There remained an untapped opportunity for India in leather sector
            for economic development, employment genera on and export earnings.
            The missing link was addition of technology to the manufacturing
            base of Indian leather sector. CLRI was founded to develop an
            internal strength in the country to generate, assimilate and
            innovate technologies for leather sector.
          </p>
          <p>
            It is one matter to design and develop technologies but entirely
            another to reach viable technologies in a traditional sector like
            leather. CLRI in 1948, made an initiative with foresight to link
            technology system with both academy and industry. CLRI assumed the
            role of being a part of the University of Madras in imparting
            education in leather technology. The seed sown in 1948 has now grown
            into a tree with nearly 60% of the industry in India being manned
            and managed by the Alumni of CLRI. Website{" "}
            <Link
              className="text-blue-600 underline"
              href={"https://www.clri.org/"}
            >
              Website
            </Link>
          </p>
          <Image
            className="mx-auto lg:w-[20%]"
            src={"/img/partners/navrati.png"}
            width={500}
            height={400}
          />

          <p>
            Navriti has been founded by alumni of NIT, Trichy and IIM Bangalore
            with rich experience in the field of education, assessments as well
            as technology. Conducted Assessments in more 12 states and Certified
            60000+ candidates across 10 sectors which includes Leather, Rubber,
            Auto, Beauty, Retail, Apparel, Construction & Plumbing. Empanelled
            with Leather, Auto, Beauty & Wellness, Gems & Jewellery Sector Skill
            Councils. Empanelled with DGET for BoCW RPL project for
            Construction.
          </p>
          <p>
            Navriti Management Team comprises of seasoned professionals with
            rich experience in assessment design, development and delivery. We
            have a expert team for occupa!onal assessments, which comprises of
            Subject Matter Experts, Content Creators, Assessment Designers and
            Field Assessors. We have empanelled more than 250+ assessors across
            India. All the assessors possess considerable hands on experience
            and domain knowledge. They are trained on all the processes, tools
            and systems of Navriti. 
            <Link
              className="text-blue-600 underline"
              href={"https://navriti.com/"}
            >
              Website
            </Link>
          </p>
          <Image
            className="mx-auto lg:w-[30%]"
            src={"/img/partners/mirams.png"}
            width={1000}
            height={400}
          />

          <p>
            “Mirams Training Services (India) Pvt Ltd (MTSIPL) was founded in in
            Kolkata in 2014 as an Indian associate company of Mirams-Waterhouse
            Ltd of the UK. It specialises in the development and delivery of
            world-class skills training, as well as assessments and assessment
            systems, and related services such as quality assurance, programme
            monitoring, mobilisation and placement. MTSIPL has been conducting
            assessments for the Leather Sector Skill Council since mid-2014, and
            has suitably qualified and experienced assessors in place pan-India,
            able to deliver services in accordance with global best practice.
            Although MTSIPL’s core competence is the leather industry, the
            company, and its related company Mirams Waterhouse Ltd, have access
            to specialists world-wide in most verticals.” Website 
            <Link
              className="text-blue-600 underline"
              href={"http://www.miramsindia.com/"}
            >
              Website
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default AssessmentPartners;
