//directoryFilter module
var fs = require('fs');
var path = require('path');
function filter (readPath, extensionFilter, callback) {
extensionFilter = "."+extensionFilter;+
fs.readdir(readPath, function(err, files) {
	if (err) return callback(err);
	var filteredList = new Array();
	for (var i =0; i < files.length; i++) {
		if (path.extname(files[i]) === extensionFilter) {
		filteredList.push(files[i]);
		}
		}
		callback(null,filteredList);
	});
	
	};
function callback (err, filteredList) {
	if (err) throw err;
	return filteredList;
	};
module.exports = filter 