"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import MobileSidebar from "./MobileDrawer";
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { LanguageSwitcher } from "../molecules/language-switcher";
const TopBar = () => {
  return (
    <div className="w-full">
      {/* social navigation */}

      <div className="hidden md:block bg-black w-full">
        <div className="container mx-auto py-4 md:py-3  flex flex-col  md:flex-row justify-center gap-3 md:gap-0 md:justify-between items-center">
          <div className="w-fit flex flex-col md:flex-row items-center gap-3 text-white  text-nowrap">
            <span className="text-sm font-medium">Reach out to us :</span>

            <div className="flex flex-row items-center gap-2">
              <IoIosCall />
              <Link href="tel:044 - 22500146" className="text-sm font-medium">
                044 - 22500146
              </Link>
            </div>

            <div className="flex flex-row items-center gap-2">
              <IoMail />
              <Link
                href="mailto:lssc@leatherssc.org"
                className="text-sm font-medium"
              >
                lssc@leatherssc.org
              </Link>
            </div>
          </div>

          <div className="inline-flex justify-end w-fit gap-2 md:gap-4">
            {socialLinks.map((social, index) => (
              <Link key={index} href={social.url} title={social.name}>
                <span className="text-white text-sm md:text-xl">
                  {social.icon}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* search & logo  */}

      <div className="w-full bg-white">
        <div className="container py-2.5 md:py-4">
          <div className="w-full flex flex-row items-center justify-between">
            {/* logo  */}
            <Link href="/" className="inline-flex gap-2">
              <Image
                priority={true}
                alt="LSSC-header-logo"
                src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/34db1f3e-d7a6-43d4-a8fa-4e8ae2928900/public"
                // src="/img/header-logo-lssc.webp"
                height={50}
                width={200}
                className="w-[70%] md:w-[270px]"
              />
            </Link>

            <div className="flex flex-row items-center gap-2">
              <Link href={`#`}>
                <Image
                  priority={true}
                  className="w-[150px]  md:w-[110px] rounded-sm  object-contain"
                  // src={`/img/scale-app.webp`}
                  src="https://imagedelivery.net/QG8_dZ1qAgTI1Cq9RSDiZg/b9bb7355-eca5-4837-2bff-521e471cf500/public"
                  alt="scale app"
                  width={100}
                  height={50}
                />
              </Link>
              <LanguageSwitcher />
            </div>

            {/* button group & input  */}

            {/* <div className="hidden lg:inline-flex gap-3">
              <div className="w-[290px] relative overflow-hidden h-[45px] border-[0.5px] border-primary-600 rounded-[4px] px-4">
                <input
                  className="w-full h-full"
                  placeholder="Search for skill center...."
                />

                <button className="absolute h-full right-0 text-xl text-primary-600 pr-3 bg-white">
                  <CiSearch />
                </button>
              </div>
              <Link href="/auth/signup">
                <button className="px-8 h-[45px] hover:opacity-90 transition-all duration-100 bg-primary-600 text-white  border border-primary-600 rounded-[4px]">
                  Register
                </button>
              </Link>

              <Link href="/auth/signin">
                <button className="px-8 h-[45px] text-primary-600 hover:opacity-80 transition-all  border border-primary-600 rounded-[4px]">
                  Log in
                </button>
              </Link>

              <Image
                className="w-10 h-10"
                src={"/img/language.svg"}
                alt="language"
                width={100}
                height={100}
              />
            </div> */}

            {/* hamburger menu  */}

            <div className="lg:hidden text-lg text-black">
              <MobileSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

// # json data ~ socail links

const socialLinks = [
  {
    icon: <FaFacebookSquare />,
    url: "https://www.facebook.com/LSSC.INDIA ",
    name: "Facebook",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/leather.ssc/",
    name: "Instagram",
  },
  {
    icon: <FaXTwitter />,
    url: "https://x.com/leatherssc",
    name: "Twitter",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/company/27305693/admin/dashboard/ ",
    name: "Linkedin",
  },
];
