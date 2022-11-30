const path = require("path");

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log("File extension " + path.extname(__filename));

// Create path object
console.log("Donne le root :" + path.parse(__filename));

// Concatenate paths

console.log(path.join(__dirname, "test", "hello.html"));
