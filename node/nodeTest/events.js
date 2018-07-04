var EventEmitter = require('events').EventEmitter
var life = new EventEmitter()
	/*life.setMaxListeners(11)*/

	function talk (who){
     console.log(who+'给我说话')
	}
	life.on('a',talk)

	life.on('a',function(who){
		console.log(who+'给我说爱我')
	})
	life.on('a',function(who){
		console.log(who+'给我洗衣服')
	})
	life.on('a',function(who){
		console.log(who+'给我做饭')
	})
	life.on('a',function(who){
		console.log(who+'你就不能理我下嘛')
	})
	life.on('a',function(who){
		console.log(who+'给我6')
	})
	life.on('a',function(who){
		console.log(who+'给我7')
	})
	life.on('a',function(who){
		console.log(who+'给我8')
	})
	life.on('a',function(who){
		console.log(who+'给我9')
	})
	life.on('b',function(who){
		console.log(who+'给我加油')
	})
	life.on('b',function(who){
		console.log(who+'去把妹啊')
	})
    
       life.removeListener('a',talk)
       life.removeAllListeners('a')
	var confortListener = life.emit('a','许云霞')
	var zhupenghuiListener =  life.emit('b','朱鹏辉')   
	 console.log(life.listeners('a').length)
	 console.log(life.listeners('b').length)
     
     console.log(confortListener)
 	 console.log(zhupenghuiListener)
