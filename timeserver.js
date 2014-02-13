//TCP Time server
var net = require('net')
var strftime = require ('strftime')
var server = net.createServer(function (c) {
	console.log("connection")
	var data = "Hello World"
	c.on('end', function() {
		console.log('server disconnected');
		})
	c.end(strftime('%Y-%m-%d %H:%M')+"\n")	
	})
server.listen(process.argv[2], function () {
	console.log('server bound')
	})
	
	
