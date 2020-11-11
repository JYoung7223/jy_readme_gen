// array of questions for user
const questions = [
    "Enter Project Name:",
    "Enter project Description:",
    "Enter Installation Steps:",
    "Enter Usage Infomration:",
    "Enter Contribution Guidelines:",
    "Enter Testing Steps:",
    "Select License Type:",
    "Enter GitHub Username:",
    "Enter Contact Email:",
];

// array of possible license types
const licenseTypes = [
    "MIT",
    "Apache 2.0",
    "GPL 3.0",
    "BSD 3",
    "None"
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


const inquirer = require('inquirer');
const fs = require('fs');

// name, location, bio, LinkedIn URL, and GitHub URL
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            message: 'Where are you from?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'What is the URL for your bio?',
            name: 'bio',
        },
        {
            type: 'input',
            message: 'What is the URL for your LinkedIn?',
            name: 'linkedin',
        },
        {
            type: 'input',
            message: 'What is the URL for your GitHub?',
            name: 'github',
        },
    ])
    .then((data) => {
        const { name, location, bio, linkedin, github } = data;
        const filename = "index.html";
        const htmlTemplate = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 text-center bg-dark text-light">
                    <h1>Hello my name is ${name}</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center bg-light text-dark">
                    <h3>I am from ${location}, learn more about me below:</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-4 text-center bg-light text-dark">
                    <p>Bio: ${bio}</p>
                </div>
                <div class="col-4 text-center bg-light text-dark">
                    <p>LinkedIn: ${linkedin}</p>
                </div>
                <div class="col-4 text-center bg-light text-dark">
                    <p>GitHub: ${github}</p>
                </div>
            </div>
        </div>
    </body>
    </html>`;

        fs.writeFile(filename, htmlTemplate, (err) => err ? console.log(err) : console.log('Success!'));
    });
