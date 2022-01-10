const Manager = require('../lib/Manager');

describe('Manager', () => {
  const testManager = new Manager('keanu reeves', '299', 'keanu@example.com', '3');
  describe('name', () => {
    it('calling getName() should return each name capitalized', () => {
      const check = 'Keanu Reeves';
      expect(testManager.name).toEqual(check);
    });
  });
  describe('id', () => {
    it('calling getId() should return "ID: ###"', () => {
      const check = 'ID: 299';
      expect(testManager.getId()).toEqual(check);
    });
  });
  describe('email', () => {
    it('calling getEmail() should return the email address', () => {
      const check = 'keanu@example.com';
      expect(testManager.getEmail()).toEqual(check);
    });
  });
  describe('office number', () => {
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
