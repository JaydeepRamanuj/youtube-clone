import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/youtubeapi": {
  //       // A prefix you choose for your local requests
  //       target: "https://www.googleapis.com/youtube/v3", // The official YouTube Data API base URL
  //       changeOrigin: true, // Needed for virtual hosting
  //       rewrite: (path) => path.replace(/^\/youtubeapi/, ""), // Remove the prefix when forwarding
  //       // No need to pass API key in headers for Google's API if it's in the URL params
  //       // BUT, if you had other specific headers, you'd add them here
  //       // secure: false, // Use only if you face SSL issues locally, not recommended otherwise
  //     },
  //   },
  // },
});
