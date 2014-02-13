// orderdscrapy
var http = require('http')
var bl = require('bl')
function scrapyNode (url, order, callback) {
	// console.log("scrapyNode called to get "+url+"as order #"+order)
	var results = new Array;
	results = [order,
	http.get(url,function (response) {
		
		response.pipe(bl(function (err,data) {
			if (err) throw err;			
			var list = new Array;
			list[0] = order
			list[1] = data.toString()
			console.log(list)
			return list
		}))
		})
		]
	console.log(results)
	callback (null,results)
	}
	
	
function callback (err, list) {
	if (err) throw err;	
	return list
	};
	
module.exports = scrapyNode