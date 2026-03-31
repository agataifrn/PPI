"use strict";
// 4. Faça um programa que defina uma constante objeto no formato JSON contendo o seu nome, matrícula, curso e IRA (Índice de Rendimento Acadêmico). Usando o formato template string, imprima uma frase contendo essas informações. Exemplo: “Maria é aluna de Informática com matrícula 202092923222 e possui IRA 83.2”. 
Object.defineProperty(exports, "__esModule", { value: true });
const discente = {
    mat: 202092923222,
    nome: `Maria`,
    curso: `Informática`,
    IRA: 83.2
};
console.log(`${discente.nome} é aluna de ${discente.curso} com matrícula ${discente.mat} e possui IRA ${discente.IRA}.`);
//# sourceMappingURL=q4.js.map