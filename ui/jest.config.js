module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  coverageDirectory: "../coverage/",
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!src/main.js",
    "!src/router/index.js",
    "!src/store/index.js",
    "!**/node_modules/**"
  ]
};
