const io = require("socket.io-client")

const socket = io("ws://localhost:3000")

socket.emit("link", "https://codeday.org")