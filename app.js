var Routes = require('./routes'),
	Hapi = require('hapi'),
	Server = new Hapi.Server('localhost', 8000, { cors: true, maxSockets: 10 });

Server.start(function () {

    console.log('Server started at: ' + Server.info.uri);
});