# readme-generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![node-current](https://img.shields.io/node/v/inquirer)
![npm](https://img.shields.io/npm/v/jest)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-944058?style=for-the-badge&logo=jest&logoColor=white)



## <h2 id="description"> Description </h2>

A command line app that generates a README file based on user inputs. A user will be prompted
with questions for information about the project. Once answered, 
- Once answered, a README file will be generated with the following sections: Description,
Table of Contents, Installation, Usage, Contributing, Tests, License and Questions.
- A user can select a license from a list provided.
- Once selected, a badge will be generated.
- A user will be prompted to enter their email and GitHub username.
- Once entered, these informations are then populated the Questions section. 

### Preview

The end product should resemble the mock-up provided below:

[![walkthrough](./demo/demo.gif)](https://youtu.be/HIqxDzmgFdE)


## <h2 id="table-of-contents"> Table of Contents </h2>

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution)
- [Tests](#tests)
- [License](#license)


## <h2 id="installation"> Installation </h2>
[(Back to top)](#table-of-content)

To use this project, first clone the repo on your device using the commands below:

    git init
    git clone https://github.com/Supasiti/readme-generator.git

Then install all the required libraries by running the follow command

    npm i 


## <h2 id="usage"> Usage </h2>
[(Back to top)](#table-of-content)

To use this code, run

    node index.js

and follow all the prompts. The output file will be located in `/output/` folder.


## <h2 id="tests"> Tests </h2>
[(Back to top)](#table-of-content)

This project uses [Jest](https://jestjs.io) testing framework. This can be set up by running the following command:

    npm i --save-dev

Once the framework is downloaded, To test, run

    npm run test


## <h2 id="license"> License </h2>
[(Back to top)](#table-of-content)

Licensed under the [MIT](https://opensource.org/licenses/MIT) license.
