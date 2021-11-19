const http = require('http');
const fs = require('fs');

const contentType = new Map([
    ["html", "text/html"],
    ["js", "text/javascript"],
    ["css", "text/css"],
    ["png", "image/png"],
    ["ico", "image/vnd.microsoft.icon"],
]);


http.createServer(function (req, res) {
    const ext = req.url.split('.').pop();

    try {
        const data = fs.readFileSync('.' + req.url);
        res.writeHead(200, {'Content-Type': contentType.get(ext)});
        res.write(data);
    } catch (e) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write(e.message);
    }
    res.end();
}).listen(8080);
