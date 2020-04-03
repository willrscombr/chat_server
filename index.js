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

//Listen on every connection
io.on("connection", (socket) => {
  socket.on("chat message", function (msg) {
    io.emit("chat message", msg);
  });
});
