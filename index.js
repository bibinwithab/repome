#!/usr/bin/env node

const fs = require("fs");
const inquirer = require("inquirer");

async function askMultiLineInput(message) {
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

async function askQuestions() {
  const basicAnswers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is the name of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Write a short description of your project:",
    },
    {
      type: "input",
      name: "contributing",
      message: "How can others contribute to your project?",
    },
    {
      type: "input",
      name: "license",
      message: "Which license does your project use?",
    },
    {
      type: "input",
      name: "githubUsername",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
  ]);

  // Ask for multi-line inputs
  basicAnswers.installation = await askMultiLineInput("Enter an installation step");
  basicAnswers.usage = await askMultiLineInput("Enter a usage step");

  return basicAnswers;
}

function generateReadme(answers) {
  return `
# ${answers.projectName}

${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## License
This project is licensed under the ${answers.license} License.

## Author
GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
Email: [${answers.email}](mailto:${answers.email})
`;
}

function writeReadme(content) {
  fs.writeFile("README.md", content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README.md created successfully!");
    }
  });
}

async function main() {
  try {
    const answers = await askQuestions();
    const readmeContent = generateReadme(answers);
    writeReadme(readmeContent);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
