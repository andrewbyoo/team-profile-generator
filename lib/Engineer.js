const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  };
};

Engineer.prototype.getGithub = function() {return `GitHub: <a href="https://github.com/${this.github}">${this.github}</a>`};

module.exports = Engineer;
