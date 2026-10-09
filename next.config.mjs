// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   env: {
//     NEXT_PUBLIC_API_URL: "https://api.leatherssc.org",
//   },
//   images: {
//     unoptimized: true,
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "res.cloudinary.com",
//       },
//       {
//         protocol: "http",
//         hostname: "res.cloudinary.com",
//       },
//       {
//         protocol: "https",
//         hostname: "example.com",
//       },
//       {
//         protocol: "https",
//         hostname: "test.leatherssc.org",
//       },
//       {
//         protocol: "https",
//         hostname: "leatherssc.org",
//       },
//     ],
//   },
//   async redirects() {
//     return [
//       {
//         source: "/about-lssc-2",
//         destination: "/",
//         permanent: false,
//       },
//       {
//         source: "/about-lssc",
//         destination: "/",
//         permanent: false,
//       },
//       {
//         source: "/registration-page",
//         destination: "/job-post",
//         permanent: false,
//       },
//     ];
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: "https://api.leatherssc.org",
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "test.leatherssc.org",
      },
      {
        protocol: "https",
        hostname: "leatherssc.org",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/about-lssc-2",
        destination: "/",
        permanent: false,
      },
      {
        source: "/about-lssc",
        destination: "/",
        permanent: false,
      },
      {
        source: "/registration-page",
        destination: "/job-post",
        permanent: false,
      },
    ];
  },
  // Security headers – applied to every page
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
        ],
      },
    ];
  },
};

export default nextConfig;