"use client";
import { useEffect, useState, useRef } from "react";
import Cookies from "js-cookie";

const COOKIE_NAME = "googtrans";

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState();
  const [languageConfig, setLanguageConfig] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Initialize translation engine
  useEffect(() => {
    const existingLanguageCookieValue = Cookies.get(COOKIE_NAME);
    let languageValue;

    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) languageValue = sp[2];
    }

    if (window.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = window.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }

    if (languageValue) setCurrentLanguage(languageValue);
    if (window.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(window.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!currentLanguage || !languageConfig) return null;

  const clearAllGoogleTranslateCookies = () => {
    const hostname = window.location.hostname;
    const isLocalhost =
      hostname.includes("localhost") || hostname.includes("127.0.0.1");

    // Get all possible domain variations
    const domains = [
      hostname, // exact hostname (e.g., www.leatherssc.org)
      `.${hostname}`, // with leading dot (e.g., .www.leatherssc.org)
    ];

    // If hostname has www, also try without www
    if (hostname.startsWith("www.")) {
      const withoutWww = hostname.substring(4);
      domains.push(withoutWww); // without www (e.g., leatherssc.org)
      domains.push(`.${withoutWww}`); // without www with leading dot (e.g., .leatherssc.org)
    }

    // If hostname doesn't have www, also try with www
    if (!hostname.startsWith("www.") && !isLocalhost) {
      const withWww = `www.${hostname}`;
      domains.push(withWww); // with www
      domains.push(`.${withWww}`); // with www and leading dot
    }

    // Clear cookies for all domain variations and paths
    const paths = ["/", ""];

    domains.forEach((domain) => {
      paths.forEach((path) => {
        try {
          // Using js-cookie
          Cookies.remove(COOKIE_NAME, { path, domain });
          Cookies.remove(COOKIE_NAME, { path });

          // Also try direct document.cookie manipulation for stubborn cookies
          document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}; domain=${domain};`;
          document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`;
        } catch (e) {
          // Ignore errors for invalid domain combinations
        }
      });
    });
  };

  const switchLanguage = (lang) => () => {
    clearAllGoogleTranslateCookies();

    const hostname = window.location.hostname;
    const isLocalhost =
      hostname.includes("localhost") || hostname.includes("127.0.0.1");

    // Set new cookie with appropriate domain
    const cookieOptions = {
      path: "/",
      expires: 365,
      sameSite: "lax",
    };

    if (!isLocalhost) {
      // For production, use the root domain without www
      const rootDomain = hostname.startsWith("www.")
        ? hostname.substring(4)
        : hostname;
      cookieOptions.domain = `.${rootDomain}`; // Leading dot for subdomain sharing
    }

    Cookies.set(COOKIE_NAME, `/auto/${lang}`, cookieOptions);

    setCurrentLanguage(lang);
    setIsOpen(false);

    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block notranslate" ref={dropdownRef}>
      {/* Translator Icon Button */}
      <button
        onClick={handleToggle}
        aria-label="Switch Language"
        className="focus:outline-none "
      >
        <img
          src="/icon/language-ico.png"
          className="w-16 md:w-8"
          alt="Language"
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 max-h-[15rem] overflow-y-auto bg-white shadow-lg rounded-lg overflow-hidden z-50">
          {languageConfig.languages.map((ld) => (
            <div
              key={ld.name}
              onClick={switchLanguage(ld.name)}
              className={`px-4 py-2 cursor-pointer text-sm hover:bg-gray-100 transition ${
                currentLanguage === ld.name ||
                (currentLanguage === "auto" &&
                  languageConfig.defaultLanguage === ld.name)
                  ? "text-blue-600 font-semibold bg-blue-50"
                  : "text-black"
              }`}
            >
              {ld.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
