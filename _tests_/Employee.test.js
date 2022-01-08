const Employee = require('../lib/Employee');

describe("Employee", () => {
  describe("Initialize", () => {
    it("should return an object when called with the 'new' keyword", () => {
      const testEmployee = new Employee('john wick', '281', 'johnTestEmail@example.com');

      expect(typeof testEmployee).toEqual('object');
    })
  });
  describe('name', () => {
    it('should return a string', () => {
      const testEmployee = new Employee('john wick', '281', 'johnTestEmail@example.com');
      expect(typeof testEmployee.name).toEqual('string');
    });
    it('should return a name capitalized', () => {
      const check = 'John Wick';
      const testEmployee = new Employee('john wick', '281', 'johnTestEmail@example.com');
      expect(testEmployee.name).toEqual(check);
    });
  });
  describe('id', () => {
    it("should return a number", () => {
      const testEmployee = new Employee('john wick', '281', 'johnTestEmail@example.com');
      expect(typeof testEmployee.id).toEqual('number');
    })
  });
  describe('email', () => {
    it("should return a string", () => {
      const testEmployee = new Employee('john wick', '281', 'johnTestEmail@example.com');
      expect(typeof testEmployee.email).toEqual('string');
    })
  });
})
