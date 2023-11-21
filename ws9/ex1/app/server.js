let express = require("express");
let path = require("path");
let http = require("http");
let socketIo = require("socket.io");

// Set up the app and server.
let app = express();
let server = http.createServer(app);

// /resources is static!
app.use(express.static(path.join(__dirname, "resources")));

// Initialise the socket server.
let io = socketIo(server);

io.on("connection", function (socket) {
	// When a connection is received, emit a "confirm
	// connection" event to the client.
	socket.emit("confirm connection", "Connected...");
	socket.on("request", function (msg) {
		// When a message is received from a client, log it
		// on the console and emit a response.
		socket.emit("response", "Hello from the server");
	});
});

server.listen(9000, () => {
	console.log("Listening on 9000");
});