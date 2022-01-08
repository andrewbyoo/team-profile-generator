const Manager = require('../lib/Manager');

describe('Manager', () => {
  const testManager = new Manager('Keanu Reeves', '299', 'keanu@example.com', '3');
  describe('office number', () => {
    it('should return a number', () => {
      expect(typeof testManager.officeNumber).toEqual('number');
    });
    it('calling getOfficeNumber() should return "Office Number: ###"', () => {
      const check = 'Office Number: 3';
      expect(testManager.getOfficeNumber()).toEqual(check);
    });
  });
  describe('role', () => {
    it('calling getRole() should return the class name', () => {
      const check = 'Manager';
      expect(testManager.getRole()).toEqual(check);
    });
  });
});
