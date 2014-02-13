var http = require('http')
var bl = require('bl')
var max = 0
var urlArray = new Array
var urlResults = new Array
for (var i=2; i < process.argv.length; i++) {
	urlArray.push(process.argv[i])
	}
	

function httpGet (index) {
	http.get(urlArray[index],function (response) {
		response.pipe(bl(function (err,data) {
			if (err) return console.error(data)
			urlResults[index] = data.toString()
			max++
			// console.log(max+" "+urlArray.length)
			if (max == urlArray.length)
				printResults ()
			}))
		})
	}

function printResults () {
	for (var i = 0; i < urlArray.length; i++)
	// console.log("printing "+i+" "+urlResults[i])
    console.log(urlResults[i])
	}
	
for (var i = 0; i < urlArray.length; i++) {
    // console.log("getting "+i)
	httpGet (i)
}

	
	

	
		

		
