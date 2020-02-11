#!/usr/bin/env node

const Runner = require('./runner');
const runner = new Runner();

// await runner.collectFiles();
const run = async () => {
  await runner.collectFiles(process.cwd());
  console.log(runner.testFiles);
};

console.log('Running test...');

run();
