import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // host: 'localhost', // Ensure the host is explicitly set
    host: '0.0.0.0', // Allow access from anywhere
    port: 5178,        // Set the custom port
    allowedHosts:"https://ease-drive.onrender.com"
  },
})
