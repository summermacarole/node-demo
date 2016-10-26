function router(handle,pathname,res,req){
  console.log('about to router a request for'+pathname)
  if(typeof handle[pathname]==='function'){
    handle[pathname](res,req);
  }else{
    console.log('sorry,no handler for the request '+pathname)
    res.writeHead(404,{'Content-Type':'text/plain'})
    res.write('not found')
    res.end()
  }
}
exports.router=router;