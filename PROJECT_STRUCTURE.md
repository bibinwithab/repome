# Project Structure

This document describes the production-level file structure of the repome project.

## Directory Structure

```
repome/
├── src/                          # Source code
│   ├── cli/                      # CLI interface
│   │   ├── cli.js               # Main CLI class
│   │   └── prompts.js           # Interactive prompts
│   ├── analyzer/                 # Project analysis
│   │   └── ProjectAnalyzer.js   # Project type detection and analysis
│   ├── generator/                # README generation
│   │   └── ReadmeGenerator.js   # Markdown generation logic
│   ├── utils/                    # Utility functions
│   │   ├── logger.js            # Logging utility
│   │   └── fileUtils.js         # File system utilities
│   ├── config/                   # Configuration
│   │   └── defaults.js          # Default configuration
│   └── index.js                  # Main entry point
├── docs/                         # Documentation
│   ├── API.md                   # API documentation
│   └── CONTRIBUTING.md          # Contributing guidelines
├── examples/                     # Example projects
│   ├── nodejs-project/          # Node.js example
│   └── python-project/          # Python example
├── .eslintrc.js                 # ESLint configuration
├── .gitignore                   # Git ignore rules
├── package.json                 # Package configuration
├── README.md                    # Project README
├── DOCUMENTATION.md             # Comprehensive documentation
└── PROJECT_STRUCTURE.md         # This file
```

## Module Organization

### CLI Module (`src/cli/`)

- **`cli.js`**: Main CLI class that orchestrates the entire process
- **`prompts.js`**: Handles all interactive user prompts and input collection

### Analyzer Module (`src/analyzer/`)

- **`ProjectAnalyzer.js`**: Detects project type, analyzes dependencies, and file structure

### Generator Module (`src/generator/`)

- **`ReadmeGenerator.js`**: Creates markdown content for README files

### Utils Module (`src/utils/`)

- **`logger.js`**: Centralized logging with different levels and colors
- **`fileUtils.js`**: File system operations and utilities

### Config Module (`src/config/`)

- **`defaults.js`**: Default configuration values and patterns

## Testing Structure

### Unit Tests (`tests/unit/`)

- Test individual modules in isolation
- Mock external dependencies
- Focus on specific functionality

### Integration Tests (`tests/integration/`)

- Test complete workflows
- Test module interactions
- Test real file system operations

## Documentation Structure

### API Documentation (`docs/API.md`)

- Complete API reference
- Method signatures and parameters
- Usage examples

### Contributing Guidelines (`docs/CONTRIBUTING.md`)

- Development setup instructions
- Code style guidelines
- Pull request process

## Example Projects (`examples/`)

- **`nodejs-project/`**: Complete Node.js project example
- **`python-project/`**: Complete Python project example

## Configuration Files

### Code Quality

- **`.eslintrc.js`**: ESLint configuration for code linting
- **`.prettierrc`**: Prettier configuration for code formatting

### Testing

- **`jest.config.js`**: Jest configuration for testing

### Git

- **`.gitignore`**: Git ignore patterns

## Package Configuration

### Scripts

- **`start`**: Run the application
- **`dev`**: Development mode
- **`test`**: Run all tests
- **`test:unit`**: Run unit tests
- **`test:integration`**: Run integration tests
- **`test:watch`**: Run tests in watch mode
- **`test:coverage`**: Run tests with coverage
- **`lint`**: Run ESLint
- **`lint:fix`**: Fix ESLint errors
- **`format`**: Format code with Prettier

### Dependencies

- **Production**: Core dependencies needed at runtime
- **Development**: Dependencies needed only during development

## Benefits of This Structure

### Modularity

- Clear separation of concerns
- Easy to maintain and extend
- Reusable components

### Testability

- Isolated modules for unit testing
- Clear test organization
- Comprehensive test coverage

### Scalability

- Easy to add new features
- Clear module boundaries
- Consistent patterns

### Maintainability

- Well-organized code
- Clear documentation
- Consistent structure

## Development Workflow

1. **Feature Development**: Add new features in appropriate modules
2. **Testing**: Write tests for new functionality
3. **Documentation**: Update documentation as needed
4. **Code Quality**: Run linting and formatting
5. **Integration**: Test complete workflows

## Best Practices

### File Naming

- Use PascalCase for classes
- Use camelCase for functions and variables
- Use kebab-case for files and directories

### Module Exports

- Use CommonJS modules
- Export classes and functions clearly
- Document public APIs

### Error Handling

- Use try-catch blocks appropriately
- Provide meaningful error messages
- Log errors for debugging

### Code Organization

- Keep functions small and focused
- Use meaningful variable names
- Add comments for complex logic

This structure provides a solid foundation for a production-ready CLI tool that is maintainable, testable, and extensible.
