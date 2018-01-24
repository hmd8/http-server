const http = require('http');
const fs= require('fs');
const url = require("url");
const request = require("request");
const path = require("path");
const hostname = process.env.h || '0.0.0.0';
const port = process.env.p || 8080;

const server = http.createServer((req, res) => {

  const uri = url.parse(req.url).pathname;
  const serverPath = path.resolve(process.cwd() + '/../');
  const filename = path.join(serverPath, uri);

  fs.exists(filename, (exists) => {
     if (!exists) {
       res.statusCode = 404;
       res.setHeader('Content-Type', 'text/plain');
       res.write("404 Not Found\n");
       res.end();
       return;
     }
     fs.readFile(filename, (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
