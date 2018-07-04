var fs = require('fs')
var readStream = fs.createReadStream('../img/huiyuan.png')
var writeStream = fs.createWriteStream('two.png')
	readStream.on('data',function(chunk){
     if(writeStream.write(chunk) === false){
 	  console.log('still cached')
 	  readStream.pause()
     }
	})
    readStream.on('end',function(){
    	writeStream.end()
    })
    writeStream.on('drain',function(){
    	console.log('data drain')
    	readStream.resume()
    })
