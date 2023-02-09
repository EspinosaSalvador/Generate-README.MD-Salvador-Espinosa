// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
console.log("readme gern running");
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
    name: "licence",
    message: "What licence does your proyect use?",
    choices: ["MIT", "Apache 2.0", "GPL v3.0", "None"],
    validate: (LicenseInput) => {
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
    validate: (InstallationInput) => {
      if (InstallationInput) {
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
