
const inquirer = require('inquirer');
const fs = require('fs');
const genMD = require("./utils/generateMarkdown.js");
const FILENAME = "./README.md";

// array of possible license types
const licenseTypes = new Map([
    ['MIT', "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"],
    ["Apache 2.0", "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"],
    ["GPL 3.0", "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"],
    ["BSD 3", "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"],
    ["None", "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"]
]);

// 2D Map array of questions for user in the format [ [ name, [type, message, choices]], ...]
const questions = new Map([
    ["title", ["input", "Enter Project Name:"]],
    ["description", ["input", "Enter project Description:"]],
    ["install", ["editor", "Enter Installation Steps (Save and Close editor when done):"]],
    ["usage", ["editor", "Enter Usage Information (Save and Close editor when done):"]],
    ["contribute", ["input", "Enter Contribution Guidelines:"]],
    ["test", ["editor", "Enter Testing Command (Save and Close editor when done):"]],
    ["github", ["input", "Enter GitHub Username:"]],
    ["contact", ["input", "Enter Contact Email:"]],
    ["licenseType", ["list", "Select License Type:", Array.from(licenseTypes.keys())]],
    ["deployURL", ["input", "Enter URL to deployed Project:"]],
    ["demoURL", ["input", "Enter URL to screenshot/gif of project:"]]
]);

// function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            console.log(`Error:${err}`);
        } else {
            console.log(`Successfully generated ${filename}!`);
        }
    });
}

// function to initialize program
function init() {
    // Ask for title, description, licenseType[0], licenseType[1], github, contact, 
    // deployURL, demoURL, install, usage, contribute, test
    inquirer.prompt([
        {
            name: "title",
            type: questions.get("title")[0],
            message: questions.get("title")[1]
        },
        {
            name: "description",
            type: questions.get("description")[0],
            message: questions.get("description")[1]
        },
        {
            name: "licenseType",
            type: questions.get("licenseType")[0],
            message: questions.get("licenseType")[1],
            choices: questions.get("licenseType")[2]
        },
        {
            name: "contribute",
            type: questions.get("contribute")[0],
            message: questions.get("contribute")[1]
        },
        {
            name: "github",
            type: questions.get("github")[0],
            message: questions.get("github")[1]
        },
        {
            name: "contact",
            type: questions.get("contact")[0],
            message: questions.get("contact")[1]
        },
        {
            name: "deployURL",
            type: questions.get("deployURL")[0],
            message: questions.get("deployURL")[1]
        },
        {
            name: "demoURL",
            type: questions.get("demoURL")[0],
            message: questions.get("demoURL")[1]
        },
        {
            name: "install",
            type: questions.get("install")[0],
            message: questions.get("install")[1]
        },
        {
            name: "usage",
            type: questions.get("usage")[0],
            message: questions.get("usage")[1]
        },
        {
            name: "test",
            type: questions.get("test")[0],
            message: questions.get("test")[1]
        }
    ]).then((data) => {
        // Prepare response data before generating readme
        data.licenseType = [data.licenseType, licenseTypes.get(data.licenseType)];
        data.install = data.install.split("\n");
        data.test = data.test.split("\n");
        data.usage = data.usage.split("\n");
        writeToFile(FILENAME, genMD.generateMarkdown(data));
    }).catch((error) => {
        console.log(`Error:${error}`)
    });
}

// function call to initialize program
init();
