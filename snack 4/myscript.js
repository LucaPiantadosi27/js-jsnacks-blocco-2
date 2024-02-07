// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

let userChoice = prompt("Scegli un numero, oppure clicca 'exit'");


console.log("user choice", userChoice);


// finchè la scelta è diversa da "exit"

while (userChoice != "exit") {

    if ( ! isNaN(userChoice)) { // NOT, solo se  è un numero

        // converto in numero la scelta dell'utente
        const userNumber = Number(userChoice)

        // faccio il controllo
        if (userNumber % 2 == 0) { // pari

            console.log(userNumber);
        
        } else {
        
            console.log(userNumber + 1);
        }

    } else {
        alert("Inserisci un numero");
    }

    userChoice = prompt("Scegli un altro numero, oppure clicca 'exit'")
}

console.log("uscita") 