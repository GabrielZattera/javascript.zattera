// Variáveis
const http = require('http');
const fs = require('fs');
const { error } = require('console');

let porta = 3000;
let host = 'localhost';

// Criação do servidor
const server = http.createServer((req, res) => {
    // Definindo o tipo de conteúdo como HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Roteamento
    let html_pag = '';

    switch (req.url) {
        case '/':
            html_pag = 'home.html';
            break;
        case '/home':
            html_pag = 'home.html';
            break;
        case '/servicos':
            html_pag = 'servicos.html';
            break;
        case '/contato':
            html_pag = 'contato.html';
            break;
        default:
            html_pag = '404.html';
            break;
    }

    // Lendo o arquivo correspondente e enviando a resposta
    fs.readFile('./html/' + html_pag, (err, data) => {
        if (err) {
            console.log(err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.write('Erro ao ler o arquivo solicitado.');
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
});

// Subida do servidor
server.listen(porta, host, () => {
    console.log(`Servidor iniciado em http://${host}:${porta}`);
});
