import { defineConfig } from "vite"
import uni from "@dcloudio/vite-plugin-uni"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  server: {
    hmr: true,  // 确保热重载开启
  }
})
