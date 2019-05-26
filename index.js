var PeerServer = require('peer').PeerServer,
    express = require('express'),
    Topics = require('./public/src/Topics'),
    app = express(),
    port = ;

app.use(express.static(__dirname+"/public"));

var expressServer = app.listen(port);
var io = require('socket.io').listen(expressServer);

console.log(`Listening on port ${port}`);

var peerServer = new PeerServer({ port: , path: });

peerServer.on('connection', function(id) {
    io.emit(Topics.USER_CONNECTED, id);
    console.log(`User connected with #${id}`);
});

peerServer.on('disconnection', function(id) {
    io.emit(Topics.USER_DISCONNECTED, id);
    console.log('User disconnected with #', id);
});




