const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
//express
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//routes
const routes = require('./controllers/burger-controller.js');
app.use(routes);
//listen
app.listen(PORT, function(){
    console.log("App listening on " + PORT)
})