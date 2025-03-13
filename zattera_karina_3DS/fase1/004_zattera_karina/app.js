//criação de pastas - modo síncrono e asincrono
const fs = require('fs');

//método síncrono
// fs.mkdirSync('logs');

//método asíncrono
//  fs.mkdir('log2', (err)=>{
//     console.log(err);
//  });

//Remoção de pasra
//priemeiro verificar se existe pasta

if(fs.existsSync('./log2')){
    fs.rmdirSync('./log2');
}
console.log('FIM');