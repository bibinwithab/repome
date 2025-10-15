/**
 * Logger utility for repome
 */

const chalk = require("chalk");

class Logger {
  constructor(verbose = false) {
    this.verbose = verbose;
  }

  info(message) {
    console.log(chalk.blue("ℹ"), message);
  }

  success(message) {
    console.log(chalk.green("✅"), message);
  }

  warning(message) {
    console.log(chalk.yellow("⚠️"), message);
  }

  error(message) {
    console.error(chalk.red("❌"), message);
  }

  debug(message) {
    if (this.verbose) {
      console.log(chalk.gray("🐛"), message);
    }
  }

  step(message) {
    console.log(chalk.cyan("🔍"), message);
  }

  progress(message) {
    console.log(chalk.magenta("📦"), message);
  }

  file(message) {
    console.log(chalk.blue("📁"), message);
  }

  test(message) {
    console.log(chalk.yellow("🧪"), message);
  }

  license(message) {
    console.log(chalk.green("📄"), message);
  }

  welcome(message) {
    console.log(chalk.bold.cyan(message));
  }

  separator() {
    console.log(chalk.gray("====================================="));
  }
}

module.exports = Logger;
