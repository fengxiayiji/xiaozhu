var fs = require('fs')
var source = fs.readFileSync('../img/huiyuan.png')
fs.writeFileSync('stream_copy_logo.png',source)