import names from "./names.js";
import lastnames from "./lastnames.js";
import fs from "fs";

let randomusers = ``;

const randomName = () => {
  return names[Math.round(Math.random() * names.length)];
};

const randomLastname = () => {
  return lastnames[Math.round(Math.random() * lastnames.length)];
};

const randomPhone = () => {
  return `+90 5${Math.round(Math.random() * 10 + 10)} ${Math.round(
    Math.random() * 100 + 100
  )} ${Math.round(Math.random() * 1000 + 1000)}`;
};

const generate = () => {
  for (let i = 0; i < 100; i++) {
    var name = randomName();
    var nameMail =
      name.length > 6
        ? `${name.slice(0, 7)}${Math.round(Math.random() * 100)}`
        : `${name}${Math.round(Math.random() * 100)}`;
    randomusers += `\n{
    name: "${name}",
    lastname: "${randomLastname()}",
    phone: "${randomPhone()}",
    email: "${nameMail}@gmail.com"
  },`;
  }
  return randomusers;
};

const randomEmail = () => {
  return `${randomName()}@gmail.com`;
};
fs.appendFileSync("Users.js", `const users = [${generate()}];`);
