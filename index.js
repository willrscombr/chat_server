const express = require('express')
const app = express()

//routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

//Listen on port 3000
server = app.listen(3000)

//socet.io instantiation
const io = require("socket.io")(server)

//Listen on every connection
io.on('connection', (socket) => {
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg)
    })
})
