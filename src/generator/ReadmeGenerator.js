/**
 * README generator for creating markdown documentation
 */

const defaults = require("../config/defaults");

class ReadmeGenerator {
  constructor(projectInfo, logger) {
    this.projectInfo = projectInfo;
    this.logger = logger;
  }

  /**
   * Generate badges for the README
   * @returns {string} - Badge markdown
   */
  generateBadges() {
    const badges = [];

    if (this.projectInfo.type === "nodejs" && this.projectInfo.name) {
      badges.push(
        `![npm version](https://img.shields.io/npm/v/${this.projectInfo.name})`
      );
      badges.push(
        `![npm downloads](https://img.shields.io/npm/dm/${this.projectInfo.name})`
      );
    }

    if (this.projectInfo.hasGit && this.projectInfo.name) {
      badges.push(
        `![GitHub last commit](https://img.shields.io/github/last-commit/bibinwithab/${this.projectInfo.name})`
      );
      badges.push(
        `![GitHub issues](https://img.shields.io/github/issues/bibinwithab/${this.projectInfo.name})`
      );
    }

    if (this.projectInfo.license) {
      badges.push(
        `![License](https://img.shields.io/badge/license-${this.projectInfo.license}-blue.svg)`
      );
    }

    return badges.join(" ");
  }

  /**
   * Generate installation instructions
   * @returns {string} - Installation markdown
   */
  generateInstallationInstructions() {
    switch (this.projectInfo.type) {
      case "nodejs":
        return `\`\`\`bash
# Install dependencies
npm install

# Or using yarn
yarn install
\`\`\``;

      case "python":
        return `\`\`\`bash
# Install dependencies
pip install -r requirements.txt

# Or using pipenv
pipenv install

# Or using poetry
poetry install
\`\`\``;

      case "rust":
        return `\`\`\`bash
# Install dependencies
cargo build

# Run the project
cargo run
\`\`\``;

      case "go":
        return `\`\`\`bash
# Install dependencies
go mod download

# Run the project
go run .
\`\`\``;

      default:
        return `\`\`\`bash
# Clone the repository
git clone https://github.com/bibinwithab/${this.projectInfo.name || "project"}.git
cd ${this.projectInfo.name || "project"}
\`\`\``;
    }
  }

  /**
   * Generate usage instructions
   * @returns {string} - Usage markdown
   */
  generateUsageInstructions() {
    if (this.projectInfo.type === "nodejs" && this.projectInfo.scripts) {
      const scripts = Object.keys(this.projectInfo.scripts);
      if (scripts.length > 0) {
        let usage = "```bash\n";
        scripts.forEach((script) => {
          usage += `npm run ${script}\n`;
        });
        usage += "```";
        return usage;
      }
    }

    return `\`\`\`bash
# Basic usage
node index.js
\`\`\``;
  }

  /**
   * Generate table of contents
   * @returns {string} - Table of contents markdown
   */
  generateTableOfContents() {
    const sections = ["Installation", "Usage"];

    if (this.projectInfo.dependencies.length > 0) {
      sections.push("Dependencies");
    }

    if (this.projectInfo.hasTests) {
      sections.push("Testing");
    }

    sections.push("Contributing", "License", "Author");

    return sections
      .map((section) => `- [${section}](#${section.toLowerCase()})`)
      .join("\n");
  }

  /**
   * Generate dependencies section
   * @returns {string} - Dependencies markdown
   */
  generateDependenciesSection() {
    if (this.projectInfo.dependencies.length === 0) return "";

    let deps = "## Dependencies\n\n";
    deps += "This project uses the following main dependencies:\n\n";

    this.projectInfo.dependencies.forEach((dep) => {
      deps += `- **${dep}** - [View on npm](https://www.npmjs.com/package/${dep})\n`;
    });

    if (this.projectInfo.devDependencies.length > 0) {
      deps += "\n### Development Dependencies\n\n";
      this.projectInfo.devDependencies.forEach((dep) => {
        deps += `- **${dep}** - [View on npm](https://www.npmjs.com/package/${dep})\n`;
      });
    }

    return deps + "\n";
  }

  /**
   * Generate testing section
   * @returns {string} - Testing markdown
   */
  generateTestingSection() {
    if (!this.projectInfo.hasTests) return "";

    return `## Testing

\`\`\`bash
# Run tests
npm test
\`\`\`

\`\`\`bash
# Run tests with coverage
npm run test:coverage
\`\`\`

`;
  }

  /**
   * Generate the complete README
   * @param {Object} answers - User answers from prompts
   * @returns {string} - Complete README markdown
   */
  generateReadme(answers) {
    const badges = this.generateBadges();
    const toc = this.generateTableOfContents();
    const installation = this.generateInstallationInstructions();
    const usage = this.generateUsageInstructions();
    const dependencies = this.generateDependenciesSection();
    const testing = this.generateTestingSection();

    return `# ${answers.projectName || this.projectInfo.name}

${badges}

${
  answers.description ||
  this.projectInfo.description ||
  "A project created with repome"
}

## Table of Contents
${toc}

## Installation
${installation}

## Usage
${usage}

${dependencies}${testing}## Contributing

${
  answers.contributing ||
  "Contributions are welcome! Please feel free to submit a Pull Request."
}

## License

${
  answers.license
    ? `This project is licensed under the ${answers.license} License.`
    : this.projectInfo.license
    ? `This project is licensed under the ${this.projectInfo.license} License.`
    : "This project is licensed under the ISC License."
}

## Author

**${answers.githubUsername || "bibinwithab"}**
- GitHub: [@${answers.githubUsername || "bibinwithab"}](https://github.com/${
      answers.githubUsername || "bibinwithab"
    })
- Email: ${answers.email || "your.email@example.com"}

---
*This README was generated with [repome](https://github.com/bibinwithab/repome) - A CLI tool for creating beautiful README files*
`;
  }
}

module.exports = ReadmeGenerator;
