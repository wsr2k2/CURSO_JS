let nome = "Wililam";
let sobrenome = "Rodrigues";
let idade = 39;
const numCliente = 326804;
let valorEmprestimo = 150000;
let taxaDeJuros = 0.10;
let numAnos = 6;
let ehBomPagador = true; 

/* Montante = valorEmprestimo + juros
    juros = valorEmprestimo * taxaDeJuros * numAnos
*/

let juros = valorEmprestimo * taxaDeJuros * numAnos;
let montante = valorEmprestimo + juros;
console.log("Valor do montante: " + montante.toFixed(2));