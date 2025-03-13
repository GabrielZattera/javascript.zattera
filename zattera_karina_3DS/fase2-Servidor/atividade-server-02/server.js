const http = require('http');
const fs = require('fs');
const path = require('path');

let porta = 3000;
let host = 'localhost';

const server = http.createServer((req, res) => {

    const extname = path.extname(req.url);
    
    let contentType = 'text/html';
    if (extname === '.css') {
        contentType = 'text/css';
    } else if (extname === '.js') {
        contentType = 'application/javascript';
    }


    if (req.url === '/styles.css') {
        const filePath = path.join(__dirname, 'css', 'styles.css');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.write('<h3>Erro ao carregar o arquivo CSS!</h3>');
                res.end();
            } else {
                res.setHeader('Content-Type', contentType);
                res.write(data);
                res.end();
            }
        });
    } else {
       
        const filePath = path.join(__dirname, 'html', 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.write('<h3>Erro ao carregar a página!</h3>');
                res.end();
            } else {
                res.setHeader('Content-Type', contentType);
                res.write(data);
                res.end();
            }
        });
    }
});

server.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
});

