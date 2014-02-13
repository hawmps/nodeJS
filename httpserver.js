//HTTP file server
var http = require('http')
var fs = require('fs')
var server = http.createServer(function (req,res) {
	console.log("connection from"+req.headers)
	console.log(req.url)
	console.log(req.method)
	var readStream = fs.createReadStream(process.argv[3])
	readStream.on('open', function () {
		readStream.pipe(res) 
		})
	readStream.on('error', function(err) {
		readStream.end(err);
		})	
	})
server.listen(process.argv[2], function () {
	console.log('server bound')
	})