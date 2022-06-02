const path = require("path");
const fs = require("fs");

const source = path.resolve(__dirname, "../src");

const render = (employees) => {
  const html = [];

  html.push(
    employees
      .filter((employee) => employee.getTitle() === "Manager")
      .map((manager) => generateManager(manager))
  );
  console.log(html);
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
  console.log(html);
  return generateIndex(html.join(""));
};

const generateManager = (manager) => {
  let template = fs.readFileSync(path.resolve(source, "manager.html"), "utf8");
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getID());
  template = replacePlaceholders(template, "office", manager.getOffice());
  return template;
};

const generateEngineer = (engineer) => {
  let template = fs.readFileSync(path.resolve(source, "engineer.html"), "utf8");
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getID());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  return template;
};

const generateIntern = (intern) => {
  let template = fs.readFileSync(path.resolve(source, "intern.html"), "utf8");
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getID());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};

const generateIndex = (html) => {
  const template = fs.readFileSync(path.resolve(source, "index.html"), "utf8");
  return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{" + placeholder + "}}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;
