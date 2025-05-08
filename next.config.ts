import withBundleAnalyzer from "@next/bundle-analyzer"
import { type NextConfig } from "next"

import createNextIntlPlugin from 'next-intl/plugin';
import { env } from "./env.mjs"

const withNextIntl = createNextIntlPlugin('./app/i18n/request.tsx');


const config: NextConfig = withNextIntl({
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  rewrites: async () => [
    { source: "/healthz", destination: "/api/health" },
    { source: "/api/healthz", destination: "/api/health" },
    { source: "/health", destination: "/api/health" },
    { source: "/ping", destination: "/api/health" },
  ],
});

export default env.ANALYZE ? withBundleAnalyzer({ enabled: env.ANALYZE })(config) : config
