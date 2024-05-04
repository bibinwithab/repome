#!/usr/bin/env node

const fs = require('fs');
const inquirer = require('inquirer');

function askQuestions() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How to use your project?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can others contribute to your project?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Which license does your project use?',
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
  ]);
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
  fs.writeFile('README.md', content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md created successfully!');
    }
  });
}

async function main() {
  try {
    const answers = await askQuestions();
    const readmeContent = generateReadme(answers);
    writeReadme(readmeContent);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
