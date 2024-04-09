const stylelint = require("stylelint");
const assert = require("assert");
const path = require("path");

describe("test/stylelint-config.test.js", () => {
  it("Validate default", async () => {
    const filePath = [path.join(__dirname, "./fixtures/index.css")];

    const result = await stylelint.lint({
      configFile: path.join(__dirname, "../index.js"),
      files: filePath,
      fix: false,
    });

    if (result && result.errored) {
      const fileResults = JSON.parse(result.output || "[]") || [];
      fileResults.forEach((fileResult) => {
        console.log(`===${filePath}===`);
        console.log(fileResult.warnings);
      });

      assert.ok(fileResults.length !== 0);
    }
  });

  it("Validate css-module", async () => {
    const filePath = [path.join(__dirname, "./fixtures/css-module.scss")];

    const result = await stylelint.lint({
      configFile: path.join(__dirname, "../index.js"),
      files: filePath,
      fix: false,
    });

    if (result && result.errored) {
      const fileResults = JSON.parse(result.output || "[]") || [];
      fileResults.forEach((fileResult) => {
        console.log(`===${filePath}===`);
        console.log(fileResult.warnings);
      });

      assert.ok(fileResults.length !== 0);
    }
  });

  it("Validate less", async () => {
    const filePath = [path.join(__dirname, "./fixtures/less-test.less")];

    const result = await stylelint.lint({
      configFile: path.join(__dirname, "../index.js"),
      files: filePath,
      fix: false,
    });

    if (result && result.errored) {
      const fileResults = JSON.parse(result.output || "[]") || [];
      fileResults.forEach((fileResult) => {
        console.log(`===${filePath}===`);
        console.log(fileResult.warnings);
      });

      assert.ok(fileResults.length !== 0);
    }
  });

  it("Validate sass", async () => {
    const filePath = [path.join(__dirname, "./fixtures/sass-test.scss")];

    const result = await stylelint.lint({
      configFile: path.join(__dirname, "../index.js"),
      files: filePath,
      fix: false,
    });

    if (result && result.errored) {
      const fileResults = JSON.parse(result.output || "[]") || [];
      fileResults.forEach((fileResult) => {
        console.log(`===${filePath}===`);
        console.log(fileResult.warnings);
      });

      assert.ok(fileResults.length !== 0);
    }
  });
});
