// development config
const { join } = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./common");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

console.log('__dirname', __dirname);

module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    static: {
      directory: join(__dirname, '../../src/public'),
    },
    hot: true, // enable HMR on the server
    historyApiFallback: true, // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
  },
  devtool: "cheap-module-source-map",
  plugins: [new ReactRefreshPlugin()],
});
