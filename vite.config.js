import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import path from "path";
import Components from "unplugin-vue-components/vite";
import postcsspxtoviewport from 'postcss-px-to-viewport'
import { VantResolver } from "unplugin-vue-components/resolvers";
import autoprefixer from "autoprefixer";
import postCssPxToRem from "postcss-pxtorem";

export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./assets"),
      "@components": path.resolve(__dirname, "./components"),
    },
  },
  css: {
    postcss: {
      plugins: [
        postcsspxtoviewport({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 750, // UI设计稿的宽度
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
          exclude:[/node_modules\/vant/i],
          landscape: false // 是否处理横屏情况
        })
      ]
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3009,
    proxy: {
      "/api": {
        target: "",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    },
  },
  build: {
    chunkSizeWarningLimit: 1500
  },
  // define: {
  //   'process.env': {}
  // }
})