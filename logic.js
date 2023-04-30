// dichiaro le mie variabili GLOBAL
let quantiKm, passengerAge, somma, message;
const priceKm = 0.21;

// chiedo il numero di km che il passeggero vuole percorrere
quantiKm = prompt ("Quanti km devi percorrere?");

// chiedo età del passeggero
 passengerAge = prompt ("Quanti anni hai?");

// calcolo il prezzo del biglietto: 0.21€ * km
somma = quantiKm * priceKm;

// calcolo gli scontni, dove i < 18 pagano -20% e i >65 il -40%
if (passengerAge < 18) {
    somma = somma * 0.8;
} else if (passengerAge > 64) {
    somma = somma * 0.6;
} else {

}

console.log(somma);

// output con soli due decimali + Messaggio finale
message = `L'importo totale per la tua tratta è di ${ somma.toFixed(2)} €`;

// risultato finale
document.getElementById("my_id").innerHTML = message;
