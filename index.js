const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

let teamArray = [];

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

      if (response.addTeamMember === 'Yes') {
        const generateMember = function() {inquirer
          .prompt(
            {
              type: 'list',
              name: 'memberRole',
              message: 'What is the team member\'s role?',
              choices: ['Employee', 'Manager', 'Engineer', 'Intern'],
            }
          )
          .then(function (response) {
            switch (response.memberRole) {
              case 'Employee':
                inquirer
                  .prompt(employeeQuestions)
                  .then(function (response) {
                    const employee = {
                      name: response.name,
                      id: response.id,
                      email: response.email,
                      role: 'Employee'
                    }
                    teamArray.push(employee)
                    return console.log(teamArray)
                  })
                  .catch(err => {console.log(err)});
                break;
              case 'Manager':

                break;
              case 'Engineer':

                break;
              case 'Intern':

                break;
            }
          })
          .catch(err => {console.log(err)});
        };

        generateMember();
      } else {
        return "Call to generateHTML to be input here"
      }
    })
    .catch(err => {console.log(err)});
};

getTeamMembers();
