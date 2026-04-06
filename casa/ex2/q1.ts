/* 1. A prefeitura da cidade de Parnamirim-RN deseja fazer uma pesquisa entre as famílias da cidade e precisa da sua ajuda para fazer um programa que calcule:
A renda familiar média da cidade;
A média do número de filhos de cada família.
Use repetição para ler as informações de cada família (uma por vez) e, ao término, calcule a média aritmética da renda e do número de filhos. Para finalizar a leitura dos dados forneça um valor negativo para a renda familiar.
 */

const prompt = require("prompt-sync")();

let numFilhos = 0;
let mediaRenda = 0;
let mediaFilhos = 0;
let contagem = 0; // contador para o número de famílias

let renda = +prompt("Digite a renda familiar (Digite um valor negativo para encerrar): ");

while (renda >= 0) {
    numFilhos = +prompt("Digite o número de filhos: ");
    mediaRenda += renda;
    mediaFilhos += numFilhos;
    contagem++;
    renda = +prompt("Digite a renda familiar: ");
}

if (contagem > 0) {
    mediaRenda /= contagem;
    mediaFilhos /= contagem;
}

console.log(`A renda familiar média da cidade é: ${mediaRenda}`);
console.log(`A média do número de filhos de cada família é: ${mediaFilhos}`);