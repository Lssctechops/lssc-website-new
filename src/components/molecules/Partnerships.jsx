import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";
import { IoMdEye } from "react-icons/io";
import Link from "next/link";

const Partnerships = () => {
  return (
    <section id="training" className="grid gap-10 lg:grid-cols-2">
      <div>
        <StyledHeading
          heading={
            <>
              Forging <span className="text-primary-600">Partnerships</span> for
              a Stronger Skilling Ecosystem.
            </>
          }
          containerStyle="mx-auto"
        />
        <p className="mt-10 font-normal">
          At LSSC, we believe collaboration is the key to sustainable skill
          development. By forging strategic partnerships with industry leaders,
          training providers, and assessment agencies, we are creating a robust
          ecosystem that nurtures talent, ensures quality, and meets the
          evolving demands of the leather sector. Together, we’re shaping a
          skilled workforce that drives growth, innovation, and global
          competitiveness.
        </p>

        <h3 className="font-bold text-lg mt-10">
          Who can affiliate with LSSC?
        </h3>
        <p className="font-normal">
          Any public or private training institute that meets LSSC’s criteria
          and follows NSDC guidelines can seek affiliation. The institute must
          commit to delivering NSQF and NOS-aligned training programs with
          quality and complianc.{" "}
          <Link
            className="text-[#0000FF] underline"
            href={"/partners/affiliation"}
          >
            Read More
          </Link>
        </p>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center">
        <Image
          className="border-primary-200 h-72  w-full rounded-3xl border-8 object-cover "
          src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/6075fe11-a8e0-4bce-a1cf-2af3d4143a00/public"
          alt="partner"
          width={1200}
          height={600}
        />
        <div className="flex w-full justify-end">
          <Link
            className="text-white flex gap-1 font-medium underline rounded-lg p-2 bg-[#7C0903]"
            href="https://docs.google.com/document/d/1QkN2SITcB6RVjl_rZWrvRX_J_Dgs3WsO/edit?rtpof=true&sd=true#bookmark=id.2zenhdhxbat3"
          >
            <IoMdEye size={24} />
            Affiliation form
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
