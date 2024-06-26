import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server : {
  //   proxy : {
  //     '/api' : {
  //       target : "http://localhost:5000/",
  //       changeOrigin : true,
  //       secure : false
  //     }
  //   }
  // }
})


// 'https://task-tracker-1-5nvq.onrender.com/api/todo/'