require("dotenv").config();
const http = require("http");
const app = require("./app/app");
const { log } = require("console");

const server = http.createServer(app);

const PORT = process.env.PORT || 8888;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
