const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
//routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//Listen on port 5000
server = app.listen(PORT);

//socet.io instantiation
const io = require("socket.io")(server);
let messages = [];
//Listen on every connection
io.on("connection", (socket) => {
  console.log('userConected',socket.id);
  socket.emit('previosMessage', messages);
  
  socket.on("sendmessage", function (data) {
    messages.push(data);
    io.emit("messages", data);
    socket.broadcast.emit('receivedMessage',data);
  });
});
