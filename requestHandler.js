var querystring=require('querystring');
function start(res,postData){
  console.log('start模块开启')
  var body ='<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
  res.writeHead(200,{'Content-Type':'text/html'})
  res.write(body)
  res.end()
}
function upload(res,postData){
  console.log('upload模块开启')
  res.writeHead(200,{'Content-Type':'text/plain'})
  res.write('you have sent:  '+querystring.parse(postData).text)
  res.end()
}
exports.start=start;
exports.upload=upload;