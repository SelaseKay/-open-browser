const server = require('http').createServer()
const io =  require("socket.io")(server);
const open = require('open')


io.on("connection", (socket) => {
    console.log("client has connected")

    socket.on("link", (args, callback) => {
        
        var pattern = /^((http|https|ftp):\/\/)/;
        var url = args.link

        if(!pattern.test(url)) {
            url = "https://" + url
            console.log(`url; ${url}`)
            open(url)
            return
        }

        console.log(`url outside ifblock; ${url}`)
        open(url)
    })

    socket.on('disconnect', function () {
        console.log('client has disconnected');
      })
})

var port = process.env.PORT || 3000;
server.listen(port, function (err) {
  if (err) console.log(err);
  console.log('Listening on port', port);
});

