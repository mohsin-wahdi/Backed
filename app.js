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

// writing the code in express js
// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//   res.send("hello world aman");
// });
// app.get("/about", (req, res) => {
//   res.send("About");
// });

// params url me change karne par server me change ho
// app.get("/profile/:username", (req, res) => {
//   res.send(`Hello From ${req.params.username}`);
// });
// app.listen(3000);

// starting ejs
const express = require("express");
const app = express();

// declare the ejs
app.set("view engine", "ejs");

// declare the static files in ejs
app.use(express.static("./public"));

// routing the express
app.get("/", function (req, res) {
  res.render("index");
});
app.get("/contact", function (req, res) {
  res.render("contact");
});

// Handling the error 
app.get("/", function (req, res, next) {
  throw Error("something went Wrong");
});

// declartion the error
app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

app.listen(3000);
