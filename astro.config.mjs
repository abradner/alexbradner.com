// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://alexbradner.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    // Pairs with trailingSlash: 'never' — emits /about.html instead of
    // /about/index.html so Firebase's default directory-index trailing-slash
    // redirect never kicks in and conflicts with our no-slash canonical URLs.
    format: 'file',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
