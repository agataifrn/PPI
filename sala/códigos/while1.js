"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1 - Imprimir os números de 1 a 5
let numeros = 1; // inicialização
while (numeros <= 5) { // condição de parada
    console.log(numeros);
    numeros += 1; // incremento
}
/*2. Caclular a média de 4 notas que estão em um array
    const no caso de array ou objeto: não deixa alterar a
    referência, mas deixa alterar os valores dentro do array ou objeto
*/
const notas = [80.0, 54.4, 60.0, 90.54];
let soma = 0;
let pos = 0; // posição do array - começa em 0
while (pos < notas.length) { // condição de parada - enquanto a posição for menor que o tamanho do array
    if (pos === 0 || pos === 1) { // se a posição for 0 ou 1, soma a nota na média parcial
        soma = soma + 2 * notas[pos]; // soma a nota multiplicada por 2
    }
    else { // se a posição for 2 ou 3, soma a nota na média parcial
        soma = soma + 3 * notas[pos]; // soma a nota
    }
    pos++; //pos = pos + 1
}
console.log(`Média parcial = ${soma / 10}`); // divide a média parcial por 10 para obter a média final
/* ______________________________ */
const contatos = ["Maria", "João", "Pedro", "Ana", "Lucas"];
// 3. Imprimir a lista de contatos de contato
let posicao = 0;
while (posicao < contatos.length) {
    console.log(`Contato: ${contatos[posicao]}`);
    posicao++;
}
// 4. Retirar um contato de uma posição específica da lista de contatos (pode usar o método splice de array)
/* Buscar por um contato (sem usar métodos de JS)
    dado o nome da pessoa: true (está) e false (não está) */
const buscado = "Pedro";
let posicao_buscada = 0;
let encontrado = false; // FOI ENCONTRADO?
// enquanto a posição for menor que o tamanho do array e o contato não for encontrado
while (posicao_buscada < contatos.length && !encontrado) {
    if (contatos[posicao_buscada] === buscado) { // se o contato na posição for igual ao buscado
        encontrado = true; // se encontrou, altera para true
    }
    posicao_buscada++; // vai para a próxima posição
}
console.log(`Contato ${buscado} ${encontrado ? "encontrado" : "não encontrado"}`);
// versão TS  com o método find
const contatoEncontrado = contatos.find(contato => contato === buscado);
if (contatoEncontrado) {
    console.log(`Contato ${buscado} encontrado`);
}
else {
    console.log(`Contato ${buscado} não encontrado`);
}
//# sourceMappingURL=while1.js.map