const http = require('http');

let porta = 3000;
let host = 'localhost';

const serve = http.createServer((req, res) => {
    console.log('Efetuando o pedido');

    //header
    res.setHeader('Content-Type', 'text/html');

    res.write('<h3>Nos somos a dupla</h3>');
    res.write('<h1>Gabriel Z e Karina</h1>');
    res.write('<p>Estamos aprendendo <strong> back-end <strong></p>');
    res.end();
    ;
});

serve.listen(porta, host, () => {
    console.log('Servidor iniciado');
});
