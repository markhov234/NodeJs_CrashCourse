const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // if (req.url === "/") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "index.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-type": "text/html" });
  //       res.end(content);
  //     }
  //   );
  // }
  // if (req.url === "/api/users") {
  //   const users = [
  //     { name: "Bob", age: 40 },
  //     { name: "Boby", age: 27 },
  //     { name: "Liette", age: 51 },
  //   ];
  //   res.writeHead(200, { "Content-type": "application/json" });
  //   res.end(JSON.stringify(users));
  // }
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url + ".html"
  );
  // Extension of the file
  let extname = path.extname(filePath);

  // Initial Content type
  let contentType = "text/html";

  // Check ext and set content type

  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "text/json";
      break;
    case ".png":
      contentType = "text/png";
      break;
    case ".jpg":
      contentType = "text/jpg";
      break;
    case ".html":
      contentType = "text/html";
      break;
  }

  // Read file
  console.log(extname);
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, {
              "Content-type": "application/json",
            });
            res.end(content, "utf8");
            console.log;
          }
        );
      } else {
        // Some Server Error
        res.writeHead(500);
        res.end("Server Error:" + err.code);
      }
    } else {
      // Success
      res.writeHead(200, {
        "Content-type": contentType,
      });
      res.end(content, "utf8");
    }
  });
});
const PORT = process.env.port || 5000;
server.listen(PORT, () => console.log("Server running on port " + PORT));
