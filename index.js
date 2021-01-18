const generateMarkdown = require("./utils/generateMarkdown");

const fs = require("fs");

// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  // change the parameters and the values of each object for the README guide
  {
    type: "input",
    name: "title",
    message: "Enter your Project Title (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a name for the Title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your Project (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter description of the Project!");
        return false;
      }
    },
  },

  {
    type: "checkbox",
    name: "contents",
    message: "Select all Contents you will need for this README",
    choices: ["Installation", "Usage", "Credits", "License"],
  },

  {
    type: "input",
    name: "installation",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use.",
  },
  {
    type: "input",
    name: "credits",
    message:
      "List all collaborators with links to their GitHub profiles.  Or If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.",
  },
  {
    type: "confirm",
    name: "confirmLicense",
    message: "Is there a License?",
    default: true,
  },
  {
    type: "list",
    name: "license",
    message: "Select the License you will need for this README",
    choices: ["AGPL-3.0", "GPL-3.0", "MPL-2.0", "MIT", "BSL-1.0"],
  },
  {
    type: "input",
    name: "licenseYear",
    message: "Provide the year of the License",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(fileName);
  // console.log(data);
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
