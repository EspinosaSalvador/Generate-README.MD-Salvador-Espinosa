// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
// Include packages needed for this application

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please, enter a correct project title");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "What licence does your proyect use?",
    choices: ["MIT", "Apache 2.0", "GPL v3.0", "None"],
    validate: (licenseInput) => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Please, select one of the four options.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please, provide a description of the project we are about to do.",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please, help us providing a description for the project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "What steps are needed to install this project?",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log(
          "Please, help us providing the steps required to make the project"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage of this project?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please, enter a correct usage for this project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributing",
    message: "Please provide a contribution guidelines for this project",
    validate: (contributingInput) => {
      if (contributingInput) {
        return true;
      } else {
        console.log("Please, enter a correct usage for this project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "Please provide with test instructions for this project",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Please, enter test instructions for this project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Please provide your Github username",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please, enter your github username");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please, enter your email address");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("the file was saved!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generatorMarkdown(answers);
    writeToFile("generatorREADME.md", markdown);
  });
}

// Function call to initialize app
init();
