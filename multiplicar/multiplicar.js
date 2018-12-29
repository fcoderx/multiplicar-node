// Requires
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    let data = '';

    console.log('====================='.green);
    console.log(`Tabla del ${base}` .green);
    console.log('====================='.green);

    for (let i = 1; i <= limite; i++) {
        const multiplicar = base* i;
        data += `${base} * ${i} = ${multiplicar} \n`;
    }

    console.log(data);
};

let crearArchivo = (base, limite = 10) => {
    return new Promise( (resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido: ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido: ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            const multiplicar = base* i;
            data += `${base} * ${i} = ${multiplicar} \n`;
        }

        // const data = new Uint8Array(Buffer.from('Hola mundo'));
        fs.writeFile(`tablas/tabla-${base}-hasta-el-${limite}.txt`, data, (err) => {
        if (err) reject(err);
        else 
            resolve(`tabla-${base}-hasta-el-${limite}.txt`);
        });
    });
}; 

module.exports = {
    crearArchivo,
    listarTabla
};