// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


const button = document.getElementById('button')
button.addEventListener('click', function(){

    // INPUT
    // generare prima un numero per l'utente e poi per il computer
    const userNumber = Math.floor(Math.random() * 6) + 1;
    const cmpNumber = Math.floor(Math.random() * 6) + 1;
    const yournmb = document.getElementById('your-number');
    const pcnmb = document.getElementById('pc-number');
    const rslt = document.getElementById('result');
    // fare un if con tre possibilità per decretare il vincitore
    
    // LOGICA
    let result
    if (userNumber > cmpNumber){
        result = 'user win'
    } else if (cmpNumber > userNumber) {
        result = 'PC win'
    } else {
        result = 'Pareggio'
    }
    
    // OUTPUT
    console.log(userNumber);
    console.log(cmpNumber);
    console.log(result);
    
    yournmb.innerHTML = `Your number is ${userNumber}`
    pcnmb.innerHTML = `Computer number is ${cmpNumber}`
    rslt.innerHTML = result
})