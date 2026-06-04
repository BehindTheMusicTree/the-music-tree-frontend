import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

function staticAssetsMock() {
  return {
    name: "static-assets-mock",
    transform(_code: string, id: string) {
      if (/\.(svg|png|jpg|jpeg|gif|ico|webp)$/.test(id)) {
        return { code: "export default ''" };
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), staticAssetsMock()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
