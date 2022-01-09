const fs = require('fs');

const allCards = data => {
  let card
  return console.log(data)
}

const generateCard = data => {
  fs.writeFile('card-index.html', '<main></main>', (err) => err ? console.error(err) : console.log('card-index has been initiated!'));
  for (let i = 0; i < data.length; i++) {
    const teamMember = data[i]
    let roleSpecific = '';

    switch (teamMember.role) {
      case 'Employee':
        roleSpecific = '';
        break;
      case 'Manager':
        roleSpecific = `Office Number: ${teamMember.officeNumber}`;
        break;
      case 'Engineer':
        roleSpecific = `GitHub: ${teamMember.github}`;
        break;
      case 'Intern':
        roleSpecific = `School: ${teamMember.school}`;
        break;
    }

    const card = `<article class="card" style="width: 20rem;">
  <section class="card-header">
    <h2 class="memberName">${teamMember.name}</h2>
    <p class="memberRole">${teamMember.role}</p>
  </section>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${teamMember.id}</li>
    <li class="list-group-item">Email: ${teamMember.email}</li>
    <li class="list-group-item">${roleSpecific}</li>
  </ul>
</article>`
  }
};

module.exports = {allCards};
module.exports = {generateCard};
