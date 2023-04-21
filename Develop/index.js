// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
    type: `input`,
    name: `title`,
    message:`Enter the title of your project`  
    }, 

    {
    type: `input`,
    name: `description`,
    message:`Enter a description of your project` 
    }, 

    {
    type: `input`,
    name: `contents`,
    message:`Enter a Table of Contents` 
    }, 

    {
    type: `input`,
    name: `installation`,
    message:`Installation info`    
    }, 
    
    {
    type: `input`,
    name: `usage`,
    message:`Enter Usage info`     
    },

    {
    type: `list`,
    name: `license`,
    message:`Enter Licensing info`,
    choices: [`MIT`, `Apache`, `GPL`, `BSD`]
    },
    
    {
    type: `input`,
    name: `contributing`,
    message:`List project contributers` 
    }, 
    
    {
    type: `input`,
    name: `tests`,
    message:`Enter testing info` 
    }, 
    
   
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const fileName = `./output/MADE_README.md`
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile(generateMarkdown(data))
    })
}

// Function call to initialize app
init();
