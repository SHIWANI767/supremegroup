/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, // Helps with Netlify redirects
  images: {
    unoptimized: true, // 👈 Add this line to fix the issue
  },
};

module.exports = nextConfig;
