const EventEmitter = require("events");
// UUID creates a universal format of an ID
const uuid = require("uuid");

// console.log(uuid.v4());

class Logger extends EventEmitter {
  log(msg) {
    // Call Event
    this.emit("message", { id: uuid.v4(), msg });
  }
}

module.exports = Logger;

const Logger = require("./logger");

const logger = new Logger();
logger.on("message", (data) => console.log("Called Listener", data));

logger.log("Hello World");
logger.log("Hi");
logger.log("Hello");
