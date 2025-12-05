import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ruewio/',   // ⭐ 저장소 이름 그대로 넣기
  plugins: [react()],
});
