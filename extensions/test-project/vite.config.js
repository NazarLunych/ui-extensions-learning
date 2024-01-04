import {defineConfig} from "vite";
import {resolve} from "path";
import {glob} from "glob";

const scripts = glob.sync(resolve(__dirname, "./src/scripts/*.js"));
const styles = glob.sync(resolve(__dirname, "./src/styles/*.scss"));

export default defineConfig({
  root: "src",
  build: {
    outDir: resolve(__dirname, "../learning-extension/assets"),
    assetsDir: "./",
    rollupOptions: {
      input: [...scripts, ...styles],
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "[name].[ext]"
      }
    }
  }
});
