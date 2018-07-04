var http = require('http')

http
	.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.write('Hello world')
	res.end()	
	})
	.listen(2018)




class Person {
    static ss(){
     	console.log(this);
    }
  
   /* throw new Error('必须使用 new 命令生成实例');*/
  }

/*var notAPerson = Person.call(person, '张三');  // 报错*/
/*var person = new Person('张三'); // 正确*/
Person.ss();