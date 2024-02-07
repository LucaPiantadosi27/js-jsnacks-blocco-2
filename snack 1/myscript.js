// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
//Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50

//array vuoto
const arrNums = [];
//variabile init
let num = 0;
//var aiutante
let sum = 0;

do {
  //chiedo all' utente di digitare un numero
  //se numero e minore di 50 ripeti prompt

  do {
    //chiedo all'utente di inserire un numero 
    num = Number(prompt("Inserisci un numero"));
  } while (isNaN(num));
 
  arrNums.push(num);
  console.log(arrNums);
  let i = 0;

  
  while (i < arrNums.length) {
    //somma deglii elmenti
    sum = sum + arrNums[i];
    i++;
  }
  // il num diventa somma cosi se sum > 50 esco dal loop
  num = sum;
  sum = 0;
  console.log(num);
} while (num < 50);

console.log(arrNums);
console.log("somma in arr " + num);