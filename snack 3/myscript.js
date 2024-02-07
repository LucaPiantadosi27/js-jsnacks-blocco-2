// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. 
// (Se iniziate con un array da 3 elementi e l'altro da 5, eseguite istruzioni sinchè non ne hanno entrambi 5.

const arr1 = ["paolo", 7, "elementx", "agnes", "50", "Cavallo"];
const arr2 = [
  "Franco",
  7,
  "elementx",
  "elemento1",
  "elemento2",
  "elementoXY, 99",
];


let elementToInsert;

if (arr1.length < arr2.length) {
  for (let i = arr1.length; i < arr2.length; i++) {
    elementToInsert = prompt("Add an element to arr1");
    arr1.push(elementToInsert);
  }

} else if (arr2.length < arr1.length) {
  for (let i = arr2.length; i < arr1.length; i++) {
    elementToInsert = prompt("Add an element to arr2");
    arr2.push(elementToInsert);
  }

} else {
  console.log("arrs uguali");
}

console.log(arr1.length);
console.log(arr2.length);
document.writeln(`<h2>Array 1 [${arr1}]</h2>`);
document.writeln(`<h2>Array 2 [${arr2}]</h2>`);