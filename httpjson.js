// HTTP JSON Server
var map = require('through2-map')
var http = require('http')
var url = require ('url')
var bl = require('bl')
var server = http.createServer(function (req,res) {
	console.log("connection initiated from "+req.headers.host)
	var urlResult = url.parse(req.url, true)	
	switch (urlResult.pathname) {
	case '/api/parsetime':
							
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.write(JSON.stringify(getTimeJSON(urlResult.search)))
		res.end()
		break;
	case '/api/unixtime':
							
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.write(JSON.stringify(getTimeUnix(urlResult.search)))
		res.end()
		break;
	default:
		console.log("incorrect request")
		res.end()
	}	
	
	})

function getTimeJSON(search) {
	if (search.toString().slice(0,5) !== '?iso=') {
		return console.log('unexpected search tearm. Use ?iso')
		}
	var convertedTime = new Date(search.toString().slice(5))
	var isoJSON = {"hour": convertedTime.getHours(),"minute": convertedTime.getMinutes(),
	"second": convertedTime.getSeconds() }
	console.log(isoJSON.hour)
	return isoJSON
	}
function getTimeUnix (search) {
	if (search.toString().slice(0,5) !== '?iso=') {
		return console.log('unexpected search tearm. Use ?iso')
		}
	var convertedTime = new Date(search.toString().slice(5))	
	var isoJSON = {"unixtime" : convertedTime.getTime() }
	return isoJSON
	}

server.listen(process.argv[2], function () {
	console.log('server bound')
	})


