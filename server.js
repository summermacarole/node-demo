var http=require('http');
var url=require('url');
function start(router,handle){
  http.createServer(function(req,res){
    var postData='';
    var pathname=url.parse(req.url).pathname
    console.log('request received:'+pathname)
    req.setEncoding('utf8')
    req.addListener('data',function(postDataChunk){
      postData+=postDataChunk;
      console.log('接收数据中')
    })
    req.addListener('end',function(){
      console.log('数据接收完毕，即将调到路由模块')
      router(handle,pathname,res,postData)
    })
  }).listen(8888)
  console.log('server has been runing...')
}
exports.start=start;