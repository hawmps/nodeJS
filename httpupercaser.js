// httpupercaser
var map = require('through2-map')
var http = require('http')
var server = http.createServer(function (req,res) {
	console.log("connection initiated")
	if (req.method != 'POST')
		return res.end("Send Me a Post")
	req.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase()
		})).pipe(res)
		
	res.on('error', function(err) {
		res.end(err);
		})	
	})

server.listen(process.argv[2], function () {
	console.log('server bound')
	})
	