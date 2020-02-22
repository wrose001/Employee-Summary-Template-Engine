const inquirer = require("inquirer");

const jest = require("jest");

const fs = require("fs");

const questions = [

    {
        type: "input",
        name: "managers_name",
        message: "What is your manager's name?"
    },
    {
        type: "input",
        name: "managers_id",
        message: "What is your manager's id?"
    },
    {
        type: "input",
        name: "managers_email",
        message: "What is your manager's email?"
    },
    {
        type: "input",
        name: "managers_office#",
        message: "What is your manager's office number?"
    },
    {
        type: "list",
        name: "teamMember_type",
        choices: ["Manager", "Engineer", "Intern"],
        message: "What type of team member woud you like to add?"
    },
    {
        type: "input",
        name: "intern_name",
        message: "What is your intern's name?"
    },
    {
        type: "input",
        name: "interns_id",
        message: "What is your intern's id?"
    },
    {
        type: "input",
        name: "interns_email",
        message: "What is your intern's email?"
    },
    {
        type: "input",
        name: "interns_school",
        message: "What is your intern's school?"
    },
    {
        type: "input",
        name: "managers_id",
        message: "What is your manager's id?"
    },
    {
        type: "input",
        name: "engineers_name",
        message: "What is your engineer's name?"
    },
    {
        type: "input",
        name: "engineers_id",
        message: "What is your engineer's id?"
    },
    {
        type: "input",
        name: "engineers_email",
        message: "What is your engineer's email?"
    },
    {
        type: "input",
        name: "emgineers_github",
        message: "What is your engineer's GitHub username?"
    }
];