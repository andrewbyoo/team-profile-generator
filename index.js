const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

const employeeQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the team member\'s name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the team member\'s id number?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the team member\'s email address?',
  },
]

const getTeamMembers = () => {
  inquirer
    .prompt(
      {
        type: 'input',
        name: 'addTeamMember',
        message: 'Would you like to add a team member?',
      }
    )
    .then(function (response) {
      let teamArray = [];

      if (response.addTeamMember === 'Yes') {
        inquirer
          .prompt(
            {
              type: 'list',
              name: 'memberRole',
              message: 'What is the team member\'s role?',
              choices: ['Employee', 'Manager', 'Engineer', 'Intern'],
            }
          )
      } else {
        return "Call to generateHTML to be input here"
      }
    })
    .catch(err => {console.log(err)});
};

getTeamMembers();
