

function f2c(fahrenheit){
    return (fahrenheit-32.0) * (5.0/9.0)
}

function c2f(celsius){
    return celsius * (9.0/5.0) + 32.0
}

module.exports = {
    f2c : f2c,
    c2f : c2f
}