const fs = require('fs');
const path = require('path');

const longOperation = (urlPath) => {
    var rs = fs.readFileSync(path.resolve(__dirname, urlPath), 'utf8');
    return rs;
};

process.on('message', (urlPath) => {
    console.log(urlPath);
    const rs = longOperation(urlPath);
    process.send(rs);
})