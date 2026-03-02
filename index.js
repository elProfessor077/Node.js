const http = require('node:http')

const server = http.createServer((req, res) => {
    console.log('I got an incoming request');
    res.writeHead(200) ;
    res.end('Thanks for visiting my server');
});

server.listen(8000, function(){
    console.log('http server is up and running on port 8000');
});

//server is running on port number 8000.