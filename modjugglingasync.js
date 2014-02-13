var http = require('http')
var bl = require('bl')

function scrapeLog(url) {
http.get(url,function (response) {
	response.pipe(bl(function (err,data) {
		if (err) throw err;		
		return data.toString()
	}
	return data.toString()
	))
	return data.toString()
	})
	return data.toString()
	}
	
function scrapeReturn(url) {
var data = 
http.get(url,function (response) {
	response.pipe(bl(function (err,data) {
		if (err) throw err;
		return data.toString()
	}))})
	return data
	}
scrapeLog(process.argv[2])
var result = scrapeReturn(process.argv[2])

console.log(result)
console.log(result)