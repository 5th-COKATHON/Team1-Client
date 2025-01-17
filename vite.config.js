import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  server: {
    host: '0.0.0.0', // 모든 네트워크 인터페이스에서 접근 가능
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://15.165.24.90:8080', // 프록시할 대상 서버
        changeOrigin: true,             // 대상 서버의 origin으로 헤더를 변경
        secure: false,
        ws: true
      },
    },
  },
})
