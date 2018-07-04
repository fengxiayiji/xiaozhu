var fs = require('fs')
var readStream = fs.createReadStream('stream_copy_logo.js')
	readStream
	.on('data',function(chunk){
     console.log('data emits')
     console.log(Buffer.isBuffer(chunk))
     console.log(chunk.toString('utf8'))
	})
	.on('readable',function(){
	 console.log('data readable')	
	})
	.on('end',function(){
	 console.log(' data end')	
	})
	.on('close',function(){
	 console.log('data close')	
	})
	.on('error',function(){
	 console.log('data error')	
	})
