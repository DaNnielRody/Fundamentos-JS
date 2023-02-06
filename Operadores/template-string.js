const nome = "dan";
const idade = 20;
const cidadeDeNascimento = 'RJ';
const bebidaMaior = 'cerveja';
const bebidaMenor = 'suco';
// const apresentacao = "meu nome é " + nome + ", tenho " + idade + " anos, e nasci em " + cidadeDeNascimento;

const apresentacao = `meu nome é ${nome}, tenho ${idade} anos, e nasci em ${cidadeDeNascimento}`

console.log(apresentacao);

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)



