/* 3. Faça um programa que receba um intervalo numérico inteiro e positivo (ex. 2-10; 30-800) e retorne a quantidade 
de números primos existentes nesse intervalo (incluindo o início e o final). 
Aproveite o programa desenvolvido no exercício anterior. */

const prompt = require("prompt-sync")();

let inicio: number;
let fim: number;

do {
    inicio = +prompt("Digite o início do intervalo (inteiro positivo): ");
} while (inicio <= 0);

do {
    fim = +prompt("Digite o fim do intervalo (inteiro positivo): ");
} while (fim <= 0 || fim < inicio);

let contador: number = 0;

for (let i = inicio; i <= fim; i++) {
    let primo: boolean = true;
    let divisor: number = i - 1;

    while (primo && divisor > 1) {
        if (i % divisor == 0) {
            primo = false;
        } else {
            divisor = divisor - 1;
        }
    }

    if (primo) {
        contador++;
    }
}

console.log(`A quantidade de números primos no intervalo é: ${contador}`);