const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');
let teamArray = [];

// Questions to be prompted for all new team members
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
];

// Question variables for managers, engineers, and interns makes an array of questions from employeeQuestions and adds a new question
// Questions to be prompted for new managers
const managerQuestions = employeeQuestions.concat([
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is the team member\'s office number?',
  },
]);

// Questions to be prompted for new engineers
const engineerQuestions = employeeQuestions.concat([
  {
    type: 'input',
    name: 'github',
    message: 'What is the team member\'s github username?',
  },
]);

// Questions to be prompted for new interns
const internQuestions = employeeQuestions.concat([
  {
    type: 'input',
    name: 'school',
    message: 'What school is the team member from?',
  },
]);

// Function to add team members
const getTeamMembers = () => {
  inquirer
    .prompt(
      {
        type: 'list',
        name: 'addTeamMember',
        message: 'Would you like to add a team member?',
        choices: ['Yes', 'No'],
      },
    )
    .then(function (response) {

      // If yes is selected from the previous prompt, continue with adding a new team member, otherwise call function to generate the HTML
      if (response.addTeamMember === 'Yes') {
        const generateMember = function() {inquirer
          .prompt(
            {
              type: 'list',
              name: 'memberRole',
              message: 'What is the team member\'s role?',
              choices: ['Employee', 'Manager', 'Engineer', 'Intern'],
            },
          )
          .then(function (response) {

            // Prompt certain questions depending on the role previously chosen and add the new team member as an object to the team array and sort the team array so that members with like roles are listed together
            switch (response.memberRole) {
              case 'Employee':
                inquirer
                  .prompt(employeeQuestions)
                  .then(function (response) {
                    const employee = {
                      name: response.name,
                      id: response.id,
                      email: response.email,
                      role: 'Employee',
                    };
                    teamArray.push(employee);
                    teamArray.sort((a, b) => a.role.localeCompare(b.role));
                    console.log(`${response.name} has been added to the team!`);
                    return getTeamMembers();
                  })
                  .catch(err => {console.log(err)});
                break;
              case 'Manager':
                inquirer
                  .prompt(managerQuestions)
                  .then(function (response) {
                    const manager = {
                      name: response.name,
                      id: response.id,
                      email: response.email,
                      officeNumber: response.officeNumber,
                      role: 'Manager',
                    };
                    teamArray.push(manager);
                    teamArray.sort((a, b) => a.role.localeCompare(b.role));
                    console.log(`${response.name} has been added to the team!`);
                    return getTeamMembers();
                  })
                  .catch(err => {console.log(err)});
                break;
              case 'Engineer':
                inquirer
                  .prompt(engineerQuestions)
                  .then(function (response) {
                    const engineer = {
                      name: response.name,
                      id: response.id,
                      email: response.email,
                      github: response.github,
                      role: 'Engineer',
                    };
                    teamArray.push(engineer);
                    teamArray.sort((a, b) => a.role.localeCompare(b.role));
                    console.log(`${response.name} has been added to the team!`);
                    return getTeamMembers();
                  })
                  .catch(err => {console.log(err)});
                break;
              case 'Intern':
                inquirer
                  .prompt(internQuestions)
                  .then(function (response) {
                    const intern = {
                      name: response.name,
                      id: response.id,
                      email: response.email,
                      school: response.school,
                      role: 'Intern',
                    };
                    teamArray.push(intern);
                    teamArray.sort((a, b) => a.role.localeCompare(b.role));
                    console.log(`${response.name} has been added to the team!`);
                    return getTeamMembers();
                  })
                  .catch(err => {console.log(err)});
                break;
            };
          })
          .catch(err => {console.log(err)});
        };

        // Call generateMember function to prompt the user if they would like to add another member
        generateMember();
      } else {

        // Call to generate the HTML
        return console.log("Call to generateHTML to be input here");
      };
    })
    .catch(err => {console.log(err)});
};

// Call to start the initialization process
getTeamMembers();
