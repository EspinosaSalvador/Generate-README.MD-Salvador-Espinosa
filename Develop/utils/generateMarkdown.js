// * functions to render license badges in the markdown project and based on the license that was choosen it will change the input
function renderLicenseBadge(license) {
  // * give us the switch that corresponds to the answers
  switch (license) {
    case "MIT":
      return "[![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "APACHE 2.0":
      return "[![License:APACHE2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "[![License:GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD 3":
      return "[![License:BSD3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    default:
      // ! if there is nothing it will not give a badge
      return "";
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "APACHE 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL 3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "BSD 3":
      return "https://opensource.org/licenses/BSD-3-Clause";
    default:
      return "";
  }
}

function renderLicenseSection(license) {
  // * if the licese section is incorrect it will return an empty string or line
  if (!license) return "";
  return `## License
  ${renderLicenseBadge(license)}
This project is licensed under the ${license} license. 
See [LICENSE](${renderLicenseLink(license)}) for more information.`;
}
// * main function genereate the markdown for the README file.
function generateMarkdown(data) {
  return `# ${data.title}

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

To install the necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

## Questions

If you have any questions, please contact me at ${data.email}.
You can also check out my [Github profile](${data.github}).

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
