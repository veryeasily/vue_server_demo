import vue from "@vitejs/plugin-vue"
import ssr from "vite-plugin-ssr/plugin"
import path from "node:path"
import { UserConfig } from "vite"

const config: UserConfig = {
  plugins: [vue(), ssr()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./components"),
      "@lib": path.resolve(__dirname, "./lib"),
    },
  },
}

export default config
