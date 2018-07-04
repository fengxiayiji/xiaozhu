var http = require('http')
var querystring = require('querystring')
var postData = querystring.stringify({
  'content':'我来测试一把',
  'cid':348

})

var options = {
 hostname:'www.imooc.com',
 post:80,
 path:'course/docomment',
 method:'POST',
 headers:{
  'Accept':'application/json, text/javascript, */*; q=0.01',
'Accept-Encoding':'gzip, deflate, br',
'Accept-Language':'zh-CN,zh;q=0.9',
'Connection':'keep-alive',
'Content-Length':postData.length,
'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
'Cookie':'imooc_uuid=56fdff04-7013-42e2-bcb0-58203bbf6e5e; imooc_isnew_ct=1517390425; imooc_isnew=2; loginstate=1; apsid=FiNGQ4M2QxYWJmZjlkYjIzZDU5ZDRjZjJmMTJkYzYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANjM2ODMzNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxMTMwMTU0OTM4QHFxLmNvbQAAAAAAAAAAAAAAAAAAADE3N2EwNDUwMTgyYjRhZGM1ZWZhNTIwOGQyODMzM2Y3WL%2BPWli%2Fj1o%3DMW; mc_channel=banner; mc_marking=63c3be5b01f747b456271481ab7c6e5e; IMCDNS=0; PHPSESSID=k5dk00erk1ps9jcue32u9geh16; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1521178439,1521443923,1521617129,1521683185; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1521683239; cvde=5ab30aee0f0e3-22',
'Host':'www.imooc.com',
'Origin':'https://www.imooc.com',
'Referer':'https://www.imooc.com/comment/348',
'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36',
'X-Requested-With':'XMLHttpRequest'

 }

}

var req = http.request(options,function(res){
 console.log('Status:' + res.statusCode)
  console.log('headers:' + JSON.stringify(res.headers))
 res.on('data',function(chunk){
 	console.log(Buffer.isBuffer(chunk))
    console.log(typeof chunk)
 })
 res.on('end',function(){
 	console.log('评论完毕')
 })
})

req.on('error',function(e){
	console.log('Error：' + e.message)
})

req.write(postData)
req.end()  