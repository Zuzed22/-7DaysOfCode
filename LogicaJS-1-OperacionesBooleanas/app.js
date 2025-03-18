let numeroUn = 1;
let stringUn = '1';
let numeroTreinta = 30;
let stringTreinta = '30';
let numeroDiez = 10;
let stringDiez = '10';

if (numeroUn == stringUn) { // Comparación débil (convierte tipos automáticamente)
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
} 
else {
  console.log('Las variables numeroUn y stringUn no tienen el mismo valor');
}

  
if (numeroTreinta === stringTreinta) { // Comparación estricta del valor y el tipo
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
} 
else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
}


if (numeroDiez == stringDiez) { // Comparación débil (compara valores ignorando el tipo)
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
} 
else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor');
}