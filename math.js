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

exports.sum = sum;
exports.substract = substract;

// const totalSum = sum(1, 2)
// const totalSubstract = substract(1, 2)
// const totalMultply = muliply(1, 2)

// console.log(totalSum)
// console.log(totalSubstract)
// console.log(totalMultply)
// console.log(divide(1, 0))


