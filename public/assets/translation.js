// Declare the google variable before using it
window.google = window.google || {};
window.google.translate = window.google.translate || {};

function TranslateInit() {
  if (!window.__GOOGLE_TRANSLATION_CONFIG__) {
    return;
  }

  // Enhanced initialization with better error handling
  try {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: window.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage,
        includedLanguages: window.__GOOGLE_TRANSLATION_CONFIG__.languages
          .map((lang) => lang.name)
          .join(","),
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        multilanguagePage: true,
      },
      "google_translate_element"
    );
  } catch (error) {
    console.error("Google Translate initialization failed:", error);
  }
}

// Additional helper function to ensure proper cookie handling
function ensureTranslateCookie() {
  const cookieName = "googtrans";
  const existingCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(cookieName + "="));

  if (!existingCookie) {
    const defaultLang =
      window.__GOOGLE_TRANSLATION_CONFIG__?.defaultLanguage || "en";
    const domain = window.location.hostname;
    const isProduction = !domain.includes("localhost");

    let cookieString = `${cookieName}=/auto/${defaultLang}; path=/; max-age=31536000; SameSite=Lax`;
    if (isProduction) {
      cookieString += `; domain=${domain}`;
    }

    document.cookie = cookieString;
  }
}

// Call this after TranslateInit
if (typeof window !== "undefined") {
  window.addEventListener("load", ensureTranslateCookie);
}
