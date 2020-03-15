
var PORT = process.env.PORT || 8080;

const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const routes = require("./controllers/burgerController");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.engine("handlebars", exphbs({ defaultLayout: "main" })); 
app.set("view engine", "handlebars");




app.use(routes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
