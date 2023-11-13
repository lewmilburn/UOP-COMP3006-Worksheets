// Import Express, use it to initialise the application, and
// determine which port to use.
let express = require("express");
let path = require("path");
let app = express();
let port = 9000;
// Define a route to handle the get request /hello. The route
// should simply return the text "Hello World".
app.get("/hello", function(request, response) {
    response.send("Hello World");
});
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.engine('ejs', require('ejs').__express);
app.use(express.static(path.join(__dirname, "files")));
app.get("/roll", function(request, response) {
    let rand = Math.random();
    let randDice = rand * 6;
    let number = Math.floor(randDice);
    let num = number + 1
    response.render("dicepage", {number: num});
});
// Start the server on the specified port and print a helpful
// message to the console log to state that the server is running.
app.listen(port, function() {
    console.log("Listening on " + port);
});