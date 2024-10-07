const prompt = require ( 'prompt-sync');
const entrada = prompt();

const { Console } = require("console");

console.log("Lucas stasiak é um dos mior professor de computador");    

console.log ("O terceiro F pode ate não ser a melhor turma mas na cabeça deles eles são os MIOR ");

const meuNome = "Kauã";

console.log(meuNome)

const idade= 18;

console.log(idade);

const altura = 1.70;

console.log(altura);

const massa = 75;

console.log(massa);

const cidade = "São José dos Pinhais";

console.log(cidade);

//agencia de viagens paris,monte everest,gran canion,polo norte,Santorini, Grécia,Na península de Yucatan, no México, Japão,New york
console.log(" ")
console.log("------------------------------");
console.log("------agencia de viagens------");
console.log("------------------------------");
console.log(" ");
const listaDeDestinos = new Array(
  " Paris",
  " Monte Everest",
  " Gran Canion",
  " Polo Norte",
  " Santorini Grécia",
  " Na península de Yucatan no México",
  " Japão",
  " New york"
); 

console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push("Coronel vivida");
console.log(listaDeDestinos);

listaDeDestinos.push("Curitiba");
console.log(listaDeDestinos);

listaDeDestinos.push("São josé dos pinhais");
console.log(listaDeDestinos);

listaDeDestinos.push("Londrina");
console.log(listaDeDestinos);

const loginCerto = "kaua"
const senhacerto = "123"

var login = entrada("qual é seu login? ");
var senha = entrada("Digite é sua senha? ");

while(login != loginCerto || senha != senhacerto ){
  console.log("login ou senha incorretos");
  login = entrada("qual é seu login? ");
  senha = entrada("Digite é sua senha? ");  
}

var nomeComprador = entrada("Digite seu nome: ");
var idadeComprador = entrada("Qual sua idade?");

if(idadeComprador >=18) {
  console.log("Ola senhor(a) " + nomeComprador);
  console.log("comprador maior de idade");


var contador = 1;
while (contador <= 9 ){
  console.log(listaDeDestinos[contador]); 
  contador++;
}
  var destino = entrada("Digite o número que corresponde ao destino selecionado (0-8)");
  console.log(`destino selecionado foi: ${listaDeDestinos[destino]}`);
} else {
  console.log("Olá senhor(a) " + nomeComprador);
  console.log("Não foi possível concluir a compra");
  console.log("Você é menor de idade");
}
