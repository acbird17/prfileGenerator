const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const fs = require("fs");
const path = require("path");

const render = require("./lib/generateHtml");
const team = [];

class generateTeam {
  manager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "mgrName",
          message: "What is the Manager's name?",
        },
        {
          type: "input",
          name: "mgrID",
          message: "What is the Manager's employee id number?",
        },
        {
          type: "input",
          name: "mgrEmail",
          message: "What is the Manager's email address?",
        },
        {
          type: "input",
          name: "mgrOffice",
          message: "What is the Manager's office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.mgrName,
          answers.mgrID,
          answers.mgrEmail,
          answers.mgrOffice
        );
        team.push(manager);
        this.titlePrompt();
      });
  }
  titlePrompt() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "title",
          message:
            "Would you like to add another team member? Choose their title below or select 'No more team members' to continue.",
          choices: ["Engineer", "Intern", "No more team members"],
        },
      ])
      .then((answers) => {
        if (answers.title === "Engineer") {
          this.engineer();
        } else if (answers.title === "Intern") {
          this.intern();
        } else {
          var html = render(team);
          fs.writeFile("teamProfile.html", render(team), (err) => {
            if (err) {
              return console.log("test");
            }
            console.log("teamProfile.html file has been created!");
          });
        }
      });
  }
  engineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the Engineer's name?",
        },
        {
          type: "input",
          name: "engineerID",
          message: "What is the Engineer's employee id number?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the Engineer's email address?",
        },
        {
          type: "input",
          name: "engineerGit",
          message: "What is the Engineer's Github username?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerID,
          answers.engineerEmail,
          answers.engineerGit
        );
        team.push(engineer);
        this.titlePrompt();
      });
  }
  intern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the Intern's name?",
        },
        {
          type: "input",
          name: "internID",
          message: "What is the Intern's employee id number?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the Intern's email address?",
        },
        {
          type: "input",
          name: "internSchool",
          message: "What school does the Intern attend?",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internID,
          answers.internEmail,
          answers.internSchool
        );
        team.push(intern);
        this.titlePrompt();
      });
  }
}

const run = new generateTeam();
run.manager();
