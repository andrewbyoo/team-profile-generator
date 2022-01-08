const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  const testEngineer = new Engineer('johnny silverhand', '2077', 'silverhand@example.com', 'johnny2077');
  describe('name', () => {
    it('calling getName() should return each name capitalized', () => {
      const check = 'Johnny Silverhand';
      expect(testEngineer.name).toEqual(check);
    });
  });
  describe('id', () => {
    it('calling getId() should return "ID: ###"', () => {
      const check = 'ID: 2077';
      expect(testEngineer.getId()).toEqual(check);
    });
  });
  describe('email', () => {
    it('calling getEmail() should return "Email: @@@@@"', () => {
      const check = 'Email: silverhand@example.com';
      expect(testEngineer.getEmail()).toEqual(check);
    });
  });
  describe('github', () => {
    it('calling getGithub() should return "GitHub: *****', () => {
      const check = 'GitHub: johnny2077';
      expect(testEngineer.getGithub()).toEqual(check);
    });
  });
  describe('role', () => {
    it('calling getRole() should return the class name', () => {
      const check = 'Engineer';
      expect(testEngineer.getRole()).toEqual(check);
    });
  });
});
