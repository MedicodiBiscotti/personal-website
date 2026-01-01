/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, // makes relative links work with static export
};

export default nextConfig;
