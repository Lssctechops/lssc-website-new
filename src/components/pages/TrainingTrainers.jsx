import Image from "next/image";
import Link from "next/link";
import BackButton from "../atoms/BackButton";

const TrainingTrainers = () => {
  return (
    <main className="py-6 container">
      <BackButton />
      <section className=" space-y-6">
        <div className="grid lg:grid-cols-2 gap-4">
          {features?.map((feature, i) => (
            <div key={i} className="">
              <Image
                src={`${feature.img}`}
                alt="training"
                className="h-auto w-full"
                width={1000}
                height={500}
              />
              <p className="text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        <Link
          href={
            "https://drive.google.com/file/d/11lMYhQUwilITm64duegqgievboPnOCZ3/view"
          }
        >
          {" "}
          <h3 className="bg-gradient-to-r w-fit  text-white px-4 py-1 rounded-lg text-2xl mx-auto from-[#7B0C0A] to-[#420705]">
            Calender for Training of Trainers / Assessors
          </h3>
        </Link>

        <div className="space-y-4 mt-5">
          <h3 className="text-[#073B4C] text-2xl font-bold">
            Important information on Posters PMKVY 4.0
          </h3>
          <p className="font-normal">
            Training of Trainers is an important activity under SSC Transit 4.0.
            Also under the PMKVY 2 scheme, to ensure quality delivery of
            training, it is envisaged that every trainer imparting training
            under PMKVY 2 is SSC certified. SSCs are mandated to conduct
            Training of Trainers (ToT) for certification of trainers. System of
            recording the trainees’ and trainers’ attendance through Biometric
            attendance system would be made mandatory. All trainings shall be
            imparted by SSC approved trainers who have completed the ToT
            Programme. All candidates have to be provided the course curriculum
            booklet along with the Induction kit.
          </p>
          <ul>
            <li className="flex gap-3 font-normal">
              {" "}
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Identify couple of affiliated training centres (NSDC or own)
              nation-wide to be designated as exclusive SSC Training of Trainers
              and Training of Assessor* centres.
            </li>
            <li className="flex gap-3 font-normal">
              {" "}
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Consider activating multiple centres pan-India – the numbers and
              locations of such centres getting activated in the beginning
              should depend on the volume experience of STAR and PMKVY 1.
              Adequate number of centres will ensure that this activity does not
              become a bottle-neck under the allocated responsibilities of an
              SSC.
            </li>
            <li className="flex gap-3 font-normal">
              {" "}
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              The identified Training Centres should have all the Lab Equipment
              as identified in the Curriculum/s for the QP/s by the SSC
            </li>
            <li className="flex gap-3 font-normal">
              {" "}
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Identify in these centres, the existing trainers who could be
              trained to be Master (Lead) Trainers. Alternatively the training
              partner could also recruit fresh senior professionals to be Master
              Trainers in the designate centres.
            </li>
            <li className="flex gap-3 font-normal">
              {" "}
              <Image
                className="h-5 w-5"
                src={"/icon/round.svg"}
                alt="rounded"
                width={100}
                height={100}
              />
              Each SSC to ensure that Trainer Guide for the QP is ready and
              distributed to the attending Master Trainers.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default TrainingTrainers;

const features = [
  {
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/004ea9f5-ca7a-4bd4-ed70-d205b62d2100/public",
    description:
      "Divine charitable foundation Trichy TOT. Session taken by Mr. Govindarajan.",
  },
  {
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/0dcb3753-f859-4da8-a806-cb969bd82a00/public",
    description:
      "Training Of Trainer Job Role: Stitching Operator- Goods & Garments",
  },
  {
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/9097c657-b96e-4cae-992a-8464ea94a500/public",
    description:
      "3 days Online Training of Trainers organized by LSSC under PM Vishwakarma scheme for Cobbler Job Role.",
  },
  {
    img: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/bf7d3858-cd33-4e3c-1df1-2948fa621600/public",
    description: "ToT at CFTI, Chennai, under SANKALP scheme of TNSDC",
  },
];
