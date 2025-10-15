/**
 * File utility functions for repome
 */

const fs = require("fs");
const path = require("path");

class FileUtils {
  /**
   * Check if a file exists
   * @param {string} filePath - Path to the file
   * @returns {boolean} - True if file exists
   */
  static exists(filePath) {
    try {
      return fs.existsSync(filePath);
    } catch (error) {
      return false;
    }
  }

  /**
   * Read a JSON file
   * @param {string} filePath - Path to the JSON file
   * @returns {Object|null} - Parsed JSON or null if error
   */
  static readJson(filePath) {
    try {
      const content = fs.readFileSync(filePath, "utf8");
      return JSON.parse(content);
    } catch (error) {
      return null;
    }
  }

  /**
   * Write content to a file
   * @param {string} filePath - Path to write to
   * @param {string} content - Content to write
   * @returns {boolean} - True if successful
   */
  static writeFile(filePath, content) {
    try {
      fs.writeFileSync(filePath, content, "utf8");
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Read directory contents
   * @param {string} dirPath - Directory path
   * @returns {string[]} - Array of file names
   */
  static readDir(dirPath) {
    try {
      return fs.readdirSync(dirPath);
    } catch (error) {
      return [];
    }
  }

  /**
   * Get file extension
   * @param {string} filePath - File path
   * @returns {string} - File extension
   */
  static getExtension(filePath) {
    return path.extname(filePath).toLowerCase();
  }

  /**
   * Check if file matches any pattern
   * @param {string} fileName - File name to check
   * @param {string[]} patterns - Array of patterns to match
   * @returns {boolean} - True if matches any pattern
   */
  static matchesPattern(fileName, patterns) {
    return patterns.some((pattern) =>
      fileName.toLowerCase().includes(pattern.toLowerCase())
    );
  }

  /**
   * Find files matching patterns in directory
   * @param {string} dirPath - Directory to search
   * @param {string[]} patterns - Patterns to match
   * @returns {string[]} - Array of matching file names
   */
  static findFiles(dirPath, patterns) {
    const files = this.readDir(dirPath);
    return files.filter((file) => this.matchesPattern(file, patterns));
  }

  /**
   * Get file size in bytes
   * @param {string} filePath - Path to file
   * @returns {number} - File size in bytes
   */
  static getFileSize(filePath) {
    try {
      const stats = fs.statSync(filePath);
      return stats.size;
    } catch (error) {
      return 0;
    }
  }

  /**
   * Check if path is a directory
   * @param {string} path - Path to check
   * @returns {boolean} - True if directory
   */
  static isDirectory(path) {
    try {
      const stats = fs.statSync(path);
      return stats.isDirectory();
    } catch (error) {
      return false;
    }
  }
}

module.exports = FileUtils;
