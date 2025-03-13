const fs = require('fs');

// fs.readFile('./dados.csv', (err,data)=>{
//      if(err){
//           console.log(err);
//      }else{
//           console.log(data.toString());
//      }     
// })

//método sínrono

let dados = '';

if (fs.existsSync('./dados.csv')) {
     dados = fs.readFileSync('./dados.csv');
     console.log(dados.toString())
} else {
     console.log('Não encontrei o arquivo');
}

console.log('Segunda operação');
