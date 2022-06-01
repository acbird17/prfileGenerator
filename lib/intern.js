const Employee = require("./employee");

class Intern extends Employee {
  constructor(id, name, email, school) {
    super(id, name, email);
    this.school = school;
  }
  fetchSchool() {
    return this.school;
  }
  fetchTitle() {
    return "Intern";
  }
}

module.exports = Intern;
