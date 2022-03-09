



//! ДЛЯ РЕВЬЮ СМОТРИТЕ ВЕТКУ ПОД ИМЕНЕМ "FOR REVIEW"






const http = require("http");
const fs = require("fs");
const path = require("path");
const { error } = require("console");


const server = http.createServer((req, res) => {
    console.log("Server request");
    console.log("Nodemon test");
    res.setHeader("Content-Type", "text/html");

    const createPath = (page) => path.resolve(__dirname, "views", `${page}.html`)
    
    let basePath = "";

    switch(req.url) {
        case "/":
            basePath = createPath("index");
            res.statusCode = 200;
            break;
        case "/contacts":
            basePath = createPath("contacts");
            res.statusCode = 200;
            break;
        default:
            basePath = createPath("error");
            res.statusCode = 400;
            break;
    }

    if(req.url = "/") {
        fs.readFile(basePath, (error, data) => {
            if(error) {
                console.log(error);
                res.statusCode = 500;
                res.end();
            } else {
                res.write(data);
                res.end(); 
            }
        })
    }
    
    
});


const PORT = 3000;

server.listen(PORT, "localhost", (error) => {
    error ? console.log(error) : console.log(`Listening port ${PORT}`);
})