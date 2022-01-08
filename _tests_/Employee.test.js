const Employee = require('../lib/Employee');

describe("Employee", () => {
  describe("Initialize", () => {
    it("should return an object when called with the 'new' keyword", () => {
      const testEmployee = new Employee('John', 281, 'johnTestEmail@example.com');

      expect(typeof testEmployee).toEqual('object')
    })
  })
})
