// THIS IS WHERE YOUR MAIN LOGIC WILL LIE

const path = require("path");
const fs = require('fs')
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const pageTemplate = require('./src/page-template');
const render = require("./src/page-template")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern")
const employeeArray = [];

pageTemplate(employeeArray);

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
        ]).then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
           
            employeeArray.push(manager);
            console.log(employeeArray)
            buildTeam();
        })
        function buildTeam() {
            if (!fs.existsSync(OUTPUT_DIR)) {
                fs.mkdirSync(OUTPUT_DIR)
            }
            fs.writeFileSync(outputPath, render(employeeArray), "utf-8");
        }
    }   
}
runApp();