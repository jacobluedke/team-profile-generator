const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const renderer = require("./src/template")

const team = [];


function pickRole(response) {
    inquirer.prompt (
        {
            type: 'list',
            message: 'Select employee role',
            choices: ['Manager', 'Engineer', 'Intern', 'Done'],
            name: 'role',
        }
    )
    .then((response) => {
        if (response.role ===  'Manager') {
            addManager();
            // display message that you are adding a manager
        } else if (response.role === 'Engineer') {
            addEngineer();
            //display message that you are adding an engineer
        } else if (response.role === 'Intern') {
            addIntern();
            //display message that you are adding an intern
        } else {
            writeToFile();
        }

    })
    
};

pickRole();

function writeToFile() {
    inquirer.prompt (
        {
            type: 'input',
            message: 'Name this team',
            name: 'teamName',
        }
    )
    .then((response) => {
        const teamName = response.teamName;
        fs.writeFileSync(path.join(path.resolve(__dirname,"dist"), "index.html"), renderer(team), "utf-8");
    });
};

function addManager() {
    inquirer.prompt (
        [{
            type: 'input',
            message: 'Enter manager name',
            name: 'managerName',
        },
        {
            type: 'list',
            message: 'Select employee ID',
            choices: ['1', '2', '3', '4', '5', '6'],
            name: 'managerId',
        },
        {
            type: 'input',
            message: 'Enter manager email',
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: 'Enter manager office number',
            name: 'managerOfficeNumber',
        }]
    )
    .then((response) => {
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);

        console.log(manager); 
        team.push(manager)

        pickRole();
    })
}

function addEngineer() {
    inquirer.prompt (
        [{
            type: 'input',
            message: 'Enter engineer name',
            name: 'engineerName',
        },
        {
            type: 'list',
            message: 'Select employee ID',
            choices: ['1', '2', '3', '4', '5', '6'],
            name: 'engineerId',
        },
        {
            type: 'input',
            message: 'Enter engineer email',
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: 'Enter engineer GitHub username',
            name: 'engineerUsername',
        }]
    )
    .then((response) => {
        const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerUsername);

        console.log(engineer); 
        team.push(engineer)

        pickRole();
    })
}

function addIntern() {
    inquirer.prompt (
        [{
            type: 'input',
            message: 'Enter intern name',
            name: 'internName',
        },
        {
            type: 'list',
            message: 'Select employee ID',
            choices: ['1', '2', '3', '4', '5', '6'],
            name: 'internId',
        },
        {
            type: 'input',
            message: 'Enter intern email',
            name: 'internEmail',
        },
        {
            type: 'input',
            message: 'Enter intern school',
            name: 'internSchool',
        }]
    )
    .then((response) => {
        const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);

        console.log(intern);        
        team.push(intern);

        pickRole();
        
    })
}
