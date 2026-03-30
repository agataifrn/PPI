// 2. Dada a média parcial (menor que 60) de um estudante do IFRN em uma disciplina, calcule quanto ele(a) precisa tirar na avaliação final para ser aprovado(a).

function qnt_recuperar(media_parcial: number): number {
    let avfinal = 120 - media_parcial;
    return avfinal;
}

let media_parcial = 50;
let af_f = qnt_recuperar(media_parcial);
console.log(`Resultado = ${af_f}`);
//    mediaFinal = parcial + av_final / 2