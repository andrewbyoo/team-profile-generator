const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const {generateBeforeCards, generateAfterCards} = require('./src/generateHTML');
const generateCard = require('./src/generateCard');
const generateCSS = require('./src/generateCSS');
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

// Creates an HTML file in the dist folder by calling on the generateHTML.js and generateCard.js files in the src folder
const writeToHTML = data => {
  const fullHTML = generateBeforeCards + generateCard.generateCards(data) + generateAfterCards;
  fs.writeFile('./dist/index.html', fullHTML, (err) => err ? console.error(err) : console.log('Team index.html has been generated!'));
  writeToCSS();
};

// Creates a CSS file in the dist folder by calling on the generateCSS.js file in the src folder
const writeToCSS = () => {
  fs.writeFile('./dist/style.css', generateCSS.generateCSS, (err) => err ? console.error(err) : console.log('Stylesheet has been generated!'))
}

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
                    const {name, id, email} = response;
                    const employee = new Employee(name, id, email);
                    const employeeObject = {
                      name: employee.getName(),
                      id: employee.getId(),
                      email: employee.getEmail(),
                      role: employee.getRole(),
                    };
                    teamArray.push(employeeObject);
                    console.log(`${employeeObject.name} has been added to the team!`);
                    return getTeamMembers();
                  })
                  .catch(err => {console.log(err)});
                break;
              case 'Manager':
                inquirer
                  .prompt(managerQuestions)
                  .then(function (response) {
                    const {name, id, email, officeNumber} = response;
                    const manager = new Manager(name, id, email, officeNumber);
                    const managerObject = {
                      name: manager.getName(),
                      id: manager.getId(),
                      email: manager.getEmail(),
                      officeNumber: manager.getOfficeNumber(),
                      role: manager.getRole(),
                    };
                    teamArray.push(managerObject);
                    console.log(`${managerObject.name} has been added to the team!`);
                    return getTeamMembers();
                  })
                  .catch(err => {console.log(err)});
                break;
              case 'Engineer':
                inquirer
                  .prompt(engineerQuestions)
                  .then(function (response) {
                    const {name, id, email, github} = response;
                    const engineer = new Engineer(name, id, email, github);
                    const engineerObject = {
                      name: engineer.getName(),
                      id: engineer.getId(),
                      email: engineer.getEmail(),
                      github: engineer.getGithub(),
                      role: engineer.getRole(),
                    };
                    teamArray.push(engineerObject);
                    console.log(`${engineerObject.name} has been added to the team!`);
                    return getTeamMembers();
                  })
                  .catch(err => {console.log(err)});
                break;
              case 'Intern':
                inquirer
                  .prompt(internQuestions)
                  .then(function (response) {
                    const {name, id, email, school} = response;
                    const intern = new Intern(name, id, email, school);
                    const internObject = {
                      name: intern.getName(),
                      id: intern.getId(),
                      email: intern.getEmail(),
                      school: intern.getSchool(),
                      role: intern.getRole(),
                    };
                    teamArray.push(internObject);
                    console.log(`${internObject.name} has been added to the team!`);
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
        // Prompts the user on how they would like to sort the team members
        inquirer
          .prompt(
            {
              type: 'list',
              name: 'sortStyle',
              message: 'Which property would you like the members to be sorted by?',
              choices: ['Name', 'Id number', 'Role'],
            },
          )
          .then(function (response) {
            let sortedArray = [];

            // Sorts the team array by the sort style the user selected
            switch (response.sortStyle) {
              case 'Name':
                teamArray.sort((a, b) => a.name.localeCompare(b.name));
                break;
              case 'Id number':
                teamArray.sort((a, b) => a.id.localeCompare(b.id));
                break;
              case 'Role':
                // Sorts team members in order of Manager, Engineer, Employee, then Intern and outputs the array as the sortedArray variable
                for (let i = 0; i < teamArray.length; i++) {if (teamArray[i].role == 'Manager') {sortedArray.push(teamArray[i])}};
                for (let i = 0; i < teamArray.length; i++) {if (teamArray[i].role == 'Engineer') {sortedArray.push(teamArray[i])}};
                for (let i = 0; i < teamArray.length; i++) {if (teamArray[i].role == 'Employee') {sortedArray.push(teamArray[i])}};
                for (let i = 0; i < teamArray.length; i++) {if (teamArray[i].role == 'Intern') {sortedArray.push(teamArray[i])}};
                break;
            };

            // If sort is by role, redefine teamArray as sortedArray
            if (response.sortStyle === 'Role') {teamArray = sortedArray};

            // Call to generate the HTML and CSS file
            return writeToHTML(teamArray);
          })
          .catch(err => {console.log(err)});
      };
    })
    .catch(err => {console.log(err)});
};

// Call to start the initialization process
getTeamMembers();
