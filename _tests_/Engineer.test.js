const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  const testEngineer = new Engineer('johnny silverhand', '2077', 'silverhand@example.com', 'johnny2077');
  describe('name', () => {
    it('calling getName() should return each name capitalized', () => {
      const check = 'Johnny Silverhand';
      expect(testEngineer.name).toEqual(check);
    });
  });
});
