const inquirer = require('inquirer');
const readmeString = require('./src/readme-generator.js');
const { writeToFile } = require('./src/file-writer.js');

//  array of questions for user input
const questions = [
  {
    type : 'input',
    name : 'title',
    message : 'Please enter the project title',
  }
];

// generate README file given the answer
const generateReadme = (answer) => {  
  const content = readmeString.generate(answer);
  writeToFile('./TEST-README.md', content);
}

// TODO: Create a function to initialize app
function init() {
  console.log('Welcome to Thara\'s README generator!\n');
  inquirer
    .prompt(questions)
    .then(generateReadme)
}

// Function call to initialize app
init();
