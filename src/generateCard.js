const generateCards = data => {
  let allCards = ``;

  data.forEach(function (data) {
    let roleSpecific = '';

    switch (data.role) {
      case 'Employee':
        roleSpecific = '';
        break;
      case 'Manager':
        roleSpecific = `Office Number: ${data.officeNumber}`;
        break;
      case 'Engineer':
        roleSpecific = `GitHub: ${data.github}`;
        break;
      case 'Intern':
        roleSpecific = `School: ${data.school}`;
        break;
    };

    let card = `<article class="card shadow-lg" style="width: 20rem;">
  <section class="card-header">
    <h2 class="memberName">${data.name}</h2>
    <p class="memberRole">${data.role}</p>
  </section>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${data.id}</li>
    <li class="list-group-item">Email: ${data.email}</li>
    <li class="list-group-item">${roleSpecific}</li>
  </ul>
</article>`;
    allCards = allCards + card;
  });
  return allCards;
};

module.exports = {generateCards};
