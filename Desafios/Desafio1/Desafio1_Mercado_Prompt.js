const prompt = require('prompt-sync')();
let produto = prompt("Digite o nome do produto: ");
let preco = parseInt(prompt("Digite o valor do produto R$ "));
let validade = prompt("Está dentro do prazo de validade: SIM / NÃO: ");

console.log(produto, preco, validade);