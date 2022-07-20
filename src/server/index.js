const {Server} =  require("socket.io");
const open = require('open')

const io = new Server(3000)

io.on("connection", (socket) => {
    console.log("client has connected")

    socket.on("link", (args, callback) => {
        open(args)
    })
})

