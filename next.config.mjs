/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/((?!_next/).*)",
          has: [{ type: "host", value: "diagnostics.clinicdigital.co" }],
          destination: "/diagnostics/:path*",
        },
      ],
    }
  },
}

export default nextConfig
