"use client";

import { useState } from "react";

const CLE = () => {
  const [isVisible, setIsVisible] = useState("cle");

  const tabs = [
    { id: "cle", label: "CLE (Council for Leather Exports)" },
    { id: "ifcoma", label: "IFCOMA (Indian Footwear Components Manufacturers Association)" },
    { id: "ilga", label: "ILGA (Indian Leather Garment Association)" },
    { id: "bcci", label: "BCCI (Bahadurgarh Chamber of Commerce and Industry)" },
    { id: "clcta", label: "CLCTA (Calcutta Leather Complex Tanners Associations)" },
    { id: "klc", label: "KLC (Kanpur Unnao Leather Cluster Development)" },
  ];

  const contentMap = {
    cle: `The Council for Leather Exports (CLE) is the single largest and Apex trade promotion orgnisation of the strong and rapidly growing Indian leather & leather products industry. CLE is committed towards the overall development of Indian leather sector and achieve higher export growth to enhance India’s share in global leather trade. CLE is functioning under the aegis of Ministry of Commerce & Industry, Govt. of India. It is the notified Export Promotion organization for entire leather & leather products industry`,
    ifcoma: `The Indian Footwear Components Manufacturers Association (IFCOMA) is a registered body under the Societies Registration Act and is the only trade association of Component Manufacturers in India. It is a non-profit organization managed by a duly elected apex body called the Executive Committee. The National Leather Development Programme and various ministries of the Government of India duly recognize our association.`,
    ilga: ` It is a non-profit organization focused on the leather goods industry. ILGA's purpose is to support the industry by providing services, facilitating matchmaking between international buyers and manufacturers, and offering training and skill development for underprivileged youth. `,
    bcci: `The Bahadurgarh Chamber of Commerce & Industry (BCCI) is a dynamic organization dedicated to fostering growth, collaboration, and innovation in the business ecosystem of Bahadurgarh. Established with the vision of empowering local businesses, BCCI serves as a bridge between entrepreneurs, industry leaders, and government authorities to create a thriving economic environment.`,
    clcta: `The Calcutta Leather Complex Tanners' Association (CLCTA) is a non-governmental organization representing the tanneries in the Calcutta Leather Complex (CLC) in Bantala, West Bengal, India. It's an umbrella organization for the MSME (Micro, Small, and Medium Enterprises) tanneries within the Bantala cluster. CLCTA is responsible for the operation and maintenance of the Common Effluent Treatment Plant (CETP), Effluent Transportation Network, and Common Chemical Recovery Unit (CCRU) within the complex.`,
    klc: `KLC, also known as the Kanpur Unnao Leather Cluster Development Company Limited, is a public limited company based in Kanpur, Uttar Pradesh, India. It is involved in the leather industry and its development. KLC's CIN (Corporate Identification Number) is U19115UP2008PLC041646. The company's registered address is 219/3 & 4 L Block Naveen Nagar, Kakadeo, Kanpur. KLC has also been involved in initiatives like establishing a design studio and a leather fashion training center in Kanpur.`,
  };

  return (
    <section className="grid lg:grid-cols-2 lg:gap-0 gap-6">
      <div className="border rounded-s-lg">
        {tabs.map((tab) => (
          <p
            key={tab.id}
            onClick={() => setIsVisible(tab.id)}
            className={`border-b p-2 rounded-tl-lg font-semibold cursor-pointer ${
              isVisible === tab.id ? "bg-[#0070BA] text-white" : ""
            }`}
          >
            {tab.label}
          </p>
        ))}
      </div>

      <div className="bg-[#F5FBFF] border rounded-e-lg border-[#d8dde0] lg:p-4">
        <p>{contentMap[isVisible]}</p>
      </div>
    </section>
  );
};

export default CLE;
