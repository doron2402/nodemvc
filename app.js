var server = require('./server');

server.server.route(server.routes);

server.server.start(function () {

    console.log('Server started at: ' + server.server.info.uri);
});