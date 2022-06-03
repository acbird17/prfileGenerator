const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Test", 1, "test@test.com", testValue);
  expect(e.office).toBe(testValue);
});

test('getTitle() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Test", 1, "test@test.com", 100);
  expect(e.getTitle()).toBe(testValue);
});

test("can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Test", 1, "test@test.com", testValue);
  expect(e.getOffice()).toBe(testValue);
});
