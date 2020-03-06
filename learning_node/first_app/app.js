// function sayHello(name) {
//   console.log(`Hello ${name}.`);
// }

// sayHello("Kotaro");
// console.log(window);

// var message = "";
// window.message;

// let sayHello = functon() {

// }
// window.sayHello();

// console.log(module);

/* Creating a module */
// This is a main module

// const log = require("./logger");
// console.log(logger);

// logger = 1;

// log("message");

// Using Docs

// const path = require("path");

// let pathObj = path.parse(__filename);
// console.log(pathObj);

// const os = require("os");

// let free_memory = os.freemem();
// let eol = os.EOL();
// console.log(eol);

// let totalMemory = os.totalmem();
// let freeMemory = os.freemem();
// let occupiedMemory = (freeMemory / totalMemory) * 100;

// console.log(`total memory: ${totalMemory}.`);
// console.log(`free memory: ${freeMemory}.`);
// console.log(`occupied memory: ${occupiedMemory.toFixed(0)}%.`);

const fs = require("fs");

// let files = fs.readdirSync("./");
// console.log(files);

fs.readdir("$", function(error, files) {
  if (error) console.log("Error", error);
  else console.log("Result", files);
});
// console.log(files2);
