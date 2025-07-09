import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://sibokeptoday.pages.dev',
  output: 'server',
  adapter: cloudflare(),
});