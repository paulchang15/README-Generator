// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name? (Required)",
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
    name: "github",
    message: "Enter your GitHub Username (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your GitHub Username!");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmAbout",
    message:
      'Would you like to enter some information about yourself for an "About" section?',
    default: true,
  },
  {
    type: "input",
    name: "about",
    message: "Provide some information about yourself:",
    when: ({ confirmAbout }) => {
      if (confirmAbout) {
        return true;
      } else {
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
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
  return inquirer.prompt(questions);
}

// Function call to initialize app
init().then(writeToFile(fileName, data));
