const http= require('http');
const {fork} = require('child_process');
const server = http.createServer();
const path = require('path');
const url = require('url');


server.on('request',(req,res)=> {
    const myUrl = url.parse(req.url, true);
    const childProcess = fork(path.resolve(__dirname, 'longOperation.js'));
    childProcess.send(myUrl.query.url);
    childProcess.on('message', rs => {
        res.end(rs);
    });
});
server.listen(1947);