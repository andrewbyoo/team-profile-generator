const generateCards = data => {
  let allCards = ``;

  // For every object in the data array, creates card template literal
  data.forEach(function (data) {
    let roleSpecific = '';

    // Adjusts the role specific information to whichever role the object is
    switch (data.role) {
      case 'Employee':
        roleSpecific = '';
        break;
      case 'Manager':
        roleSpecific = `${data.officeNumber}`;
        break;
      case 'Engineer':
        roleSpecific = `<a href="https://github.com/${data.github}">${data.github}</a>`;
        break;
      case 'Intern':
        roleSpecific = `${data.school}`;
        break;
    };

    // Template for each team member
    let card = `
    <article class="card shadow-lg" style="width: 20rem;">
      <section class="card-header">
        <h2 class="memberName">${data.name}</h2>
        <p class="memberRole">${data.role}</p>
      </section>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${data.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
        <li class="list-group-item">${roleSpecific}</li>
      </ul>
    </article>`;

    // Whenever a team member card is generated, it will get added to the allCards template literal
    allCards = allCards + card;
  });
  return allCards;
};

module.exports = {generateCards};
