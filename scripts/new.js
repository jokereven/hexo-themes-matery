var spawn = require('child_process').exec;

// Hexo 2.x 用户复制这段
// hexo.on('new', function(path){
//   spawn('start  "markdown编辑器绝对路径.exe" ' + path);
// });

// Hexo 3 用户复制这段
hexo.on('new', function (data) {
	spawn('start  "Typora.exe" ' + data.path);
	console.log(parseInt(Math.random() * 24) + 1);
});
