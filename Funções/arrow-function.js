function apresentar(nome) {
    return `Meu nome é ${nome}`
}

//arrow function

const apresentarArrow = nome => `Meu nome é ${nome}`;

const soma = (num1,num2) => `A soma é de ${num1} + ${num2}`;

//arrow function com mais linha de instrução

// const somaNum = (num1, num2) => console.log(num1 >= 10 || num2 >= 10 ? "somente números de 1 a 9" : num1 + num2);

const somaNum = (num1, num2) => {
    if(num1 >= 10 || num2 >= 10) {
        return "somente números de 1 a 9";
    } else {
        num1 + num2;
    }
}
