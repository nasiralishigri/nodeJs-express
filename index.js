const express = require('express');
const http = require('http');


const app = express();
const port = 3000;
const hostName = 'loclhost';


app.use((req , res , next)=>{
    
    console.log(req.headers);
    // res.statusCode= 200;
    // res.setHeader('Content-Type', 'text/html');
    // res.end('<html><body><h1> This is express side running</h1></body></html>');

});

const server = http.createServer(app);
server.listen(port ,hostName,() =>{
    console.log("Your server is listen on http://" + hostName + ":" + "3000");
});