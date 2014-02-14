var fs = require('fs')
var through = require ('through')
var tr = through(write, end)
var tr2 = through(wrong, end)
var split = require('split')
var fileLocation = '.\\config.cfg'
//Read file
function getGlassfishProperties(fileLocation) {
	fs.readFile(fileLocation, 'utf8', function (err, data) {
		if (err) throw err
		console.log(data)
		})
	}

// streamfile
function streamGlassfishProperties(fileLocation) {
	fs.createReadStream(fileLocation, function (err, data) {
		if (err) throw err
		})
	}

//transform stream	
function write (buf) { 
	if (buf.toString().charAt(0) === "#") {		
		return
		}
	this.queue(buf)
	}
//callback triggger

function end () { this.queue(null) }

function wrong (buf) { 
	console.log(buf.toString()+"\n:")
	this.queue(buf)
	}

fs.createReadStream(fileLocation, function (err, data) {
		if (err) throw err
		}).pipe(split()).pipe(tr).pipe(split(" ")).pipe(split()).pipe(tr2).pipe(process.stdout)

		// fs.createReadStream(fileLocation, 'utf8', function (err, data) {
		// if (err) throw err
		// }).pipe(split()).pipe(split(" ").pipe(process.stdout)
