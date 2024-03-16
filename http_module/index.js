const http=require('http');

//create server

const server=http.createServer((req,res) =>{
    if(req.url=="/"){
        res.write("<h1>I Am Happy To Learn Full Stack Web Development From Pw Skills!");
    }
    res.end();
})
server.listen(5000);