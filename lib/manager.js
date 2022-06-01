const Employee = require("./employee");

class Manager extends Employee {
  constructor(id, name, email, office) {
    super(id, name, email);
    this.office = office;
  }
  fetchOffice() {
    return this.office;
  }
  fetchTitle() {
    return "Manager";
  }
}

module.exports = Manager;
