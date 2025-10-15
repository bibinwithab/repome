/**
 * Interactive prompts for repome CLI
 */

const inquirer = require("inquirer");

class Prompts {
  constructor(logger) {
    this.logger = logger;
  }

  /**
   * Ask multi-line input question
   * @param {string} message - Question message
   * @returns {Promise<string>} - User input
   */
  async askMultiLineInput(message) {
    const lines = [];

    while (true) {
      const { line } = await inquirer.prompt([
        {
          type: "input",
          name: "line",
          message: `${message} (Type 'END' to finish)`,
        },
      ]);

      if (line.trim() === "END") {
        break;
      }
      lines.push(line);
    }

    return lines.join("\n");
  }

  /**
   * Ask basic project questions
   * @param {Object} projectInfo - Project information
   * @returns {Promise<Object>} - User answers
   */
  async askQuestions(projectInfo) {
    const questions = [
      {
        type: "input",
        name: "projectName",
        message: "Project name:",
        default: projectInfo.name || "My Project",
      },
      {
        type: "input",
        name: "description",
        message: "Project description:",
        default: projectInfo.description || "A wonderful project",
      },
      {
        type: "input",
        name: "githubUsername",
        message: "GitHub username:",
        default: "bibinwithab",
      },
      {
        type: "input",
        name: "email",
        message: "Email:",
        default: "your.email@example.com",
      },
      {
        type: "input",
        name: "contributing",
        message: "Contributing guidelines:",
        default:
          "Contributions are welcome! Please feel free to submit a Pull Request.",
      },
    ];

    return await inquirer.prompt(questions);
  }

  /**
   * Ask for confirmation
   * @param {string} message - Confirmation message
   * @param {boolean} default - Default value
   * @returns {Promise<boolean>} - User confirmation
   */
  async askConfirmation(message, defaultValue = true) {
    const { confirmed } = await inquirer.prompt([
      {
        type: "confirm",
        name: "confirmed",
        message,
        default: defaultValue,
      },
    ]);

    return confirmed;
  }

  /**
   * Ask for file path
   * @param {string} message - Question message
   * @param {string} defaultPath - Default path
   * @returns {Promise<string>} - File path
   */
  async askFilePath(message, defaultPath = "README.md") {
    const { filePath } = await inquirer.prompt([
      {
        type: "input",
        name: "filePath",
        message,
        default: defaultPath,
        validate: (input) => {
          if (!input.trim()) {
            return "File path cannot be empty";
          }
          return true;
        },
      },
    ]);

    return filePath;
  }

  /**
   * Ask for multiple choice
   * @param {string} message - Question message
   * @param {Array} choices - Available choices
   * @param {string} default - Default choice
   * @returns {Promise<string>} - Selected choice
   */
  async askChoice(message, choices, defaultValue) {
    const { choice } = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message,
        choices,
        default: defaultValue,
      },
    ]);

    return choice;
  }
}

module.exports = Prompts;
