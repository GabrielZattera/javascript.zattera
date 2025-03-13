const http = require('http');

let porta = 3000;
let host = 'localhost';

const serve = http.createServer((req, res)=>{
    console.log('Efetuando o pedido');

    //header
    res.setHeader('Content-Type','text/html');

    res.write('<h1>Pedido atendido</h1>');
    res.write('<h2>Pedido 2 atendido</h2>');
    res.write('<h3>Pedido 3 atendido</h3>');
    res.end();
;
});

serve.listen(porta, host, ()=>{
    console.log('Servidor iniciado');
});
