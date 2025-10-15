/**
 * Default configuration for repome
 */

module.exports = {
  // Default values for README generation
  defaults: {
    projectName: "My Project",
    description: "A wonderful project created with repome",
    githubUsername: "bibinwithab",
    email: "your.email@example.com",
    license: "ISC",
    contributing:
      "Contributions are welcome! Please feel free to submit a Pull Request.",
  },

  // Badge configuration
  badges: {
    npm: true,
    github: true,
    license: true,
    custom: [],
  },

  // Sections to include/exclude
  sections: {
    installation: true,
    usage: true,
    dependencies: true,
    testing: true,
    contributing: true,
    license: true,
    author: true,
    changelog: false,
    roadmap: false,
    faq: false,
  },

  // Custom templates
  templates: {
    header: null, // Custom header template
    footer: null, // Custom footer template
  },

  // File detection patterns
  detection: {
    testFiles: ["test", "spec", "__tests__", "tests"],
    docFiles: ["docs", "documentation", "doc"],
    licenseFiles: ["license", "licence"],
    contributingFiles: ["contributing", "contribute"],
    changelogFiles: ["changelog", "history", "changes"],
  },

  // Project type detection patterns
  projectTypes: {
    nodejs: ["package.json"],
    python: ["requirements.txt", "setup.py", "pyproject.toml"],
    rust: ["Cargo.toml"],
    go: ["go.mod"],
    java: ["pom.xml", "build.gradle"],
    php: ["composer.json"],
    csharp: ["*.csproj", "*.sln"],
  },
};
