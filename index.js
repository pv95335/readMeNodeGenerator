const inquirer = require("inquirer");
var fs = require("fs");
const generateReadMe = require("./generateMarkdown");
const generateMarkdown = require("./generateMarkdown");

// Ask the user questions to help generate a ReadMe

const promptProject = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectname",
      message: "What is your project name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a project name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Write a description for your project:",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please write a description for your project!");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "tabelOfContents",
      message: "Do you want to make a table of contents?",
    },
    {
      type: "input",
      name: "install",
      message: "Write the installation process:",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide installation instructions!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "info",
      message: "How will the user use this project?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please describe what you use in this project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contributors",
      message: "Who contributed to this project?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a valid contributor!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "license",
      message: "What licenses are used by this project:",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter what licenses your project uses!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a valid github username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a valid email address!");
          return false;
        }
      },
    },
  ]);
};

// function to write README file
const writeFile = (generateMarkdown) => {
  fs.writeFile("README.md", generateMarkdown, (err) => {
    if (err) throw err;
    console.log("Saved");
  });
};

// function to initialize program
// function init() {
//   inquirer.prompt(readMeInfo).then((response) => {
//     writeFile("README.ms", generateMarkdown({ ...response }));
//   });
// }
// init();

// function call to initialize program
promptProject()
  .then((generateMarkdown) => {
    return generateReadMe(generateMarkdown);
  })
  .then((fileContent) => {
    console.log(fileContent);
    return writeFile(fileContent);
  });
