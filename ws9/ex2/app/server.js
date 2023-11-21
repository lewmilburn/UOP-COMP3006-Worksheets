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
		console.log("Responding to client");
		socket.emit("response", "Hello from the server");
	});
	socket.on("send message", function (msg) {
		console.log("Received message '"+msg+"'");
		socket.broadcast.emit("send message", msg);
	});
});

server.listen(9000, () => {
	console.log("Listening on 9000");
});