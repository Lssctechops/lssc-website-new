export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/*?l="],
    },
    sitemap: "https://leatherssc.org/sitemap.xml",
  };
}
