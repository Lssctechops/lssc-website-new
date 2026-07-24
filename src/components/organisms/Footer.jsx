"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { errorToast, successToast } from "~/utils/toastMessage";

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    birthday: "",
    suggestion: "",
  });

  const [error, setError] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setError({});
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const subscribeNewsletter = async (e, data) => {
    e.preventDefault();
    setLoading(true);
    setError({});

    try {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/public/signUpNewsletter`,
        method: "POST",
        data,
      });
      setFormData({
        email: "",
        birthday: "",
        suggestion: "",
      });
      setLoading(false);
      successToast("Thank you for subscribing");
    } catch (error) {
      const { message } = error?.response?.data;
      setError(error?.response?.data || {});
      errorToast(message || "Failed to subscribe.");
      setLoading(false);
    }
  };
  return (
    <footer className="w-full bg-black pt-14 md:pt-20 pb-5 flex flex-col gap-15">
      <div className="container flex flex-col lg:grid  lg:grid-cols-2 gap-10 xl:gap-10 text-white">
        <div className="w-full">
          <div className="w-full flex flex-col gap-5">
            <h2 className="text-3xl md:text-4xl font-bold">
              Don&apos;t miss out
            </h2>

            {/* address  */}
            <div className="text-white space-y-6">
              <div>
                <h3 className="text-lg font-semibold">Head Office</h3>
                <p>
                  CFTI Campus, New Building 3rd Floor,
                  <br />
                  65/1, GST Road, Guindy,
                  <br />
                  Chennai - 600032
                </p>
                <p>Phone: 044 - 22500146</p>
                <p>
                  E-mail:{" "}
                  <a
                    href="mailto:lssc@leatherssc.org"
                    className="underline hover:text-gray-300"
                  >
                    lssc@leatherssc.org
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a
                    href="http://www.leatherssc.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-300"
                  >
                    www.leatherssc.org
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Noida Office</h3>
                409 & 410, 4th Floor i-Thum,
                <br />
                Tower-A, A-40, Sector-62, Noida,
                <br />
                Uttar Pradesh - 201309
                <br />
                <Link href="tel:0120-4915878">Telephone: 0120-4915878</Link>
              </div>
            </div>

            {/* end  */}

            <p className="text-[16px]">
              Sign up for the latest news, courses, events and others by LSSC
            </p>

            <form
              onSubmit={(e) => subscribeNewsletter(e, formData)}
              className="space-y-4"
            >
              <div className="w-full flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
                <div className="flex flex-col gap-5">
                  <label htmlFor="email" className="block text-sm font-medium">
                    EMAIL ADDRESS*
                  </label>
                  <input
                    name="email"
                    value={formData?.email}
                    onChange={handleChange}
                    required
                    type="email"
                    id="email"
                    placeholder="Enter your Email Address"
                    className="w-full p-3 bg-white text-black"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <label htmlFor="email" className="block text-sm font-medium">
                    BIRTHDAY*
                  </label>
                  <input
                    name="birthday"
                    value={formData?.birthday}
                    onChange={handleChange}
                    required
                    placeholder="MM/DD/YYYY"
                    className="w-full p-3 bg-white text-black"
                  />
                </div>

                <div className="col-span-2 flex flex-col gap-5">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Suggestion Box
                  </label>

                  <textarea
                    name="suggestion"
                    value={formData?.suggestion}
                    onChange={handleChange}
                    placeholder="Have a suggestion? We’d love to hear from you!"
                    rows={5}
                    className="w-full p-3 outline-none text-black bg-[#C3DB9A]"
                  />

                  {error?.error && (
                    <span className="text-xs text-red-500">{error?.error}</span>
                  )}
                </div>
              </div>

              <button
                disabled={loading}
                className="w-full  disabled:opacity-50 border border-white py-3 px-4 transition duration-300"
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>

        <div className="w-full gap-5 md:gap-0 grid md:grid-cols-2 2xl:grid-cols-3">
          {/* Resource Links */}

          {menus.map(({ title, navigation }, index) => {
            return (
              <div key={index} className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
                <nav>
                  <ul className="space-y-4">
                    {navigation?.map(({ label, route }, index) => {
                      return (
                        <li key={index}>
                          <Link
                            target="_blank"
                            href={route}
                            className="hover:underline"
                          >
                            {label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            );
          })}

          {/* social  */}
        </div>
        <div className="col-span-2 w-full flex flex-col gap-3 lg:flex-row  items-center  lg:justify-between">
          <p className="text-xs text-center lg:text-start">
            This site is intended for use by individuals who sign up. By signing
            up, you understand <br /> and agree that your data will be collected
            and used in accordance with our Privacy <br /> Policy and Terms of
            Use.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 pt-2">
            <a
              href="https://www.facebook.com/LSSC.INDIA"
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/27305693/admin/dashboard/"
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
              </svg>
            </a>
            <a
              href="https://x.com/leatherssc"
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                className="h-5 w-5"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-black text-white text-sm">
        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col justify-center items-center md:flex-row gap-6 uppercase font-semibold tracking-wide">
              <Link href="#" className="hover:underline">
                Site Map
              </Link>
              <Link href="#" className="hover:underline">
                Privacy
              </Link>
              <Link href="#" className="hover:underline">
                Terms
              </Link>
              <Link href="#" className="hover:underline">
                User Content Permission Terms
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <p className="text-xs text-white/70">@ 2012 LSSC</p>
              <Link
                href="#"
                className="uppercase font-semibold text-xs hover:underline"
              >
                Back to Top
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 text-center py-4 space-y-3">
          <div className="max-w-7xl mx-auto px-4 pt-4 text-center text-xs text-white">
            This site is intended for US consumers. Cookies and related
            technology are used for advertising. To learn more, visit AdChoices
            and our Privacy Policy.
          </div>
          <div className="text-center text-sm text-muted-foreground leading-relaxed">
            <p>© 2012 Leather Sector Skill Council. All Rights Reserved.</p>
            <p className="mt-1">
              Designed & Developed with ❤️ by LSSC IT Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const menus = [
  {
    title: "Resource Links",
    navigation: [
      {
        label: "Ministry of Finance",
        route: "https://financialservices.gov.in/beta/en",
      },
      { label: "MSME", route: "https://msme.gov.in/" },
      { label: "MSDE", route: "https://www.msde.gov.in/" },
      { label: "Ministry of Environment", route: "https://moef.gov.in/" },
      { label: "DGFT", route: "https://www.dgft.gov.in/CP/" },
      { label: "CLE", route: "https://leatherindia.org/" },
      { label: "CLRI", route: "https://www.clri.org/" },
      {
        label: "CFTI",
        route: "https://www.cftiagra.org.in/",
      },
      { label: "FDDI", route: "https://fddiindia.com/" },
    ],
  },
  {
    title: "Quick Access",
    navigation: [
      { label: "Home", route: "/" },
      { label: "Who We Are", route: "/who-we-are" },
      { label: "What We Do", route: "/what-we-do" },
      { label: "Skilling Program", route: "/courses" },
      { label: "Partners", route: "/partners" },
      { label: "Library", route: "/media/library/news-letter" },
      { label: "Talent Bank", route: "/job-post" },
    ],
  },
  {
    title: "More to Explore",
    navigation: [
      { label: "Courses", route: "/courses" },
      { label: "News & Events", route: "/media" },
      // { label: "Register", route: "/auth/register" },
    ],
  },
];
