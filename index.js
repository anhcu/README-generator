// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const utils = require('utils');
// const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

    const questions = [{  
        type:"input",
        message: "What is the title project?",
        name:"Title"
    },{
        type:"input",
        message: "What is your Github user name?",
        name:"Github"
    },{
        typr:"input",
        message: "What is your email address?",
        name: "Email"
    },{
        type: "input",
        message: "Explain your project?",
        name: "Description" 
    },{
        type: "input",
        message: "What was your motivation?",
        name: "Motivation"
    },{
        type: "input",
        message: "What does the user need to install to run this app?",
        name: "Install"
    },{
        type: "input",
        message: "What command do you need to run this app?",
        name: "Instructions"
    },{    
        type: "input",
        message: "How are test initiated on your project?",
        name: "Question"
    },{    
        type: "input",
        message: "What did I learn?",
        name: "Learn"
    },{
        type: "input",
        message: "How to contact me?",
        name: "Contact"
    },{
        type: "list",
        message: "What license was used for this README?",
        name: "License",
        choices: ['The MIT License' , 'The GPL License','Apache License', 'GNU License', 'N/A']
    },{
        type: "input",
        message: "Who contributed to this project?",
        name: "Contributor"
    
},    

]

//function to write REAMME file
function writeToFile(fileName,data){

fs.writeFile(fileName, data, function(err) {
    console.log(fileName)
    console.log(data)
    if (err) {
        return console.log(err);
    } else {
        console.log ("Successfully wrote:" + fileName);
    }
    })
}

function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('test.md', generateMarkdown(data));
        console.log(data)
    })
}


// Function call to initialize app
init();


