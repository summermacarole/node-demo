var querystring=require('querystring');
var fs=require('fs');
var formidable=require('formidable')
function start(res,req){
  console.log('start模块开启')
  var body ='<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post" enctype="multipart/form-data">'+
    '<input type="file" name="myimage"/>'+
    '<input type="submit" value="upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';
  res.writeHead(200,{'Content-Type':'text/html'})
  res.write(body)
  res.end()
}
function upload(res,req){
  console.log('upload模块开启')
  var form=new formidable.IncomingForm();
  console.log('begin to parse file')
  form.parse(req,function(error,fileds,files){
    console.log('parsing done')
    fs.renameSync(files.myimage.path,"./tmp/test.jpeg");
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("received image:<br/>");
    res.write("<img src='/show' />");
    res.end();
  })
}
function show(res,req){
  console.log('show模块开启')
  fs.readFile('./tmp/test.jpeg','binary',function(err,file){
    if(err){
      res.writeHead(500,{'Content-Type':'text/plain'})
      res.write(err+'\n')
      res.end()
    }else{
      res.writeHead(200,{'Content-Type':'image/jpeg'})
      res.write(file,'binary')
      res.end()
    }
  })
}
exports.start=start;
exports.show=show;
exports.upload=upload;