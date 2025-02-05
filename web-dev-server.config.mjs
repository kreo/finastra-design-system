import { devIndex, esjRender } from './tools/dev-server/middlewares.mjs';
export default {
  port: 4000,
  watch: true,
  open: true,
  // appIndex: 'index.html',
  nodeResolve: true,
  plugins: [],
  middleware: [esjRender, devIndex],
  preserveSymlinks: true,
  compatibility: 'none',
  rootDir: '.',
  debug: false
};