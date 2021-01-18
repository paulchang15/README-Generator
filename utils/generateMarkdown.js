// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `[![License: MIT](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data) {
    return `Copyright ${data} Paul Chang

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
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

  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.confirmLicense)}
  ${renderLicenseSection(data.licenseYear)}
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
