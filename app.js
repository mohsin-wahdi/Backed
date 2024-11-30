// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url == "/about") {
//     res.end("This is About Page");
//   }
//   if (req.url == "/home") {
//     res.end("This is Home Page");
//   }
//   if (req.url == "/contact") {
//     res.end("This is Contact Page");
//   }
// });

// server.listen(3000);

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.listen(3000);
