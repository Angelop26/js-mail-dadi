// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// generare prima un numero per l'utente e poi per il computer
const userNumber = Math.floor(Math.random() * 6) + 1;
const cmpNumber = Math.floor(Math.random() * 6) + 1;
// fare un if con tre possibilità per decretare il vincitore

let result
if (userNumber > cmpNumber){
    result = 'user win'
} else if (cmpNumber > userNumber) {
    result = 'PC win'
} else {
    result = 'Pareggio'
}

console.log(userNumber);
console.log(cmpNumber);
console.log(result);