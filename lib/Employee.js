class Employee {
  constructor(name, id, email) {
    this.name = name.split(' ').map((word) => {
      return word.substring(0,1).toUpperCase() + word.substring(1);
    }).join(' ');
    this.id = Number(id);
    this.email = email;
  }
}

Employee.prototype.getName = function() {return this.name};
Employee.prototype.getId = function() {return `ID: ${this.id}`};
Employee.prototype.getEmail = function() {return `Email: ${this.email}`};
Employee.prototype.getRole = function() {return this.constructor.name};

module.exports = Employee;
