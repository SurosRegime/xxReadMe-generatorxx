// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === null){
    license = '';
  } else {
    return `[![License: ${license}](https://img.shields.io/badge/license-${license}-blue)](https://opensource.org/license/${license}/)`}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {
//if (license === null){
//  license = '';
//} else {
//  return `[![License: ${license}](https://img.shields.io/badge/license-${license}-blue)](https://opensource.org/license/${license}/)`}
//}

function renderGithubUrl(username){
  if (username === null){
    username = '';
  } else {
    return `[${username}](https://github.com/${username})`
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === null){
    license = '';
  } else {
  return ` Read more about ${license} by clicking `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, license, contributing, tests}) {
  return `# ${title}
  
  ## Badge  
  ${renderLicenseBadge(license)}

  ## Description
    ${description}

  ## Table of Contents (Optional)
   
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributions](#contributing)
  - [Tests](#tests)

  ## Installation
    ${installation}
  
  ## Usage
    ${usage}
  ## Credits
    {credits}
  ## License
    ${license}
  ## Contributing
    ${contributing}
  ## Tests
    ${tests}
  ## Contact

`;
}

module.exports = generateMarkdown;
