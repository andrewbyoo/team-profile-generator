const Intern = require('../lib/Intern');

describe('Intern', () => {
  const testIntern = new Intern('thomas a anderson', '01101101 01100001 01110100 01110010 01101001 01111000', 'neo@example.com', 'The Matrix');
  describe('name', () => {
    it('calling getName() should return each name capitalized', () => {
      const check = 'Thomas A Anderson';
      expect(testIntern.name).toEqual(check);
    });
  });
  describe('id', () => {
    it('calling getId() should return "ID: ###"', () => {
      const check = 'ID: 01101101 01100001 01110100 01110010 01101001 01111000';
      expect(testIntern.getId()).toEqual(check);
    });
  });
  describe('email', () => {
    it('calling getEmail() should return "Email: @@@@@"', () => {
      const check = 'Email: neo@example.com';
      expect(testIntern.getEmail()).toEqual(check);
    });
  });
});
