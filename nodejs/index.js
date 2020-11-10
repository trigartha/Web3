

const http = require("http");
const porter = require('./module/ex_import/file.js');

let fileName = "./module/ex_import/test.txt";
let name= "Morty Sanchez";

porter.write(fileName, name);
porter.read(fileName);

const server = http.createServer(function(req, res) {
    // when there is no addition on the url aka we want the homepage
    if(req.url == "/") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<html><body><p>Home page.</p></body></html>");
        res.end();
    }//When our url ends on /profile
    else if(req.url=="/profile"){
       res.writeHead(200, { "Content-Type": "text/html"});
       res.write("<html><body><p>Profile page.</p></body></html>");
       res.end();
    }//when our url ends on /data
    else if (req.url == "/data"){
        res.writeHead(200, { "Content-Type": "text/html"});
        const person = require('./module/data/data.js');
        res.write('<html><body>' + JSON.stringify(person) + '</body></html>');

        res.end();
    }
    else
    {
        res.end("Invalid request");
    }
            });
server.listen(5000);
console.log("Node.js web server at port 5000 is running..");