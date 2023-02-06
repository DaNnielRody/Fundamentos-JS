// var x = '';
// console.log(x);
// x = 'oi';

// três formas de escrever funções

// DECLARAÇÃO DE FUNÇÃO (Tipo 1)

// 1) declara a função

function imprimirTexto(texto) {
    console.log(texto);
}

// 2) executa a função (uma ou mais vezes)

imprimirTexto('olá');
imprimirTexto('turubo?');
imprimirTexto(soma());

function soma() {
    // const resultado = 2 + 2;
    // return resultado;
    return 2 + 2;
}

console.log(soma());

