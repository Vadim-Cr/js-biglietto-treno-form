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

// output con soli due decimali + Messaggio finale sul prezzo
message = `${ somma.toFixed(2)} €`;

// risultato finale
document.getElementById("my_id").innerHTML = message;


// todo cerco di far aparire il testo inserito sul contenitore sopra al contenitore sotto
// nome e cognome
    const inputElement = document.getElementById("myInputName");
    const outputElement = document.getElementById("myOutputName");

    inputElement.addEventListener("input", () => {
        const inputValue = inputElement.value;
        outputElement.textContent = inputValue;
    })

// Km da percorrere

    const inputElementKm = document.getElementById("myInputKm");
    const outputElementKm = document.getElementById("myOutputKm");

inputElementKm.addEventListener("input", () => {
    const inputValueKm = inputElementKm.value;

})

// Età del passegero
    const inputElementAge = document.getElementById("myInputAge");
    const outputElementAge = document.getElementById("myOutpuDiscount");

    inputElementAge.addEventListener("input", () => {
        const inputValueAge = parseInt(inputElementAge.value);
        if (inputValueAge < 18) {
            outputElementAge.textContent = "Sconto del 20%";
        } else if (inputValueAge > 64) {
            outputElementAge.textContent = "Sconto del 40%";
        } else {
            outputElementAge.textContent = "Nessun Sconto";
        }
    })



// todo Cercherò di creare un numero random della carrozza al click del genera

const createTicket = document.getElementById("create");
const carrozza = document.getElementById("random_number")

createTicket.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
    carrozza.innerText = randomNumber;
  });

