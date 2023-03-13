// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const arrayEmail = ['caio@gmail.com', 'lolita@gmail.com', 'checcobomba@gmail.com'] 
console.log(arrayEmail);

const button = document.getElementById('button')
button.addEventListener('click', function(){
    
    const userEmailInput = document.getElementById('usermail')
    const userEmail = userEmailInput.value
    let result = 'la tua email non è registrata al sito'
    for (i = 0; i < arrayEmail.length; i++){
        if(userEmail === arrayEmail[i]){
            result = 'puoi accedere al sito'
        }
    }
    console.log(userEmail);
    console.log(result);
})