const fs = require("fs");
const path = require("path");

// Create a folder
// By default async
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created...");
// });

// Creater a file ( Overwrite file)
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World !",
//   (err) => {
//     if (err) throw err;
//     console.log("File written to...");

//     // File Append
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       " I love Node Js",
//       (err) => {
//         if (err) throw err;
//         console.log("File written to...");
//       }
//     );
//   }
// );

// Read a file
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Rename a file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloWorld.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed");
  }
);
