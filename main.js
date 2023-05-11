import names from "./names.js";
import lastnames from "./lastnames.js";
import fs from "fs";
import { timeLog } from "console";
import { Interface } from "readline";

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
    randomusers += `\n{
    name: "${randomName()}",
    lastname: "${randomLastname()}",
    phone: "${randomPhone()}",
    email: "${randomEmail()}"
  },`;
  }
  return randomusers;
};

const randomEmail = () => {
  return `${randomName()}@gmail.com`;
};
fs.appendFileSync("Users.js", `const users = [${generate()}];`);
