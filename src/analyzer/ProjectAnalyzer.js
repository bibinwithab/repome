/**
 * Project analyzer for detecting project type and structure
 */

const FileUtils = require("../utils/fileUtils");
const defaults = require("../config/defaults");

class ProjectAnalyzer {
  constructor(logger) {
    this.logger = logger;
    this.projectInfo = {
      type: null,
      dependencies: [],
      devDependencies: [],
      scripts: {},
      files: [],
      hasGit: false,
      hasTests: false,
      hasDocs: false,
      hasLicense: false,
      hasContributing: false,
      hasChangelog: false,
      name: null,
      description: null,
      version: null,
      license: null,
      author: null,
      repository: null,
    };
  }

  /**
   * Analyze the current project
   * @returns {Object} - Project information
   */
  analyzeProject() {
    this.logger.step("Analyzing project structure...");

    // Detect project type
    this.detectProjectType();

    // Analyze project-specific files
    this.analyzeProjectFiles();

    // Analyze file structure
    this.analyzeFileStructure();

    // Check for Git repository
    this.projectInfo.hasGit = FileUtils.exists(".git");

    return this.projectInfo;
  }

  /**
   * Detect the project type based on configuration files
   */
  detectProjectType() {
    const projectTypes = defaults.projectTypes;

    for (const [type, files] of Object.entries(projectTypes)) {
      if (files.some((file) => FileUtils.exists(file))) {
        this.projectInfo.type = type;
        this.logger.debug(`Detected project type: ${type}`);
        break;
      }
    }

    if (!this.projectInfo.type) {
      this.logger.warning("Could not detect project type");
    }
  }

  /**
   * Analyze project-specific configuration files
   */
  analyzeProjectFiles() {
    switch (this.projectInfo.type) {
      case "nodejs":
        this.analyzePackageJson();
        break;
      case "python":
        this.analyzePythonProject();
        break;
      case "rust":
        this.analyzeCargoToml();
        break;
      case "go":
        this.analyzeGoMod();
        break;
      default:
        this.logger.debug("No specific project file analysis needed");
    }
  }

  /**
   * Analyze package.json for Node.js projects
   */
  analyzePackageJson() {
    const packageJson = FileUtils.readJson("package.json");
    if (!packageJson) {
      this.logger.warning("Could not parse package.json");
      return;
    }

    this.projectInfo.dependencies = Object.keys(packageJson.dependencies || {});
    this.projectInfo.devDependencies = Object.keys(
      packageJson.devDependencies || {}
    );
    this.projectInfo.scripts = packageJson.scripts || {};
    this.projectInfo.name = packageJson.name;
    this.projectInfo.description = packageJson.description;
    this.projectInfo.version = packageJson.version;
    this.projectInfo.license = packageJson.license;
    this.projectInfo.author = packageJson.author;
    this.projectInfo.repository = packageJson.repository;

    this.logger.debug(`Found ${this.projectInfo.dependencies.length} dependencies`);
    this.logger.debug(`Found ${this.projectInfo.devDependencies.length} dev dependencies`);
  }

  /**
   * Analyze Python project files
   */
  analyzePythonProject() {
    // Analyze requirements.txt
    if (FileUtils.exists("requirements.txt")) {
      const requirements = FileUtils.readFile("requirements.txt");
      if (requirements) {
        this.projectInfo.dependencies = requirements
          .split("\n")
          .filter((line) => line.trim() && !line.startsWith("#"))
          .map((line) => line.split("==")[0].split(">=")[0].split("<=")[0]);
      }
    }

    // Analyze setup.py
    if (FileUtils.exists("setup.py")) {
      this.logger.debug("Found setup.py");
    }

    // Analyze pyproject.toml
    if (FileUtils.exists("pyproject.toml")) {
      this.logger.debug("Found pyproject.toml");
    }
  }

  /**
   * Analyze Cargo.toml for Rust projects
   */
  analyzeCargoToml() {
    if (FileUtils.exists("Cargo.toml")) {
      this.logger.debug("Found Cargo.toml");
      // TODO: Parse Cargo.toml for dependencies
    }
  }

  /**
   * Analyze go.mod for Go projects
   */
  analyzeGoMod() {
    if (FileUtils.exists("go.mod")) {
      this.logger.debug("Found go.mod");
      // TODO: Parse go.mod for dependencies
    }
  }

  /**
   * Analyze file structure for common patterns
   */
  analyzeFileStructure() {
    const files = FileUtils.readDir(".");
    this.projectInfo.files = files;

    // Check for test files
    this.projectInfo.hasTests = FileUtils.findFiles(
      ".",
      defaults.detection.testFiles
    ).length > 0;

    // Check for documentation
    this.projectInfo.hasDocs = FileUtils.findFiles(
      ".",
      defaults.detection.docFiles
    ).length > 0;

    // Check for license files
    this.projectInfo.hasLicense = FileUtils.findFiles(
      ".",
      defaults.detection.licenseFiles
    ).length > 0;

    // Check for contributing files
    this.projectInfo.hasContributing = FileUtils.findFiles(
      ".",
      defaults.detection.contributingFiles
    ).length > 0;

    // Check for changelog files
    this.projectInfo.hasChangelog = FileUtils.findFiles(
      ".",
      defaults.detection.changelogFiles
    ).length > 0;

    this.logger.debug(`Tests detected: ${this.projectInfo.hasTests}`);
    this.logger.debug(`Docs detected: ${this.projectInfo.hasDocs}`);
    this.logger.debug(`License detected: ${this.projectInfo.hasLicense}`);
  }

  /**
   * Get project information
   * @returns {Object} - Project information
   */
  getProjectInfo() {
    return this.projectInfo;
  }
}

module.exports = ProjectAnalyzer;
