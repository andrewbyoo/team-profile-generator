const Manager = require('../lib/Manager');

describe('Manager', () => {
  const testManager = new Manager('Keanu Reeves', '299', 'keanu@example.com', '3');
  describe('office number', () => {
    it('calling getOfficeNumber() should return "Office Number: ###"', () => {
      const check = 'Office Number: 3';
      expect(testManager.getOfficeNumber()).toEqual(check);
    });
  })
})
