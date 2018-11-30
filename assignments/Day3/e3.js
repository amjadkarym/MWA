const http = require("http")
const fs = require("fs")
const path = require('path')
const util = require('util');
let count = 0;
readFileAsyn = util.promisify(fs.readFile);

http.createServer( (req,res)=>{
	var rs = fs.createReadStream(path.resolve(__dirname,"test.txt")).pipe(res)
	console.log('User : ' + (++count));
}).listen(4000);

http.createServer( (req,res)=>{
	var rs = fs.readFileSync(path.resolve(__dirname,"test.txt"), 'utf8')
	res.end(rs)
	console.log('User : ' + (++count));
}).listen(2000);

 http.createServer( (req,res)=>{
	 readFileAsys(path.resolve(__dirname,"test.txt"),{encoding:'utf8'})
	.then((file) =>  res.end(file))
	.catch((err) => {console.log("error");})
	console.log(++count);
}).listen(5000)