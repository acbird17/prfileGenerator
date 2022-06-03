const Employee = require("../lib/employee");

test("can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("can set name via constructor arguments", () => {
  const name = "Alex";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Test", testValue);
  expect(e.id).toBe(testValue);
});

test("can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Test", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("can get name via getName()", () => {
  const testValue = "Alex";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("can get id via getID()", () => {
  const testValue = 100;
  const e = new Employee("Test", testValue);
  expect(e.getID()).toBe(testValue);
});

test("can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Test", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test('getTitle() should return "Employee"', () => {
  const testValue = "Employee";
  const e = new Employee("Alex", 1, "test@test.com");
  expect(e.getTitle()).toBe(testValue);
});
