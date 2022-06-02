const path = require("path");
const fs = require("fs");

const src = path.resolve(__dirname, "../src");

const render = (employees) => {
  const html = [];

  html.push(
    employees
      .filter((employee) => employee.getTitle() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
    employees
      .filter((employee) => employee.getTitle() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
  );
  html.push(
    employees
      .filter((employee) => employee.getTitle() === "Intern")
      .map((intern) => generateIntern(intern))
  );
  return generateIndex(html.join(""));
};

const generateManager = (manager) => {
  let template = fs.readFileSync(path.resolve(src, "manager.html"), "utf8");
  template = insert(template, "name", manager.getName());
  template = insert(template, "email", manager.getEmail());
  template = insert(template, "id", manager.getID());
  template = insert(template, "office", manager.getOffice());
  return template;
};

const generateEngineer = (engineer) => {
  let template = fs.readFileSync(path.resolve(src, "engineer.html"), "utf8");
  template = insert(template, "name", engineer.getName());
  template = insert(template, "email", engineer.getEmail());
  template = insert(template, "id", engineer.getID());
  template = insert(template, "github", engineer.getGithub());
  return template;
};

const generateIntern = (intern) => {
  let template = fs.readFileSync(path.resolve(src, "intern.html"), "utf8");
  template = insert(template, "name", intern.getName());
  template = insert(template, "email", intern.getEmail());
  template = insert(template, "id", intern.getID());
  template = insert(template, "school", intern.getSchool());
  return template;
};

const generateIndex = (html) => {
  const template = fs.readFileSync(path.resolve(src, "index.html"), "utf8");
  return insert(template, "team", html);
};

const insert = (template, placeholder, value) => {
  const pattern = new RegExp("{{" + placeholder + "}}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;
