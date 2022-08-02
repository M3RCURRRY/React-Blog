var express = require("express");
var app = express();

const users = [
  {
    id: 1,
    username: "Vladislav132",
    password: "vlad132",
    isAdmin: false,
  },
  {
    id: 2,
    username: "Admin",
    password: "p@ssw0rd",
    isAdmin: true,
  },
  {
    id: 3,
    username: "Abobus",
    password: "aboba",
    isAdmin: false,
  },
  {
    id: 4,
    username: "Grisha2008",
    password: "2008ru",
    isAdmin: false,
  }
]

app.get('/', function(req, res) {
  res.send("Use /users route to get JSON  ");
})

app.listen(3012, function () {
  console.log("API app started");
});