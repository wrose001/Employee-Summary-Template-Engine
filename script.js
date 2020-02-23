const inquirer = require("inquirer");

const jest = require("jest");

const fs = require("fs");

const managerQuestions = [

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
        name: "managers_officeNumber",
        message: "What is your manager's office number?"
    }
];

const engineerQuestions = [

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
        name: "engineers_gitHub",
        message: "What is your engineer's GitHub username?"
    }
];

const internQuestions = [

    {
        type: "input",
        name: "interns_name",
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
    }
];

const list = [
    {
        type: "list",
        name: "teamMember_type",
        choices: ["Manager", "Engineer", "Intern", "I don't want to add any more team members"],
        message: "What type of team member woud you like to add?"
    }
];

function writeToFile(fileName, data) {
    let html = `#`

    fs.writeFile(fileName, html, function(err){
        if(err) throw err;
        console.log('SOMETHING');
    });
}

function init() {

    inquirer.prompt(managerQuestions).then(function(answers){
//         console.log(answers);
//         const user = answers;
//         axios.get(`https://api.github.com/users/${user.github_username}`).then(resp => {
//     user.avatar_url = resp.data.avatar_url;
//     writeToFile("output/README.md", user);

// })
        // const { github_username, } = answers;
        
    });

    inquirer.prompt(engineerQuestions).then(function(answers){
        //         console.log(answers);
        //         const user = answers;
        //         axios.get(`https://api.github.com/users/${user.github_username}`).then(resp => {
        //     user.avatar_url = resp.data.avatar_url;
        //     writeToFile("output/README.md", user);
        
        // })
                // const { github_username, } = answers;
                
    });

    inquirer.prompt(internQuestions).then(function(answers){
        //         console.log(answers);
        //         const user = answers;
        //         axios.get(`https://api.github.com/users/${user.github_username}`).then(resp => {
        //     user.avatar_url = resp.data.avatar_url;
        //     writeToFile("output/README.md", user);
        
        // })
                // const { github_username, } = answers;
                
    });

}

init();