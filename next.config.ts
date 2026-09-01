import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
