class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  fetchName() {
    return this.name;
  }
  fetchID() {
    return this.id;
  }
  fetchEmail() {
    return this.email;
  }
  fetchTitle() {
    return this.title;
  }
}

module.exports = Employee;
