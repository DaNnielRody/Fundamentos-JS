// tipo de dado
// booleanos 

// conversão implícita
const numero = 4;
const numeroString = '4';

//Number()
//String()

console.log(numero + Number(numeroString));
console.log(String(numero) === numeroString);

let largura = "10";
let altura = "5";
console.log( + largura * + altura); // tem-se a conversão de String para números realizado usando o + antes das variáveis

let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

// conversão explícita