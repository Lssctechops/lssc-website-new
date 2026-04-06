import Image from "next/image";

const BookDetail = ({ book }) => {
  const filteredBook = bookDetail.find((item) => item.id === book);
  const { title, img, description, points } = filteredBook || {};

  console.log(filteredBook);
  return (
    <section className="container py-12 space-y-10">
      <h2 className="text-center text-3xl font-bold">{title}</h2>
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          {description?.map((desc, i) => {
            return (
              <p key={i} className="font-normal">
                {desc}
              </p>
            );
          })}
        </div>
        <div>
          <p className="font-normal">
            Upon successful completion of this course the the participant will
            be able to:
          </p>
          <ol className="list-decimal ps-6">
            {points?.map((point, i) => (
              <li className="font-normal" key={i}>
                {point}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={`/img/books/${img}`}
          alt={"book"}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default BookDetail;

const bookDetail = [
  {
    id: "cutter-footwear",
    title: "CUTTER (FOOTWEAR)",
    img: "book1.jpg",
    description: [
      "This Participant handbook is designed to enable training for the Qualification Pack (QP) for Cutter (Footwear) vide Reference ID: LSS/Q2301 published by LSSC.",
      "This course encompasses all 5 National Occupational Standards (NOS) of “Cutter (Footwear)” Qualification Pack issued by “SSC: Leather Sector Skill Council”. Each NOS is covered across one unit/s.",
      "This book is designed for up-grading the knowledge and skills for working as a ‘Cutter’ in the Leather Industry. This book will provide the necessary knowledge and skill inputs for an operator to work in an organized and disciplined manner by following safe working practices, good housekeeping, effective communication, documentation and work ethics.",
    ],
    points: [
      "Carry out basic operations before the actual cutting process",
      "Cut components to produce leather goods",
      "To maintain the work area tools and machines",
      "To meet the quality requirements",
      "Comply with safety, health and security",
      "Comply with industry, regulatory and organizational requirements.",
    ],
  },
  {
    id: "drum-operator",
    title: "DRUM OPERATOR",
    img: "book2.jpg",
    description: [
      "This Participant handbook is designed to enable training for the Qualification Pack (QP) for Drum Operator vide Reference ID: LSS /Q0301 published by LSSC.",
      "This course encompasses all 8 National Occupational Standards (NOS) of “Drum Operator” Qualification Pack issued by “SSC: Leather Sector Skill Council”. Each NOS is covered across one unit/s.",
      "This book is designed for up-grading the knowledge and skills for working as a ‘Drum Operator’ in Leather Industry. This book will provide the necessary knowledge and skill inputs for an operator to work in an organized and disciplined manner by following safe working practices, good housekeeping, effective communication, documentation and work ethics.",
    ],
    points: [
      "Carry out soaking operation",
      "Carry out liming operations",
      "Carry out pickling operations",
      "Carry out tanning operation",
      "Monitor the quality of the production while undertaking drum related activities",
      "Maintain the work area, tools and machines",
      "Maintain health, safety and security at workplace",
      "Comply with industry, regulatory and organizational requirements.",
    ],
  },
  {
    id: "cutter-goods-graments",
    title: "CUTTER (GOODS & GARMENTS)",
    img: "book3.jpg",
    description: [
      "This Participant handbook is designed to enable training for the Qualification Pack (QP) for Cutter (Goods and Garments) vide Reference ID: LSS/Q5301 published by LSSC.",
      "This course encompasses all 6 National Occupational Standards (NOS) of “Cutter (Goods and Garments)” Qualification Pack issued by “SSC: Leather Sector Skill Council”. Each NOS is covered across one unit/s.",
      "This book is designed for up-grading the knowledge and skills for working as a ‘Cutter’ in the Leather Industry. This book will provide the necessary knowledge and skill inputs for an operator to work in an organized and disciplined manner by following safe working practices, good housekeeping, effective communication, documentation and work ethics.",
    ],
    points: [
      "Carry out basic operations before the actual cutting process",
      "Cut components to produce leather goods",
      "Maintain the work area, tools and machines",
      "Meet the quality requirements",
      "Comply with safety, health and security",
      "Comply with industry, regulatory and organizational requirements",
    ],
  },
  {
    id: "buffing-operator",
    title: "BUFFING OPERATOR",
    img: "book4.jpg",
    description: [
      "This Participant handbook is designed to enable training for the Qualification Pack (QP) for Buffing Operator vide Reference ID: LSS /Q0801 published by LSSC.",
      "This course encompasses all 6 National Occupational Standards (NOS) of “Buffing Operator” Qualification Pack issued by “SSC: Leather Sector Skill Council”. Each NOS is covered across one unit/s.",
      "This book is designed for up-grading the knowledge and skills for working as a ‘Buffing Operator’ in the Leather Industry. This book will provide the necessary knowledge and skill inputs for an operator to work in an organized and disciplined manner by following safe working practices, good housekeeping, effective communication, documentation and work ethics.",
    ],
    points: [
      "Carry out buffing and snuffing operations",
      "Carry out dusting operations",
      "Maintain the work area, tools and machines",
      "To meet the quality requirements",
      "Comply with safety, health and security",
      "Comply with industry, regulatory and organizational requirements.",
    ],
  },
];
