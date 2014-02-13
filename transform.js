var through = require ('through')
var tr = through(write, end)

function write (buf) { 
	var allCaps = buf.toString()
	allCaps = allCaps.toUpperCase()
	this.queue(allCaps) 
	}

function end () { this.queue(null) }

process.stdin.pipe(tr).pipe(process.stdout)
