const EventEmitter = require("events");

// create a class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event Lister
myEmitter.on("event", () => console.log("Event Fired"));

// Init Event
myEmitter.emit("event");
