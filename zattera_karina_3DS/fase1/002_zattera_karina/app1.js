// console.log('nomes');

// let pessoas = require('./dados');
// console.log(pessoas);
// console.log(pessoas[1]);

let {nomes, frutas, add} = require('./dados');

console.log(...nomes);
console.log(frutas[2]);
console.log(add(16,14));
