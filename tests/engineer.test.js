const Engineer = require("../lib/engineer");

test("can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Test", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test('getTitle() should return "Engineer"', () => {
  const testValue = "Engineer";
  const e = new Engineer("Test", 1, "test@test.com", "GitHubUser");
  expect(e.getTitle()).toBe(testValue);
});

test("can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Test", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
