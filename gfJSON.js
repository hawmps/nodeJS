// HTTP JSON Server
//retrieves GF properties file and JSONifies it, then returns get requests
var map = require('through2-map')
var http = require('http')
var url = require ('url')
var bl = require('bl')
var fs = require('fs')
var server = http.createServer(function (req,res) {
	console.log("connection initiated from "+req.headers.host)
	var urlResult = url.parse(req.url, true)	
	switch (urlResult.pathname) {
	case '/api/glassfishprops':

		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.write(JSON.stringify(getGlassfishProperties(urlResult.search)))
		res.end()
		break;
	case '/api/otherprops':

		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.write(JSON.stringify(getOtherProperties(urlResult.search)))
		res.end()
		break;
	default:
		console.log("incorrect request")
		res.end()
	}	

	})

function getGlassfishProperties() {
	fs.readFile('.\config.cfg', function (err, data) {
		if (err) throw err
		console.log("retruning JSON")
		return // jsonObject
})
	
	}
function getOtherProperties (search) {
	// do other thing
	return jsonObject
	}

server.listen(process.argv[2], function () {
	console.log('server bound to port: '+server.port)
	})
