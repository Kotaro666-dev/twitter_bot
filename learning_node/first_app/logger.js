// console.log(`filename: ${__filename}`);
// console.log(`dirname: ${__dirname}`);

const EventEmitter = require("events");
// => class
// const emitter = new EventEmitter();

// let url = "https://mylogger.io/log";

class Logger extends EventEmitter {
  // function in class is called method
  log(message) {
    // Send an HTTP request
    console.log(message);

    // emit =  Making a noise, produce - signalling
    // Raise an event
    this.emit("messageLogged", {
      id: 1,
      url: "https://~~~~",
      data: "message"
    });
  }
}

// module.exports.log = log;
// module.exports.endPoint = url;
module.exports = Logger;
