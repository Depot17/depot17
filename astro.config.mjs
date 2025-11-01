import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  integrations: [react()],

  vite: {
    optimizeDeps: {
      include: [
        'three/examples/jsm/loaders/OBJLoader.js',
        'three/examples/jsm/loaders/MTLLoader.js'
      ]
    },
    plugins: [tailwindcss()],
  },
});