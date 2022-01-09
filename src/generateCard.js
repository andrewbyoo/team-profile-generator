const fs = require('fs');

const allCards = data => {
  let card
  return console.log(data)
}

const generateCard = data => {
  fs.writeFile('card-index.html', '', (err) => err ? console.error(err) : console.log('card-index has been initiated!'));

};

module.exports = {allCards};
module.exports = {generateCard};
