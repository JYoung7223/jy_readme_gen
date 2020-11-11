// function to generate markdown for README
function generateMarkdown(data) {
// Project Name
// License Type
// Description
// TOC
// Install
// Usage
// License Desc
// Contributing
// Tests
// Questions
// Pic/Gif
  return `
# ${data.title}
[![${data.licenseType}](${data.licenseTypeImg} "${data.licenseType}")](${data.licenseTypeDetails})
## Description
${data.description}
## Table of Contents
* [\`Project\`](#)
* [\`Description\`](#Description)
* [\`Table of Contents\`]
* [\`1nstallation Steps\`](#Installation%20Steps)
* [\`Usage Information\`] (#Usage Information)
* [\`License\`] (#License)
* [\`Contributing\`] (#Contributing)
* [\`Testing\`] (#Testing)
* [\`Questions\`] (#Questions)
* [\`Sample\`] (#Sample)

`;
}

module.exports = generateMarkdown;
