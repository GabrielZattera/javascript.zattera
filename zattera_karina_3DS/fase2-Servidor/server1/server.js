//Criando o Primeiro Servidor Através do Módulo HTTP
const http = require('http');


//Etapa 1 - Criação do Servidor
const server = http.createServer((req, res)=>{
    console.log('Efetuando o pedido');
    res.write('Pedido aceito!')
    res.end();
})


//Etapa 2 - Subida do Servidor
server.listen(3000,'localhost',()=>{
    console.log("Servidor iniciado");
})
