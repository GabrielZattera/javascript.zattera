const express = require('express');

const server = express();

server.get('/', (req,res)=>{
    res.send('Olá Express!!');

})

server.get("/sobre"), (req,res)=>{
    res.send('Está é a pagina é de Sobre!');
}

server.get('/json'), (req,res)=>{
    res.send({"nome":"Clementina"});
}

server.use((req,res=>{
    res.send("Erro de pagina");
}))

server.listen(3000);