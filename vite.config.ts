import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path  from 'path';
import { readdirSync } from "fs";

interface AbsolutePathAliases {
  [key: string]: string;
}

const absolutePathAliases: AbsolutePathAliases = {};

const srcPath = path.resolve("src");

const srcRootContent = readdirSync(srcPath, { withFileTypes: true }).map(
    (directory) => directory.name.replace(/(\.ts){1}(x?)/, ""),
);

srcRootContent.forEach((directory: string) => {
  absolutePathAliases["@" + directory] = path.join(srcPath, directory);
});


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...absolutePathAliases,
    },
  }
})
