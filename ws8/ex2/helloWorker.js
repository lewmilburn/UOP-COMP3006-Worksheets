self.addEventListener("message", function(evt) {
    // Extract the data from the event, store in a variable
    // called name, and use it to construct a message.
    let name = evt.data;
    self.postMessage("Hello " + name + " from a web worker");
});