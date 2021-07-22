const inquirer = require('inquirer');
const readmeString = require('./src/readme-generator.js');
const { writeToFile } = require('./src/file-writer.js');
const { availiableLicenses } = require('./src/license-renderer');

console.log(availiableLicenses);
//  array of questions for user input
const questions = [
  {
    type : 'input',
    name : 'title',
    message : 'Please enter the project title:',
  },
  {
    type: 'input',
    name : 'description',
    message : 'Please describe the project:'
  },
  {
    type: 'input',
    name : 'installation',
    message : 'Please describe how to install the code:'
  },
  {
    type: 'input',
    name : 'usage',
    message : 'Please describe how to use the code:'
  },
  {
    type: 'list',
    name : 'license',
    message : 'What license is the project under:',
    choices : availiableLicenses.map(data => data.name)
  },
  {
    type: 'input',
    name : 'contribution',
    message : 'How to contribute to this project:'
  },
  {
    type: 'input',
    name : 'tests',
    message : 'How to test this code:'
  },
  {
    type: 'input',
    name : 'email',
    message : 'What is your email:'
  },
  {
    type: 'input',
    name : 'github',
    message : 'What is your GitHub username:'
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
