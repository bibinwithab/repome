# repome Documentation

## Overview

**repome** is a powerful CLI tool that automatically generates beautiful, comprehensive README files for your GitHub projects. It analyzes your project structure, dependencies, and configuration to create professional documentation with minimal user input.

## Features

### 🔍 Automatic Project Analysis

- **Project Type Detection**: Automatically detects Node.js, Python, Rust, Go, and other project types
- **Dependency Analysis**: Scans and lists all dependencies with links to their documentation
- **File Structure Detection**: Identifies test files, documentation, licenses, and other important files
- **Git Integration**: Detects Git repositories and generates appropriate badges and links

### 📝 Smart README Generation

- **Dynamic Content**: Generates content based on your actual project structure
- **Professional Formatting**: Creates well-structured READMEs with proper markdown formatting
- **Badge Integration**: Automatically adds relevant badges for npm, GitHub, and license information
- **Table of Contents**: Generates clickable table of contents based on available sections

### ⚙️ Customization Options

- **Interactive Prompts**: User-friendly prompts with smart defaults
- **Configuration File**: Support for `repome.config.js` for advanced customization
- **Command Line Arguments**: Support for `--help` and `--version` flags
- **Flexible Templates**: Easy to modify and extend templates

## Installation

### Global Installation

```bash
npm install -g repome
```

### Local Installation

```bash
npm install repome
npx repome
```

### Development Installation

```bash
git clone https://github.com/bibinwithab/repome.git
cd repome
npm install
npm link
```

## Usage

### Basic Usage

```bash
repome
```

This will start an interactive session where you'll be prompted for:

- Project name
- Project description
- GitHub username
- Email address
- Contributing guidelines

### Command Line Options

```bash
repome --help     # Show help information
repome --version  # Show version number
```

### Configuration File

Create a `repome.config.js` file in your project root to customize the tool:

```javascript
module.exports = {
  defaults: {
    projectName: "My Awesome Project",
    description: "A project that does amazing things",
    githubUsername: "yourusername",
    email: "your.email@example.com",
    license: "MIT",
    contributing:
      "We welcome contributions! Please read our contributing guidelines.",
  },

  badges: {
    npm: true,
    github: true,
    license: true,
    custom: [
      "![Custom Badge](https://img.shields.io/badge/custom-badge-green)",
    ],
  },

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
};
```

## Supported Project Types

### Node.js Projects

- Detects `package.json` and analyzes dependencies
- Generates npm installation instructions
- Lists available npm scripts
- Creates npm badges

### Python Projects

- Detects `requirements.txt` or `setup.py`
- Generates pip installation instructions
- Supports pipenv and virtual environments

### Rust Projects

- Detects `Cargo.toml`
- Generates cargo installation instructions

### Go Projects

- Detects `go.mod`
- Generates go module instructions

### Generic Projects

- Works with any project type
- Generates basic Git clone instructions

## Generated README Sections

### Automatic Sections

- **Project Title**: With badges and description
- **Table of Contents**: Clickable navigation
- **Installation**: Project-specific installation instructions
- **Usage**: Basic usage examples and available scripts
- **Dependencies**: List of dependencies with links
- **Testing**: Test instructions (if test files detected)
- **Contributing**: Contributing guidelines
- **License**: License information
- **Author**: Author information with GitHub and email links

### Optional Sections

- **Changelog**: If changelog files are detected
- **Roadmap**: Future plans and features
- **FAQ**: Frequently asked questions
- **Screenshots**: Project screenshots and demos

## Badge Generation

The tool automatically generates relevant badges:

### NPM Badges (for Node.js projects)

- Package version
- Download count
- License

### GitHub Badges

- Last commit date
- Open issues count
- Stars count
- Forks count

### Custom Badges

- License information
- Build status
- Coverage reports
- Custom project-specific badges

## File Detection Patterns

The tool automatically detects various file types:

### Test Files

- `test/`, `tests/`, `__tests__/`
- Files containing `test` or `spec`

### Documentation

- `docs/`, `documentation/`
- Files containing `doc`

### License Files

- `LICENSE`, `LICENCE`
- Files containing `license`

### Contributing Files

- `CONTRIBUTING`, `CONTRIBUTE`
- Files containing `contributing`

### Changelog Files

- `CHANGELOG`, `HISTORY`, `CHANGES`
- Files containing `changelog` or `history`

## Examples

### Example 1: Node.js Project

```bash
$ repome
🚀 Welcome to repome - README Generator
=====================================

🔍 Analyzing project structure...
📁 Project type detected: nodejs
📦 Dependencies found: 4
🧪 Tests detected: No
📄 License detected: No

? Project name: My Awesome CLI Tool
? Project description: A powerful command-line tool for developers
? GitHub username: myusername
? Email: my.email@example.com
? Contributing guidelines: Please read our contributing guidelines before submitting PRs

✅ README.md created successfully at README.md

🎉 Your README has been generated successfully!
📝 You can now customize it further if needed.
```

### Example 2: Python Project

```bash
$ repome
🚀 Welcome to repome - README Generator
=====================================

🔍 Analyzing project structure...
📁 Project type detected: python
📦 Dependencies found: 0
🧪 Tests detected: Yes
📄 License detected: Yes

? Project name: My Python Package
? Project description: A Python package for data analysis
? GitHub username: myusername
? Email: my.email@example.com
? Contributing guidelines: Fork the repo and submit a pull request

✅ README.md created successfully at README.md

🎉 Your README has been generated successfully!
📝 You can now customize it further if needed.
```

## Advanced Configuration

### Custom Templates

You can create custom templates by modifying the `ReadmeGenerator` class or by using the configuration file:

```javascript
// repome.config.js
module.exports = {
  templates: {
    header: "# Custom Header\n\nThis is my custom header content.",
    footer: "\n---\n*Generated with repome*",
  },
};
```

### Custom Badge Generation

```javascript
// repome.config.js
module.exports = {
  badges: {
    custom: [
      "![Build Status](https://travis-ci.org/user/repo.svg?branch=master)",
      "![Coverage](https://codecov.io/gh/user/repo/branch/master/graph/badge.svg)",
    ],
  },
};
```

## Troubleshooting

### Common Issues

1. **Permission Denied**: Make sure you have write permissions in the project directory
2. **Package.json Not Found**: Ensure you're running the command in a Node.js project directory
3. **Dependencies Not Detected**: Check that your `package.json` is valid JSON

### Debug Mode

Run with debug information:

```bash
DEBUG=repome node index.js
```

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Changelog

### v1.0.2

- Added automatic project analysis
- Enhanced README templates
- Added badge generation
- Improved file detection
- Added configuration file support

### v1.0.1

- Initial release
- Basic README generation
- Interactive prompts

### v1.0.0

- First stable release

## Support

If you encounter any issues or have questions:

1. Check the [troubleshooting section](#troubleshooting)
2. Search existing [GitHub issues](https://github.com/bibinwithab/repome/issues)
3. Create a new issue with detailed information
4. Contact the maintainer: [@bibinwithab](https://github.com/bibinwithab)

## Roadmap

- [ ] Support for more project types (Java, C#, PHP, etc.)
- [ ] Integration with CI/CD pipelines
- [ ] Template marketplace
- [ ] GUI interface
- [ ] Plugin system
- [ ] Multi-language support

---

_This documentation was generated with repome - A CLI tool for creating beautiful README files_