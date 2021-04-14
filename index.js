// THIS IS WHERE YOUR MAIN LOGIC WILL LIE

const path = require("path");
// const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const pageTemplate = require('./src/page-template');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern")
const teamMembers = [];
//   ...Inquirer prompt and the functions that will ask users about manager, intern, and engineer.


// function runApp() {
// You would first require ALL of the files and node packages needed
// Engineer, Manager, Intern, 


// REQUIRE that page-template.js
// We are receiving that anonymous function
// Giving the name of pageTemplate

// And now, we can use that pageTemplate as a function, which can ACCEPT a parameter
// pageTemplate(answers_from_inquirer_prompt);
// INDEX FILES ARE CONSIDERED THE ENTRY POINT TO YOUR APPLICATION

// IF THIS IS YOUR ENTRY POINT, YOU MUST DO YOUR INQUIRER HERE

const fs = require('fs')
const inquirer = require('inquirer');

function runApp() {
    createManager()

    function createManager() {
        inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'Enter Manager name'

            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter Manager ID'

            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter Manager email address'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Enter Manager office number'
            },
        ]).then(answers => {
            console.log(answers.name, answers.id, answers.email, answers.officeNumber);
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            console.log(manager);
            teamMembers.push(manager);
            console.log(teamMembers);


        })
    }


    // THIS IS WHERE YOU DO YOUR FS WRITEFILE STUFF

    // buildTeam function needs to go somewhere here 

    function buildTeam() {
        // Create the output directory if the output path doesn't exist
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }

}

// }
runApp();