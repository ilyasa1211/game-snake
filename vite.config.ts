import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig((env) => ({
  plugins: [],
  base: env.mode === "github" ? "/game-snake" : "/",
}));
