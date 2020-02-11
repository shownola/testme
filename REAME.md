# README

* A Node-based CLI framework
* Must be able to test browser-based JavaScript apps
* Must require minimal setup
* Must be able to test an entire application
* CLI must have a 'watch mode' to not require continual restarting
* CLI must automatically find and run all files in a project that have the ".test.js" suffix

Implementation Plan:
* File Collection - recursively find all files with .test suffix within a folder. Store a reference to each file found. After getting a full list, execute them one at a time
* Test environment setup
* Test file execution
* Report results
