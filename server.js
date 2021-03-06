//require npm package: Express
const express = require("express");

const PORT = process.env.PORT || 3002;

const app = express();

// Serve static content from the "public" directory  
app.use(express.static("public"));

// Parse request body as JSON
//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set-up Handlebars.
const exphbs = require("express-handlebars");

//main as default html
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT,()=> {
  console.log("App now listening at localhost:" + PORT);
});
