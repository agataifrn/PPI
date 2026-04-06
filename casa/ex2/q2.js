"use strict";
/* 2. Implemente em Typescript o algoritmo abaixo que verifica se um número inteiro (maior que 1) é ou não primo.


algoritmo "primo"
início
      //O num. é divisível por algum outro que não seja ele e 1?
    num: inteiro
      escreva("Número inteiro positivo (>1): ")


      repita
        leia(num)
      enquanto num <= 1
     
      primo: lógico     = true
      divisor: número   = num - 1
     
      enquanto (primo .e. divisor > 1) faça
          se (num % divisor == 0) então
              primo = false
          senão
              divisor = divisor - 1
          fimse
      fimenquanto
     
      se (primo) então
         escreva("O número ", num, " é primo")
      senão
         escreva("O número ", num, " não é primo")
      fimse
fim

*/
Object.defineProperty(exports, "__esModule", { value: true });
const prompt = require("prompt-sync")();
let num;
prompt("Número inteiro positivo (>1): ");
do {
    num = +prompt("Número inteiro positivo (>1): ");
} while (num <= 1);
let primo = true;
let divisor = num - 1;
while (primo && divisor > 1) {
    if (num % divisor == 0) {
        primo = false;
    }
    else {
        divisor = divisor - 1;
    }
}
if (primo) {
    console.log(`O número ${num} é primo`);
}
else {
    console.log(`O número ${num} não é primo`);
}
//# sourceMappingURL=q2.js.map