import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const port = Number(env.PORT) || 5185;
  // For GitHub Pages project sites we need a sub-path base like "/redcliffe-digital/".
  // Set VITE_BASE in CI; locally / on a custom domain it defaults to "/".
  const base = env.VITE_BASE || "/";
  return {
    base,
    plugins: [react()],
    server: {
      port,
      strictPort: false,
    },
  };
});
