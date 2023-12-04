// const { log } = require("console");
// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("<h1>Hello World</h1>");
//     res.statusCode = 200;
//     res.end();
//   } else if (req.url === "/hello") {
//     res.write("<h1>Hello Guest</h1>");
//     res.statusCode = 200;
//     res.end();
//   } else {
//     res.write("<h1>404 Not Found</h1>");
//     res.statusCode = 200;
//     res.end();
//   }
// });

// server.listen(8000, () => {
//   console.log("Listening to server 8000");
// });

const express = require("express");

const app = express();

app.listen(5000, () => {
  console.log("This server is using port 5000");
});
