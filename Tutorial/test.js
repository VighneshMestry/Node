// Method to create a webserver and api in Node(without Express)

const http = require('http');
const fs = require('fs')
const url = require('url')

const server = http.createServer((req, res) => {
    try {
        if(req.url === "/favicon.ico") return res.end();
        const path = url.parse(req.url);
        var date = new Date(Date.now())
        date = date.getDate() + "/" + date.getMonth() + "/"+ date.getFullYear() + " " + date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
        fs.appendFile("log.txt", date + ": " + req.url + req.method + " " + "\n", (err, data) => {
            switch(path.pathname) {
                case "/" :
                    res.end("HomePage")
                    break
                case "/about":
                    res.end("About Page")
                    break;
                default:
                    res.end("Miscellaneous")
                    break;
            }
        })
    } catch (e) {
        console.log(e);
    }
});

server.listen(8000, () => "Server Started!")