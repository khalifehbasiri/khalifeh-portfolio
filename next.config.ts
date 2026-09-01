import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return ["projects", "skills", "experience", "about", "contact"].map(
      (section) => ({
        source: `/${section}`,
        destination: "/",
      }),
    );
  },
  async redirects() {
    return [
      {
        source: "/projects/zdash",
        destination: "https://www.zdash.app/",
        permanent: true,
      },
      {
        source: "/projects/z32-telemetry",
        destination: "https://www.zdash.app/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
