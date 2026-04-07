import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";
import { ReduxProvider } from "~/lib/redux/provider";
import Script from "next/script";
export const metadata = {
  title: "Leather Sector Skill Council (LSSC)",
  description:
    "Leather Sector Skill Council (LSSC) aims to facilitate a skilled ecosystem in the leather industry through capacity building for high productivity and compliance with global standards.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <Script src="/assets/lang-config.js" strategy="beforeInteractive" />
          <Script src="/assets/translation.js" strategy="beforeInteractive" />
          <Script
            src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
            strategy="afterInteractive"
          />
        </head>

        <body>
          <Toaster />
          <div id="google_translate_element" style={{ display: "none" }}></div>

          <ReduxProvider>{children}</ReduxProvider>
        </body>
      </html>
    </>
  );
}
