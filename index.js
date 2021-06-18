// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
// a README needs a title and a short description explaining the what, why, and how of the project.
const questions = [
    {
        type:"input",
        message: "What is your Github user name?",
        name:"Github",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "Email",
    },
    {
        type: "input",
        message: "What was your motivation?",
        name: "Motivation",
    },
    {
        type: "input",
        message: "Why did you build this project?",
        name: "project",
    },
    {
        type: "input",
        message: "What problem does it solve?",
        name: "solution",
    },
    {
        type: "input",
        message: "What did you learn?",
        name: "Learn",
    },
    {
        type: "input",
        message: "What license was used for this README?",
        name: "License",
    },
    {
    type: "input",
    message: "Please add contributors",
    name: "Contributor",
    },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 // sync the written data to the file
//  return fs.writeFileSync(path.join(process.cwd(),))



 
fs.writeFile('./utils/README.md' + fileName, data, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log ("Successfully wrote:" + fileName);
  })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('README.md', generateMarkdown(data));
    })
}
    

// Function call to initialize app
init();
