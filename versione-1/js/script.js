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
    // Qui abbiamo deciso che se l'utente ci da dei numeri duplicati, sono fatti suoi
    // vorrà dire che non raggiungera mai il punteggio massimo
    const rightNumbers = [];
    for(let i = 0; i < 5; i++) {
        const userNumber = parseInt(prompt("Dimmi un numero"));
        console.log(userNumber);

        // lo salvo in un array rightNumbers solo se il numero dell'utente è presente
        // nell'array dei numeri originali e se il numero non è giò presente nell'array
        // rightNumbers
        if(originalNumbers.includes(userNumber) && !rightNumbers.includes(userNumber)) {
            rightNumbers.push(userNumber);
        }
    }

    alert(`Il gioco è finito, il tuo punteggio è ${rightNumbers.length}. Hai azzeccato questi numeri: ${rightNumbers.join(' - ')}`);
    // Avrà ottenuto l'array completo dei numeri corretti, quindi stampo il risultato
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