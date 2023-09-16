function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function devide(a, b) {
    if (b == 0) {
        return null
    }
    return a / b;
}

module.exports = {
    add,
    subtract,
    multiply,
    devide
}