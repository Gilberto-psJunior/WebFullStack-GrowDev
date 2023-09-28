/*
Crie uma função que recebe um valor inteiro e retorne verdadeiro se
for ímpar ou falso se for par.
*/

function compara(i) {
  if (i % 2 == 0) {
    return console.log("verdadeiro");
  } else {
    return console.log("falso");
  }
}
console.log(compara(8,2));
