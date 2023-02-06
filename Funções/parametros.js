// parâmetros de função

function soma(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero;
}

console.log(soma(8, 10));

// parâmetro x argumentos 

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome}, e minha idade é ${idade}`;
}

console.log(nomeIdade('daniel', 17));

function multiplica(primeiroNumero = 1, segundoNumero = 1) {
    return primeiroNumero * segundoNumero;
}

console.log(multiplica(soma(3,4), soma(3,3)));