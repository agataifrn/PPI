"use strict";
// 3. Dada uma data no formato dd/mm/aaaa (menor ou igual a data de hoje), imprima quantos dias se passaram do início do ano (01/01/2025) até esta data. Exemplo: Para o dia '11/04/2025' o resultado é 100. 
Object.defineProperty(exports, "__esModule", { value: true });
let data_agora = new Date();
let inicio_ano = new Date('2026-01-01');
let data_agora_ms = data_agora.getTime();
let inicio_ano_ms = inicio_ano.getTime();
let resultado_ms = data_agora_ms - inicio_ano_ms;
let resultado_ms_convertido = resultado_ms / 86400000;
console.log(`Fazem ${resultado_ms_convertido.toFixed(0)} dias desde o início do ano até a data informada.`);
//# sourceMappingURL=q3.js.map