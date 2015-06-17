var fs = require('fs');

fs.readdir('./names', function(err, files) {
	console.log('file names = ' , files);
	for (var i = 0; i < files.length ; i++) {
		var path = './names/' + files[i];
		// console.log('path=' + path);
		fs.readFile(path ,  {encoding : 'UTF-8'}, function(err, text) {
   			console.log(text);
 	 	});
	};
})