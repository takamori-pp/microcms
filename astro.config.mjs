import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    // デフォルトの 'directory' から 'file' に変更
    format: 'file'
  }
});