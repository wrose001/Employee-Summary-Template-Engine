const Manager = require("./lib/manager.js");

const Engineer = require("./lib/engineer.js");

const Intern = require("./lib/intern.js");

const inquirer = require("inquirer");

const path = require("path");

// const jest = require("jest");

const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");


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
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        message: "What type of team member woud you like to add?"
    }
];

// function writeToFile(fileName, data) {
//     let html = `#`

//     fs.writeFile(fileName, html, function(err){
//         if(err) throw err;
//         console.log('SOMETHING');
//     });
// }

const mainHTML = fs.readFileSync('./templates/main.html', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    return data;
  });

let managerArr = "";
let engineerArr = [];
let internArr = [];

function init() {

    inquirer.prompt(managerQuestions).then(function(answers){
        managerArr = new Manager(answers.managers_name, answers.managers_id, answers.managers_email, answers.managers_officeNumber); 
        console.log(answers);
        console.log(managerArr);  
        promptNext();      
        //console.log(answers);
//         const user = answers;
//         axios.get(`https://api.github.com/users/${user.github_username}`).then(resp => {
//     user.avatar_url = resp.data.avatar_url;
//     writeToFile("output/README.md", user);

// })
        // const { github_username, } = answers;
        
    });

    // inquirer.prompt(engineerQuestions).then(function(answers){
        //         console.log(answers);
        //         const user = answers;
        //         axios.get(`https://api.github.com/users/${user.github_username}`).then(resp => {
        //     user.avatar_url = resp.data.avatar_url;
        //     writeToFile("output/README.md", user);
        
        // })
                // const { github_username, } = answers;
                
    // });

    // inquirer.prompt(internQuestions).then(function(answers){
        //         console.log(answers);
        //         const user = answers;
        //         axios.get(`https://api.github.com/users/${user.github_username}`).then(resp => {
        //     user.avatar_url = resp.data.avatar_url;
        //     writeToFile("output/README.md", user);
        
        // })
                // const { github_username, } = answers;
                
    // });

}

function promptNext() {
    inquirer.prompt(list).then(function(data){
        switch (data.teamMember_type){
            case "Engineer": 
                promptEngineer();
                break;
            case "Intern":
                promptIntern();
                break;
            default: createHtml();    
        }
    })
} 

function promptEngineer() {
    inquirer.prompt(engineerQuestions).then(function(answers){
        engineerArr.push(new Engineer(answers.engineers_name, answers.engineers_id, answers.engineers_email, answers.engineers_gitHub));
        promptNext();
    })
}

function promptIntern() {
    inquirer.prompt(internQuestions).then(function(answers){
        internArr.push(new Intern(answers.interns_name, answers.interns_id, answers.interns_email, answers.interns_school));
        promptNext();
    })
}

function createHtml() {
    console.log(managerArr);
    console.log(engineerArr);
    console.log(internArr);
}

init();