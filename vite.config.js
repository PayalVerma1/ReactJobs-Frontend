import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
    server:{
      port:3000,
      proxy:{
        '/api':{
          target:'https://react-jobs-backend.vercel.app',
          changeOrigin:true,
          rewrite:(path)=>path.replace(/^\/api/,''),
        },
      },
    },
});
