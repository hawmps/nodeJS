var argArray = new Array();
var arraySum = 0;
for (var i=2; i < process.argv.length; i++) {
	argArray.push(+process.argv[i]);
	}
for (var i=0; i < argArray.length; i++) {
	var arraySum = arraySum + argArray[i];
	}	

// console.log(argArray);
// console.log(process.argv);
console.log(arraySum);