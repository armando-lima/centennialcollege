//File System core module
const fs = require('fs');
fs.writeFileSync("./node-first-app/message.txt", "Armando");

//HTTP core module
const http = require ('http');

function requestHandler(request, response){
    console.log(request);
}

const server = http.createServer(requestHandler());

const serverArrow = http.createServer((request, response) => {
    console.log(request.url, request.method);
    //Routing URLs
    if (request.url === '/google'){
        response.setHeader('Content-Type', 'text/html');
        response.write("<head>");
        response.write("<title></title>");
        response.write("</head>");
        response.write("<body>");
        response.write("<h1>I am inside the IF</h1>");
        response.write("</body>");
        response.write("</html>");
        response.end();
    }
    response.setHeader('Content-Type', 'text/html');
    response.write("<head>");
    response.write("<title></title>");
    response.write("</head>");
    response.write("<body>");
    response.write("<h1>Hello Friends</h1>");
    response.write("</body>");
    response.write("</html>");
    response.end();
    //console.log(request.headers);
    //Stop the server
    //process.exit();
});

serverArrow.listen(3000);