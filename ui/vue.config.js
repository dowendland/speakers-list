module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:9000",
        ws: true,
        changeOrigin: true
      }
    }
  },
  outputDir: "../public",
  assetsDir: "",
  configureWebpack: {
    devtool: "source-map"
  }
};
