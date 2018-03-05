var express = require("express");
var path = require("path");
var interact = require("interactjs");
var app = express();

app.use(express.static(path.join(__dirname, "/static")));
app.set('views', path.join(__dirname, "/views"));
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render("index.ejs");
});

var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    //all the server socket code goes in here

    socket.on('tile_clicked', function (data) {
        console.log('Someone dragged a tile -> X: ' + data.x + ", Y: " + data.y);
        socket.emit('server_response', { response: "sockets are the best!" });
    })
})