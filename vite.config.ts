import { defineConfig } from "vite"
import uni from "@dcloudio/vite-plugin-uni"

const INVALID_CHARS_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g
const DRIVE_LETTER_REGEX = /^[a-zA-Z]:/i

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  base: '/WYCloud',
  // server: {
  //   hmr: true,  // 确保热重载开启
  // }
  build: {
    rollupOptions: {
      output: {
        sanitizeFileName(name) {
          const match = DRIVE_LETTER_REGEX.exec(name)
          const driveLetter = match ? match[0] : ''
          return (
            driveLetter +
            name.slice(driveLetter.length).replace(INVALID_CHARS_REGEX, '')
          )
        }
      }
    }
  }
})
