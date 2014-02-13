//split module
var split = require('split')
var through = require ('through')
var tr = through(write)
var counter = 1
process.stdin
    .pipe(split())
    .pipe(tr).pipe(process.stdout)
	
function write (buf, counter) { 
	if (counter = 1) {
	var allCaps = buf.toString()
	allCaps = allCaps.toUpperCase()
	counter++
	this.queue(allCaps+"\n")
	console.log(counter)	
	}
	//this.queue(buf+"\n")
	//counter--
	}

function end () { this.queue(null) }