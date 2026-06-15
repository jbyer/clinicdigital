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
          source: "/:path*",
          has: [{ type: "host", value: "diagnostics.clinicdigital.co" }],
          destination: "/diagnostics/:path*",
        },
      ],
    }
  },
}

export default nextConfig
