const express = require('express');

const sever = express();
//criando a rota de entrada so servidor
sever.get('/', (req,res)=>{
    rest.send('Pagina de entrada usando express!!');


})
sever.listen(3000);