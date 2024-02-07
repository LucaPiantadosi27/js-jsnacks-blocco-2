// Genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. 
//Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale.
// Quando l'utente trova il numero, fateglielo sapere!

function getRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
  }
  
  let number = getRandomNumber(1, 100);
  let userNumber = Number(prompt("indovina il numero fra 1 e 100?"));
  
  while (userNumber !== number) {
    if (userNumber > number) {
      alert(`${userNumber}  Mi dispiace, troppo alto `);
      userNumber = Number(prompt("indovina il numero fra 1 e 100?"));
    } else if (userNumber < number) {
      alert(`${userNumber}  Mi dispiace, troppo basso `);
      userNumber = Number(prompt("indovina il numero fra 1 e 100?"));
    } else {
      document.writeln(`<h2> Fantastico ! Hai indovinato il numero</h2>`);
    }
  }
  document.writeln(`<h2>Fantastico ! Hai indovinato il numero pensato = ${number}</h2>`);