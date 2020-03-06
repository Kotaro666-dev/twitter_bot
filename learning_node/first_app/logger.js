console.log(`filename: ${__filename}`);
console.log(`dirname: ${__dirname}`);

let url = "https://mylogger.io/log";

function log(message) {
  // Send an HTTP request
  console.log(message);
}

// module.exports.log = log;
// module.exports.endPoint = url;
module.exports = log;
