const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, Number(id), email);
    this.officeNumber = Number(officeNumber);
  };
};

Manager.prototype.getOfficeNumber = function() {return `Office Number: ${this.officeNumber}`};

module.exports = Manager;
