/*
 * @Description: vue配置
 * @Author: DHL
 * @Date: 2020-03-21 16:22:12
 * @LastEditors: DHL
 * @LastEditTime: 2020-04-11 16:51:20
 */
const path = require("path");

const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");

const merge = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");

function resolve(dir) {
  return path.join(__dirname, dir);
}

// 是否为开发环境
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  // 根路径
  publicPath: "./",
  // 构建输出目录
  outputDir: "dist",
  // 静态资源目录(js,css,img,fonts)
  assetsDir: "static",
  parallel: false,

  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: isDev,
  // 开发环境配置
  devServer: {
    host: "0.0.0.0",
    port: 80,
    // 自动打开浏览器
    open: true,
    disableHostCheck: true
  },
  pages: {
    index: {
      // page 的入口
      entry: "src/main.ts",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        img: resolve("src/assets/img")
      }
    }
  },
  chainWebpack(config) {
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");

    config.module
      .rule("ts")
      .use("ts-loader")
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "vant",
                libraryDirectory: "es",
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: "es2015"
          }
        });
        return options;
      });

  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/style/variables.less")]
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ["Android >= 4.0", "iOS >= 7"]
          })
          /*pxtorem({
            rootValue: 37.5,
            propList: ["*", "!font*"], // !不匹配属性（这里是字体相关属性不转换）
            unitPrecision: 3, // 最小精度，小数点位数
            minPixelValue: 2 // 替换的最小像素值
          })*/
        ]
      }
    }
  }
};
