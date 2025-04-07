const http = require('http');
let users = [];
const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
     if(req.url === '/setdata' && req.method === "POST")
     {
         let body = '';
         req.on('data' , chunk => {
            body +=chunk
         });
         req.on('end' , () => {
            const user = JSON.parse(body);
            users.push(user);
            res.end('Data Received!')
         });
     }
     else if(req.url === '/getdata' && req.method === "GET"){
        res.end(JSON.stringify(users));
     }
    else{
        res.end('not found');
    }
});

server.listen(9001, () => {
    console.log("server is running on  http://localhost:9001/")
});