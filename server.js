var http=require('http');
var url=require('url');
function start(router,handle){
  http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname
    console.log('request received:'+pathname)
      router(handle,pathname,res,req)
  }).listen(8888)
  console.log('server has been runing...')
}
exports.start=start;