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

const books = [
  { id: 1, name: "JavaScript in hand", price: 300 },
  { id: 2, name: "JavaScript Loops", price: 500 },
  { id: 3, name: "JavaScript variables", price: 600 },
  { id: 4, name: "JavaScript Function", price: 700 },
  { id: 5, name: "JavaScript condition", price: 1000 },
  { id: 6, name: "JavaScript algorithm", price: 2000 },
  { id: 7, name: "JavaScript module", price: 1500 },
];

app.get("/books", (req, res) => {
  // Process request
  // Response generator
  if (req.query.show === "all") {
    return res.json(books);
  }
  if (req.query.price == "1000") {
    const result = books.filter((books) => books.price <= 1000);
    return res.json(result);
  }
  if (req.query.price == "500") {
    const result = books.filter((books) => books.price <= 500);
    return res.json(result);
  }
  if (req.query.price == "2000") {
    const result = books.filter((books) => books.price <= 2000);
    return res.json(result);
  }
  return res.json(books);
});

app.listen(5000, () => {
  console.log("This server is using port 5000");
});
