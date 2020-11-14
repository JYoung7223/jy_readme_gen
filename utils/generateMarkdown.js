// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${data.licenseType[1]}
## Description
${data.description}
## Table of Contents
* [\`Project\`](#)
* [\`Description\`](#Description)
* [\`Table of Contents\`](#Table%20of%20Contents)
* [\`1nstallation Steps\`](#Installation%20Steps)
* [\`Usage Information\`](#Usage%20Information)
* [\`Testing\`](#Testing)
* [\`License\`](#License)
* [\`Contributing\`](#Contributing)
* [\`Questions\`](#Questions)
* [\`Sample\`](#Sample)
## Installation Steps
To install this project, do the following:
${printSteps(data.install)}
## Usage Information
To use this project, do the following:
${printSteps(data.usage)}
## Testing
To test this project, do the following:
${printSteps(data.test)}
## License
This project is provided under the ${data.licenseType[0]} license. For more information on license details click here ${data.licenseType[1]}
## Contributing
If you wish to contribute, do the following:
${printSteps(data.contribute)}
## Questions
If you have any question about this repo, you may open an issue or contact me directly at ${data.contact}
You can find more of my work at [My Github Repo](https://github.com/${data.github} "My GitHub Repo")
## Sample
Deployed project can be found at: ${data.deployURL}
Below is a sample screenshot:
![Project Sample](${data.demoURL} "Project Sample")
`;
}

// function to print an array in ordered list format
function printSteps(steps){
  let response = "";
  if((steps == null)||(steps.length < 1)){
    return;
  }

  let type = typeof steps;
  if(type === "string"){
    return `> ${steps}`;
  }

  let line = 1;
  steps.forEach((step) => {
    if(step.trim().length > 0){
      response += `> ${line}. ${step}`+"\n";
      line++;
    }
  });
  return response;
}


module.exports = {generateMarkdown};
