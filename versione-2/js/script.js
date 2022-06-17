// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, 
// uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Generare 5 numeri random
const originalNumbers = generateRandomNumbersArray(5, 1, 50);
console.log(originalNumbers);
// Mostarli in un alert
alert(originalNumbers.join(' - '));

// Dopo 30 secondi
setTimeout(() => {
    // Mostrare per 5 volte un prompt e per ogni numero
    // Qui abbiamo deciso che se l'utente mi dai dei numeri duplicati
    // continuo a chiedere dei prompt finche userNumbers non ha 5 numeri univoci
    const userNumbersArray = []; 
    while(userNumbersArray.length < 5) {
        // Chiedo un numero all'utente un numero
        // il numero lo aggiungo a userNumbers solo se non è già compreso
        const userNumber = parseInt(prompt("Dimmi un numero"));
        
        if(!userNumbersArray.includes(userNumber)) {
            userNumbersArray.push(userNumber);
        }
    }
    
    // Ora ho ottenuto dentro userNumbersArray i 5 numeri univoci forniti dall'utente
    // Confronto gli array per capire quali sono i numeri azzeccati dall'utente e li salvo 
    // in rightNumbers
    const rightNumbers = [];
    for(let i = 0; i < userNumbersArray.length; i++) {
        const thisUserNumber = userNumbersArray[i];
        
        if(originalNumbers.includes(thisUserNumber)) {
            rightNumbers.push(thisUserNumber);
        }
    }

    console.log(rightNumbers);
    alert(`Hai finito il gioco. Il tuo punteggio è ${rightNumbers.length}. I numeri azzeccati sono: ${rightNumbers.join(' - ')}`);

}, 2000);

// ---------------
// FUNCTIONS
// ---------------

// Genera un array di x elementi in cui ogni elemento è un numero random
// numberOfElements -> numero di elementi dell'array
// rangeMin -> Range minimo dei numeri random generati
// rangeMax -> Range massimo dei numeri random generati
// return: array di numeri random con lunghezza numberOfElements
function generateRandomNumbersArray(numberOfElements, rangeMin, rangeMax) {
    // Per numberOfElements volte creare un numero casuale e aggiungerlo a un array vuoto (senza duplicati)
    const randomNumbersArray = [];
    while(randomNumbersArray.length < numberOfElements) {
        // Creare un numero ramdon da rangeMin a rangeMax
        const randomNumber = getRndInteger(rangeMin, rangeMax);
        // Pushiamo solo se il numero non è gia presente
        if(!randomNumbersArray.includes(randomNumber)) {
            randomNumbersArray.push(randomNumber);
        }
    }

    return randomNumbersArray;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}