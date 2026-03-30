// 4. Faça um programa que defina uma constante objeto no formato JSON contendo o seu nome, matrícula, curso e IRA (Índice de Rendimento Acadêmico). Usando o formato template string, imprima uma frase contendo essas informações. Exemplo: “Maria é aluna de Informática com matrícula 202092923222 e possui IRA 83.2”. 

interface Discente {
    mat: number;
    nome: string;    
    curso: string;
    IRA: number;
}

const discente: Discente = {
    mat: 202092923222,
    nome: `Maria`,
    curso: `Informática`,
    IRA: 83.2
}

console.log(`${discente.nome} é aluna de ${discente.curso} com matrícula ${discente.mat} e possui IRA ${discente.IRA}.`)