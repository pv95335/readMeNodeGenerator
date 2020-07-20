// function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title
  ${data.projectname}

  ## Description
  ${data.description}

  ## Tabel of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#rights)

  ## Installation
  ${data.install}

  ## Usage
  ${data.info}

  ## Contributors
  ${data.contributors}

  ## License
  ${data.license}

  ### Github Username
  ${data.github}
  ### Email Address
  ${data.email}
  `;
}

module.exports = generateMarkdown;
