const Employee = require('../lib/Employee');

describe('Employee', () => {
  const testEmployee = new Employee('john wick', '281', 'johnTestEmail@example.com');
  describe('Initialization', () => {
    it('should return an object when called with the "new" keyword', () => {
      expect(typeof testEmployee).toEqual('object');
    });
  });
  describe('name', () => {
    it('should return a string', () => {
      expect(typeof testEmployee.name).toEqual('string');
    });
    it('calling getName() should return each name capitalized', () => {
      const check = 'John Wick';
      expect(testEmployee.name).toEqual(check);
    });
  });
  describe('id', () => {
    it('should return a number', () => {
      expect(typeof testEmployee.id).toEqual('number');
    });
    it('calling getId() should return "ID: ###"', () => {
      const check = 'ID: 281';
      expect(testEmployee.getId()).toEqual(check);
    });
  });
  describe('email', () => {
    it("should return a string", () => {
      expect(typeof testEmployee.email).toEqual('string');
    });
    it('calling getEmail() should return "Email: @@@@@"', () => {
      const check = 'Email: johnTestEmail@example.com';
      expect(testEmployee.getEmail()).toEqual(check);
    });
  });
  describe('role', () => {
    it('calling getRole() should return the class name', () => {
      const check = 'Employee';
      expect(testEmployee.getRole()).toEqual(check);
    });
  });
});
