import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
// Vite를 빌드 도구로 사용하지 않는 경우 test구성 파일의 속성을 사용하여 Vitest를 구성할 수 있습니다.
// import { defineConfig } from 'vitest/config'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    // jest와 같은 전역 테스트 API 사용
    globals: true,
    // happy-dom으로 DOM 시뮬레이션
    // (피어 의존성으로 happy-dom을 설치해야 함)
    environment: 'happy-dom'
  }
})
