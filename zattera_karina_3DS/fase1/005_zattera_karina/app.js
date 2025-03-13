//criação de arquivos

const fs = require('fs');

//mensagem de log
let log = 'Escrevendo nosso log \n';

// fs.writeFileSync('./logs.log', log, { flag: 'a+' });

// fs.writeFile('./logs2.log',log,{flag:'a+'},(err) =>{
//     if (err){
//         console.log(err);
//     }

// console.log('FIM') 
// }); 

fs.unlinkSync('./logs2.log');

console.log('FIM')