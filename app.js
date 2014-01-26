var Routes = require('./routes'),
	Hapi = require('hapi'),
	Options = {
		cors: true, 
		maxSockets: 10
	},
	Server = new Hapi.Server('localhost', 8000, Options);

Server.start(function () {

    console.log('Server started at: ' + Server.info.uri);
});

var hello = function(req) {

	this.reply('Success').state('session', session);
}

Server.route({
	method: 'GET',
	path: '/',
	config: {
		handler: hello
	}
});

