const Math = {};

function sum(x1, x2) {
    return x1 + x2
}

function substract(x1, x2) {
    return x1 - x2
}

function muliply(x1, x2) {
    return x1 * x2
}

function divide(x1, x2) {
    if(x2 == 0) {
        console.log('No se puede dividir')
    } else {
        return x1 / x2
    }    
}

Math.sum = sum;
Math.substract = substract;
Math.muliply = muliply;
Math.divide = divide;

function hello(name) {
    console.log('Hola ', name);
}

// EXPORTA OBJETOS, FUNCIONES, VARIABLES Y CUALQUIER DATO DE JS
module.exports = Math;

// EXPORT UNA PROPIEDAD DEL OBJETO
// exports.sum = sum;
// exports.substract = substract;
// exports.muliply = muliply;
// exports.divide = divide;

// const totalSum = sum(1, 2)
// const totalSubstract = substract(1, 2)
// const totalMultply = muliply(1, 2)

// console.log(totalSum)
// console.log(totalSubstract)
// console.log(totalMultply)
// console.log(divide(1, 0))


