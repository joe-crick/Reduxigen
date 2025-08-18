module.exports = {
  setupFilesAfterEnv: ["<rootDir>/test/test-setup.js"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!.*(cheerio)/)"
  ]
};
