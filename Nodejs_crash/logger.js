const EventEmitter = require("events");

// create a random id
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    // Call Event
    this.emit("message", { id: uuid.v4(), msg });
  }
}

module.exports = Logger;
