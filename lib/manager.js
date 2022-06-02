const Employee = require("./employee");

class Manager extends Employee {
  constructor(id, name, email, office) {
    super(id, name, email);
    this.office = office;
  }
  getOffice() {
    return this.office;
  }
  getTitle() {
    return "Manager";
  }
}

module.exports = Manager;
