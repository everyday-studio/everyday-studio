// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://everydaystudio.xyz',
  integrations: [sitemap()],
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()],
    // 🌟 바로 이 부분을 추가했습니다! (Vite 보안 검문소 통과 명단)
    server: {
      allowedHosts: ['everydaystudio.xyz', 'www.everydaystudio.xyz']
    }
  }
}); 
