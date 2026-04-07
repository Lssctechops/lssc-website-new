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
};

export default nextConfig;
