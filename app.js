//requereds
const fs = require('fs');
// const fs = require('express'); 
//const fs = require('fs'); 


let base = 3;
let data = '';
for (let i = 1; i < 11; i++) {
    let resultado = i * base;

    data += (`${base} x ${i} = ${resultado}\n`);
}


fs.writeFile(`tabla/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base} ha sido creado!`);
});