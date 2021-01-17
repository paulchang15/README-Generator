// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.confirmLicense !== "none") {
    `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    console.log("working");
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.contents);

  return `# ${data.title}
  
  ## Description

  ${data.description}

  ## Table of Contents
  
  ${tableContents(data.contents)}

  ## Installation

  ${data.installation}

  ## Usage 

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License

  ${renderLicenseBadge(data)}

  `;
}

function tableContents(contents) {
  let tableString = "";
  if (contents.find((val) => val === "Installation")) {
    tableString += "\n  * [Installation](#installation) ";
  }
  if (contents.find((val) => val === "Usage")) {
    tableString += "\n  * [Usage](#usage) ";
  }
  if (contents.find((val) => val === "Credits")) {
    tableString += "\n  * [Credits](#credits) ";
  }
  if (contents.find((val) => val === "License")) {
    tableString += "\n  * [License](#license) ";
  }
  return tableString;
}
module.exports = generateMarkdown;
// ${renderLicenseBadge(data.license)}
// ${renderLicenseLink(data.license)}
