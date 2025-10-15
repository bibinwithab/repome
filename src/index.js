#!/usr/bin/env node

/**
 * Main entry point for repome
 */

const CLI = require("./cli/cli");

// Get command line arguments
const args = process.argv.slice(2);

// Create CLI instance
const cli = new CLI();

// Handle command line arguments
cli.handleArguments(args);

// Run the CLI
cli.run();
