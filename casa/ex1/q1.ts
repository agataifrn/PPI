// 1. Calcule o volume de um cilindro dada a sua altura (h) e o seu raio (r) pela fórmula: v =  r2h 



function calcular_v_c(r: number, h: number): number {
    const pi = Math.PI;
    let v = pi * (r**2) * h;
    return v;
}

let r = 2;
let h = 10;
let v_f = calcular_v_c(r, h);

console.log(`O volume de um cilindro de altura ${h} e raio ${r} é de ${v_f.toFixed(2)}.`)


