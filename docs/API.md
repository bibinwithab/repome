# API Documentation

## ProjectAnalyzer

### Constructor
```javascript
const analyzer = new ProjectAnalyzer(logger);
```

### Methods

#### `analyzeProject()`
Analyzes the current project and returns project information.

**Returns:** `Object` - Project information object

**Example:**
```javascript
const projectInfo = analyzer.analyzeProject();
console.log(projectInfo.type); // 'nodejs', 'python', etc.
```

#### `getProjectInfo()`
Gets the current project information.

**Returns:** `Object` - Project information object

## ReadmeGenerator

### Constructor
```javascript
const generator = new ReadmeGenerator(projectInfo, logger);
```

### Methods

#### `generateReadme(answers)`
Generates a complete README markdown string.

**Parameters:**
- `answers` (Object): User answers from prompts

**Returns:** `string` - Complete README markdown

**Example:**
```javascript
const readme = generator.generateReadme({
  projectName: 'My Project',
  description: 'A wonderful project',
  githubUsername: 'myuser',
  email: 'my@email.com',
  contributing: 'Contributions welcome!'
});
```

#### `generateBadges()`
Generates badge markdown for the README.

**Returns:** `string` - Badge markdown

#### `generateInstallationInstructions()`
Generates installation instructions based on project type.

**Returns:** `string` - Installation markdown

#### `generateUsageInstructions()`
Generates usage instructions based on available scripts.

**Returns:** `string` - Usage markdown

## Logger

### Constructor
```javascript
const logger = new Logger(verbose);
```

**Parameters:**
- `verbose` (boolean): Enable verbose logging

### Methods

#### `info(message)`
Logs an info message.

#### `success(message)`
Logs a success message.

#### `warning(message)`
Logs a warning message.

#### `error(message)`
Logs an error message.

#### `debug(message)`
Logs a debug message (only if verbose is enabled).

## FileUtils

### Static Methods

#### `exists(filePath)`
Checks if a file exists.

**Parameters:**
- `filePath` (string): Path to the file

**Returns:** `boolean` - True if file exists

#### `readJson(filePath)`
Reads and parses a JSON file.

**Parameters:**
- `filePath` (string): Path to the JSON file

**Returns:** `Object|null` - Parsed JSON or null if error

#### `writeFile(filePath, content)`
Writes content to a file.

**Parameters:**
- `filePath` (string): Path to write to
- `content` (string): Content to write

**Returns:** `boolean` - True if successful

#### `readDir(dirPath)`
Reads directory contents.

**Parameters:**
- `dirPath` (string): Directory path

**Returns:** `string[]` - Array of file names

## Prompts

### Constructor
```javascript
const prompts = new Prompts(logger);
```

### Methods

#### `askQuestions(projectInfo)`
Asks basic project questions.

**Parameters:**
- `projectInfo` (Object): Project information for defaults

**Returns:** `Promise<Object>` - User answers

#### `askConfirmation(message, defaultValue)`
Asks for confirmation.

**Parameters:**
- `message` (string): Confirmation message
- `defaultValue` (boolean): Default value

**Returns:** `Promise<boolean>` - User confirmation

#### `askFilePath(message, defaultPath)`
Asks for file path.

**Parameters:**
- `message` (string): Question message
- `defaultPath` (string): Default path

**Returns:** `Promise<string>` - File path

## CLI

### Constructor
```javascript
const cli = new CLI();
```

### Methods

#### `run()`
Runs the main CLI application.

**Returns:** `Promise<void>`

#### `showHelp()`
Shows help information.

#### `showVersion()`
Shows version information.

#### `handleArguments(args)`
Handles command line arguments.

**Parameters:**
- `args` (string[]): Command line arguments
