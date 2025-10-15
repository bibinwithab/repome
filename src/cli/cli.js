/**
 * Main CLI interface for repome
 */

const ProjectAnalyzer = require("../analyzer/ProjectAnalyzer");
const ReadmeGenerator = require("../generator/ReadmeGenerator");
const Prompts = require("./prompts");
const Logger = require("../utils/logger");
const FileUtils = require("../utils/fileUtils");

class CLI {
  constructor() {
    this.logger = new Logger();
    this.prompts = new Prompts(this.logger);
  }

  /**
   * Main CLI entry point
   */
  async run() {
    try {
      this.showWelcome();
      
      // Analyze the project
      const analyzer = new ProjectAnalyzer(this.logger);
      const projectInfo = analyzer.analyzeProject();
      
      this.showProjectInfo(projectInfo);
      
      // Ask questions
      const answers = await this.prompts.askQuestions(projectInfo);
      
      // Generate README
      const generator = new ReadmeGenerator(projectInfo, this.logger);
      const readmeContent = generator.generateReadme(answers);
      
      // Write README
      this.writeReadme(readmeContent);
      
      this.showSuccess();
      
    } catch (error) {
      this.logger.error(`An error occurred: ${error.message}`);
      process.exit(1);
    }
  }

  /**
   * Show welcome message
   */
  showWelcome() {
    this.logger.welcome("🚀 Welcome to repome - README Generator");
    this.logger.separator();
    console.log();
  }

  /**
   * Show project information
   * @param {Object} projectInfo - Project information
   */
  showProjectInfo(projectInfo) {
    this.logger.file(`Project type detected: ${projectInfo.type || "Unknown"}`);
    this.logger.progress(`Dependencies found: ${projectInfo.dependencies.length}`);
    this.logger.test(`Tests detected: ${projectInfo.hasTests ? "Yes" : "No"}`);
    this.logger.license(`License detected: ${projectInfo.hasLicense ? "Yes" : "No"}`);
    console.log();
  }

  /**
   * Write README to file
   * @param {string} content - README content
   * @param {string} outputPath - Output file path
   */
  writeReadme(content, outputPath = "README.md") {
    if (FileUtils.writeFile(outputPath, content)) {
      this.logger.success(`README.md created successfully at ${outputPath}`);
    } else {
      this.logger.error("Failed to write README.md");
      throw new Error("Failed to write README.md");
    }
  }

  /**
   * Show success message
   */
  showSuccess() {
    console.log();
    this.logger.success("Your README has been generated successfully!");
    this.logger.info("You can now customize it further if needed.");
  }

  /**
   * Show help information
   */
  showHelp() {
    console.log(`
repome - README Generator

Usage:
  repome [options]

Options:
  --help, -h     Show this help message
  --version, -v  Show version number
  --verbose      Enable verbose logging
  --output, -o   Output file path

Examples:
  repome                    # Generate README interactively
  repome --help            # Show help
  repome --version         # Show version
  repome --output README.md # Specify output file
`);
  }

  /**
   * Show version information
   */
  showVersion() {
    const packageJson = FileUtils.readJson("package.json");
    const version = packageJson ? packageJson.version : "unknown";
    console.log(`repome v${version}`);
  }

  /**
   * Handle command line arguments
   * @param {string[]} args - Command line arguments
   */
  handleArguments(args) {
    if (args.includes("--help") || args.includes("-h")) {
      this.showHelp();
      process.exit(0);
    }

    if (args.includes("--version") || args.includes("-v")) {
      this.showVersion();
      process.exit(0);
    }

    if (args.includes("--verbose")) {
      this.logger = new Logger(true);
      this.prompts = new Prompts(this.logger);
    }

    // Handle output path
    const outputIndex = args.findIndex(arg => arg === "--output" || arg === "-o");
    if (outputIndex !== -1 && args[outputIndex + 1]) {
      this.outputPath = args[outputIndex + 1];
    }
  }
}

module.exports = CLI;
