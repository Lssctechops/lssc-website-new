"use client";

import Image from "next/image";
import StyledHeading from "../atoms/StyledHeading";
import { useEffect, useState } from "react";

const Team = () => {
  const [ceo, setCeo] = useState(null);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/public/teamMember?limit=500`
        );
        const json = await res.json();
        const list = (json?.data || [])
          .filter((m) => m.isActive !== false)
          .sort((a, b) => (a.position || 0) - (b.position || 0))
          .map((m) => ({
            name: m.name,
            designation: m.designation,
            email: m.email,
            mobile: m.mobile,
            linkedin: m.linkedin,
            image: m?.thumbnail?.url || "",
            isCeo: m.isCeo,
          }));
        const featured = list.find((m) => m.isCeo) || list[0] || null;
        setCeo(featured);
        setMembers(list.filter((m) => m !== featured));
      } catch (err) {
        console.log(err);
      }
    };
    load();
  }, []);

  return (
    <section
      id="our-team"
      className="py-16 px-4 bg-gradient-to-b from-white to-primary-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <StyledHeading
          heading={
            <>
              Meet Our <span className="text-primary-600">Team</span>
            </>
          }
          containerStyle={"mx-auto"}
        />
        {/* DESCRIPTION */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4 leading-7">
          Our dedicated professionals work together to drive excellence in
          training, assessments, skill development, and industry collaboration
          across the leather sector.
        </p>

        {/* CEO CARD */}
        {ceo && (
          <div className="flex justify-center mt-14 mb-16">
            <div className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-br from-primary-400 via-primary-200 to-primary-600 max-w-sm w-full">
              <div className="bg-white rounded-3xl p-1 text-center relative">
                <div className="absolute top-0 left-0 w-full h-32 bg-primary-100 opacity-40 blur-3xl"></div>
                <div className="relative flex justify-center z-10">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary-100 shadow-xl">
                    {ceo.image ? (
                      <Image
                        src={ceo.image}
                        alt={ceo.name}
                        fill
                        className="object-cover object-top"
                      />
                    ) : null}
                  </div>
                </div>
                <h2 className="mt-6 text-2xl font-bold text-gray-800 relative z-10">
                  {ceo.name}
                </h2>
                <p className="text-primary-600 font-medium mt-2 relative z-10">
                  {ceo.designation}
                </p>
                {ceo.email && (
                  <a
                    href={`mailto:${ceo.email}`}
                    className="text-gray-600 text-sm mt-5 break-all relative z-10 flex items-center justify-center gap-2 hover:text-primary-600"
                  >
                    <img
                      src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/fd4855fa-0f2e-4317-d998-da9ae051d300/public"
                      alt="Zoho Mail"
                      className="w-5 h-5 object-contain"
                    />
                    {ceo.email}
                  </a>
                )}
                {ceo.mobile && (
                  <a
                    href={`tel:${ceo.mobile}`}
                    className="text-gray-700 text-sm mt-3 relative z-10 flex items-center justify-center gap-2 hover:text-primary-600"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                      alt="phone"
                      className="w-5 h-5"
                    />
                    {ceo.mobile}
                  </a>
                )}
                {ceo.linkedin && (
                  <a
                    href={ceo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                      alt="linkedin"
                      className="w-6 h-6"
                    />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TEAM MEMBERS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((team, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-br from-primary-400 via-primary-200 to-primary-600 hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white rounded-3xl h-full p-10 text-center relative">
                <div className="absolute top-0 left-0 w-full h-32 bg-primary-100 opacity-40 blur-3xl"></div>
                <div className="relative flex justify-center z-10">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary-100 shadow-lg">
                    {team.image ? (
                      <Image
                        src={team.image}
                        alt={team.name}
                        fill
                        className="object-cover object-top"
                      />
                    ) : null}
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-800 relative z-10">
                  {team.name}
                </h3>
                <p className="text-primary-600 text-sm mt-2 min-h-[48px] relative z-10">
                  {team.designation}
                </p>
                {team.email && (
                  <a
                    href={`mailto:${team.email}`}
                    className="text-gray-600 text-sm mt-4 break-all relative z-10 flex items-center justify-center gap-2 hover:text-primary-600"
                  >
                    <img
                      src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/fd4855fa-0f2e-4317-d998-da9ae051d300/public"
                      alt="Zoho Mail"
                      className="w-5 h-5 object-contain"
                    />
                    {team.email}
                  </a>
                )}
                {team.mobile && (
                  <a
                    href={`tel:${team.mobile}`}
                    className="text-gray-700 text-sm mt-3 relative z-10 flex items-center justify-center gap-2 hover:text-primary-600"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                      alt="phone"
                      className="w-5 h-5"
                    />
                    {team.mobile}
                  </a>
                )}
                {team.linkedin && (
                  <a
                    href={team.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                      alt="linkedin"
                      className="w-6 h-6"
                    />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;