import Image from "next/image";

const Partners = () => {
  return (
    <div className="w-full py-12 xl:py-16">
      <div className="container relative overflow-hidden">
        <div className="scroller-container whitespace-nowrap">
          {partnersList.map((item, index) => (
            <div key={index} className="mx-2 md:mx-4 inline-block">
              <Image
                priority={true}
                quality={50}
                title={item.name}
                src={`${item.logo}`}
                alt={item.name}
                height={100}
                width={130}
                className="w-[130px] h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;

const partnersList = [
  {
    logo: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/8108ebfe-08c3-4582-ab5f-80d07ab32f00/public",
    name: "NSDC",
  },
  {
    logo: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/7328ffb6-1f77-4920-aa17-e2123f4c6200/public",
    name: "LSSC",
  },
  {
    logo: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/a2c6e7f4-40f6-4ed5-5c87-ea65d6a6db00/public",
    name: "Skill India",
  },
  {
    logo: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/dde47ad0-751c-48ac-33c6-520c345fba00/public",
    name: "NCVET",
  },
  {
    logo: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/773f31dd-ae67-4537-cf7a-61d1fd8f7300/public",
    name: "PMKVY",
  },
  {
    logo: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/8108ebfe-08c3-4582-ab5f-80d07ab32f00/public",
    name: "NSDC",
  },
  {
    logo: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/7328ffb6-1f77-4920-aa17-e2123f4c6200/public",
    name: "LSSC",
  },
  {
    logo: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/a2c6e7f4-40f6-4ed5-5c87-ea65d6a6db00/public",
    name: "Skill India",
  },
  {
    logo: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/dde47ad0-751c-48ac-33c6-520c345fba00/public",
    name: "NCVET",
  },
  {
    logo: "https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/773f31dd-ae67-4537-cf7a-61d1fd8f7300/public",
    name: "PMKVY",
  },
];
