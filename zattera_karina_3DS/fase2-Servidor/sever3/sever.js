const http = require('http');
const fs = require('fs');
let porta = 3000;
let host = 'localhost';

const server = http.createServer((req, res) => {
    // header
    res.setHeader('Content-Type', 'text/html');
    
    // preparando o conteúdo HTML
    fs.readFile('./html/pag1.html', (err, data) => {
        if (err) {
            console.log('Erro!');
            res.write('<h3>Erro ao carregar</h3>');
            res.end();
        } else {
            res.write(data); // escreve o conteúdo do arquivo HTML
            res.end();
        }
    });
});

server.listen(porta, host, () => {
    console.log("Estartando o servidor!");
});
