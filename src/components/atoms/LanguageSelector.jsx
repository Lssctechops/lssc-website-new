"use client";
import GoogleTranslate from "next-google-translate-widget";

export default function App() {
  return (
    <GoogleTranslate
      pageLanguage="en"
      includedLanguages="en,bn,hi"
    />
  );
}
