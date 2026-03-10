# File Library

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)
![Node](https://img.shields.io/badge/Node.js-green?style=for-the-badge&logo=node.js)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

This is my first Node.js project. I made a library that helps work with files and folders. It's simple, but useful for beginners.

## Project Description

The project is called "task1". It uses Node.js and the Express library (though Express is not used in the code, but it's in the dependencies). The main goal is to show how to create your own library for file operations.

The library is in the `File_Library.js` file and contains functions for:
- Creating files
- Reading files
- Appending text to files
- Checking if files exist
- Creating folders
- Deleting files and folders

## Project Structure

```
task1/
├── File_Library.js    # Here are all the library functions
├── index.js           # Main file that imports the library
├── package.json       # Project configuration
└── README.md          # This file with description
```

## Library Functions

Here is what my library can do:

### Working with files:
- `createFile(filename)` - creates a new file
- `readFile(filename)` - reads the file content
- `appendFile(filename, text)` - adds text to the file
- `fileExists(filename)` - checks if the file exists

### Working with folders:
- `newFolder(foldername)` - creates a new folder
- `delFolder(foldername)` - deletes a folder

### Deletion:
- `delFile(filename)` - deletes a file
- `deleteFileAndFolder(filename, foldername)` - deletes the file and then the folder

All functions print messages to the console about success or error.

## How to Run on Your PC

To run this project on your computer:

1. **Install Node.js** - if you don't have it, download from [nodejs.org](https://nodejs.org/)

2. **Clone or download the project** - copy the files to a folder on your computer

3. **Open terminal** - go to the project folder (where `package.json` is)

4. **Install dependencies**:
   ```
   npm install
   ```
   This will install Express (though it's not used, but it's in package.json)

5. **Run the project**:
   ```
   npm start
   ```
   or
   ```
   node index.js
   ```

After running, you will see messages in the console if something works.

## Notes

This is my first project, so the code might not be perfect. If you find bugs or want to improve, write to me!