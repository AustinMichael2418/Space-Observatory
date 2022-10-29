var http = require('http');
const https = require('https');
var url = require('url');
var fs = require('fs');
function read(file) {
fs.readFileSync(file,{encoding:"utf-8"});
}
function write(file,content) {
fs.writeFileSync(file,content);
}
http.createServer(function (req, res) {
res.setHeader('Access-Control-Allow-Origin', '*');
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
if(q.pathname.slice(0,5)=="/api/") {
var apiLink = q.pathname.slice(5);
https.get(apiLink, (resdata) => {
  console.log('statusCode:', resdata.statusCode);
  console.log('headers:', resdata.headers);

  resdata.on('data', (d) => {
    res.write(d);
//return res.end(d);
    //return res.end();
  });

resdata.on('end', () => {
return res.end();
});

}).on('error', (e) => {
  console.error(e);
 res.writeHead(404, {'Content-Type': 'text/html'});
 //return res.end("<h1>404 Not Found</h1>");
});


} else {
  fs.readFile(filename, function(err, data) {
    if (err) {
fs.readFile(filename+"index.html", function(err, data) {
    if (err) {fs.readFile(filename+"/index.html", function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("<h1>404 Not Found</h1>");
    } else {   
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();}
  });
    } else {   
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();}
  });
      
    } else { 
    //res.writeHead(200, {'Content-Type': read(filename+".config.xml")});
    res.write(data);
    return res.end();}
  });}
}).listen(8080);