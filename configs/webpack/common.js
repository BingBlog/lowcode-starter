// shared config (dev and prod)
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    designer: "./pages/designer/index.tsx",
    preview: "./pages/preview/index.tsx",
    list: "./pages/list/index.tsx",
  },
  stats: "errors-only",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    fallback: {
      assert: false,
      buffer: false,
      console: false,
      constants: false,
      crypto: false,
      domain: false,
      events: false,
      http: false,
      https: false,
      os: false,
      path: false,
      punycode: false,
      process: false,
      querystring: false,
      stream: false,
      string_decoder: false,
      sys: false,
      timers: false,
      tty: false,
      url: false,
      util: false,
      vm: false,
      zlib: false,
    },
  },
  context: resolve(__dirname, "../../src"),
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        include: [
          /src/,
          /node_modules\/antd/,
          /node_modules\/@formily/,
          /node_modules\/@seada/,
          /node_modules\/@alilc/,
        ],
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.less$/,
        include: [
          /src/,
          /node_modules\/antd/,
          /node_modules\/@formily/,
          /node_modules\/@seada/,
          /node_modules\/@alilc/,
        ],
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          "file-loader?hash=sha512&digest=hex&name=img/[contenthash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html.ejs",
      chunks: ["designer"],
    }),
    new HtmlWebpackPlugin({
      filename: "preview.html",
      template: "public/index.html.ejs",
      chunks: ["preview"],
    }),
    new HtmlWebpackPlugin({
      filename: "list.html",
      template: "public/index.html.ejs",
      chunks: ["list"],
    }),
  ],
  externals: {
    react: "var window.React",
    "react-dom": "var window.ReactDOM",
    "prop-types": "var window.PropTypes",
    "@alifd/next": "var window.Next",
    "@alilc/lowcode-engine": "var window.AliLowCodeEngine",
    "@alilc/lowcode-editor-core":
      "var window.AliLowCodeEngine.common.editorCabin",
    "@alilc/lowcode-editor-skeleton":
      "var window.AliLowCodeEngine.common.skeletonCabin",
    "@alilc/lowcode-designer":
      "var window.AliLowCodeEngine.common.designerCabin",
    "@alilc/lowcode-engine-ext": "var window.AliLowCodeEngineExt",
    "@ali/lowcode-engine": "var window.AliLowCodeEngine",
    moment: "var window.moment",
    lodash: "var window._",
  },
};
