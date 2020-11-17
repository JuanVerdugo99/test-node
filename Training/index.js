//* MODULE OS
// const os = require('os');
// // const server = require('server');

// console.log(os.platform());
// console.log(os.release());
// // console.log(os.cpus());
// console.log(`Free mem: ${os.freemem()} bytes`)
// console.log(`Total mem: ${os.totalmem()} bytes`)

//* MODULE FILE SYSTEM
const fs = require('fs');

//* Codigo Asincrono
// fs.writeFile('./texto.txt', 'Linea uno', function(err) {
//     if (err) {
//         console.log(err)
//     }
//     console.log('Archivo Creado')
// })

fs.readFile('./texto.txt', function(err, data) {
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})





// console.log('Ultima linea de codigo')

// const user = query('SELECT * FROM Users') /* Codigo Bloqueante

// query('SELECT * FROM users', function(err, users) {
//     if (err) {
//         console.log(err)
//     }
//     if (users) {

//     }
// })  /* Codigo Asincrono