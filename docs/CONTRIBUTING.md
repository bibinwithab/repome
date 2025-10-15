# Contributing to repome

Thank you for your interest in contributing to repome! This document provides guidelines and information for contributors.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Git

### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/repome.git
   cd repome
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run tests to ensure everything is working:
   ```bash
   npm test
   ```

## Development Workflow

### Code Style

We use ESLint and Prettier for code formatting. Please ensure your code follows the project's style guidelines:

```bash
# Check for linting errors
npm run lint

# Fix linting errors automatically
npm run lint:fix

# Format code
npm run format
```

### Testing

We use Jest for testing. Please write tests for new features and ensure all tests pass:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Project Structure

```
src/
├── cli/           # CLI interface and prompts
├── analyzer/      # Project analysis logic
├── generator/     # README generation logic
├── utils/         # Utility functions
└── config/        # Configuration and defaults

tests/
├── unit/          # Unit tests
└── integration/   # Integration tests

docs/              # Documentation
examples/          # Example projects
scripts/           # Build and utility scripts
```

## Making Changes

### Feature Development

1. Create a new branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following the coding standards
3. Write tests for your changes
4. Ensure all tests pass
5. Update documentation if needed

### Bug Fixes

1. Create a new branch from `main`:
   ```bash
   git checkout -b fix/issue-description
   ```

2. Fix the bug and add tests to prevent regression
3. Ensure all tests pass

## Pull Request Process

1. Ensure your branch is up to date with `main`
2. Run the full test suite: `npm test`
3. Run linting: `npm run lint`
4. Create a pull request with a clear description
5. Link any related issues
6. Request review from maintainers

### Pull Request Guidelines

- Use clear, descriptive commit messages
- Keep PRs focused and atomic
- Include tests for new functionality
- Update documentation as needed
- Follow the existing code style

## Code Review Process

- All PRs require at least one review
- Address feedback promptly
- Be respectful and constructive in discussions
- Ask questions if something is unclear

## Reporting Issues

When reporting issues, please include:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Environment information (OS, Node.js version, etc.)
- Screenshots if applicable

## Feature Requests

We welcome feature requests! Please:

- Check existing issues first
- Provide a clear description
- Explain the use case
- Consider implementation complexity

## Release Process

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create a release tag
4. Publish to npm

## Community Guidelines

- Be respectful and inclusive
- Help others learn and grow
- Follow the code of conduct
- Contribute constructively

## Getting Help

- Check existing issues and discussions
- Join our community discussions
- Contact maintainers directly if needed

## License

By contributing to repome, you agree that your contributions will be licensed under the ISC License.

Thank you for contributing to repome! 🎉
