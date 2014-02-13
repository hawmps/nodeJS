var dirFilter = require('./directoryFilter.js');
dirFilter (process.argv[2], process.argv[3], function (err, list) { 
	if (err) throw err;
	for (var i=0;i<list.length;i++) {
		console.log(list[i]);
		}
	});
	
