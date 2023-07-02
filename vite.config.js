import { defineConfig } from 'vite'  
import react from '@vitejs/plugin-react'  

// https://vitejs.dev/config/  
export default defineConfig(({ command }) => {  
  const config = {  
    plugins: [react()],  
    base: '/',  
  }  

  // Set base to the repository name when not serving locally
  if (command !== 'serve') {  
    config.base = '/arch-studio-multipage-website/'  
  }  

  return config  
})
