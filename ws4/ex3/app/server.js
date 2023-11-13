let http = require("http");
const url = require("url");
let port = 9000;
function sayHello(personName) {
    if (personName === undefined) {
        return "Hello nameless person"; }
    return "Hello " + personName;
}

let server = http.createServer(function(request, response) {
    response.writeHead(200, {"Access-Control-Allow-Origin": "*"});
    let urlParts = url.parse(request.url, true);
    if (urlParts.path == "/red") {
        response.end("<p>Here is some "
            + "<span style=\"color: red;\">red</span> text</p>");
    } else if (urlParts.path == "/green") {
        response.end("<p>Here is some "
            + "<span style=\"color: green;\">green</span> text</p>");
    } else if (urlParts.path == "/blue") {
        response.end("<p>Here is some "
            + "<span style=\"color: blue;\">blue</span> text</p>");
    } else {
        response.end("<p>This is some plain text</p>");
    }
});
server.listen(port, function() {
    console.log("Server listening on port " + port);
});