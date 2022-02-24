const http = require('http');
const macaddress = require('macaddress');


const server = http.createServer((req,res) => {
    if(req.url === '/hardware/macadrees'){
        res.writeHead(200,{'Content-Type':'application/json'});
        macaddress.one(function (err, mac) {
            res.end(JSON.stringify({mac : mac}));
        });
        
    }
    else{
        res.writeHead(404,{'Content-Type':'application/json'});
        res.end(JSON.stringify({message:'Route Not Found'}));
    }
});

const PORT = process.env.port || 5000;

server.listen(PORT,()=> console.log(`server runing on port ${PORT}`))