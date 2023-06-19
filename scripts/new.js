var spawn = require('child_process').exec;

hexo.on('new', function (data) {
	spawn('start  "Typora.exe" ' + data.path);
	console.log("========================");
	console.log(parseInt(Math.random() * 14));
	console.log("========================");
});
