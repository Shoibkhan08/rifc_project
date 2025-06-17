export default {
  build: {
    chunkSizeWarningLimit: 2000, // KB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // separate vendor libs into one chunk
          }
          if (id.includes('News')) {
            return 'news';
          }
        }
      }
    }
  }
}
