const Intern = require('../lib/Intern');

describe('Intern', () => {
  const testIntern = new Intern('thomas a anderson', '01101101 01100001 01110100 01110010 01101001 01111000', 'neo@example.com', 'The Matrix');
  describe('name', () => {
    it('calling getName() should return each name capitalized', () => {
      const check = 'Thomas A Anderson';
      expect(testIntern.name).toEqual(check);
    });
  });
});
