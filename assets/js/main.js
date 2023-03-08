
// chiedo all'utente km e età e li assegno ad una variabile

const km = prompt('Quanti chilometri devi percorrere?');
console.log(km);

const age = prompt('Quanti anni hai?');
console.log(age);

// dichiaro la variabile del prezzo per chilometro

const priceKm = 0.21;

// dichiaro la variabile del totale senza assegnarle nessun valore

let tot;
const finalPrice = document.getElementById('priceTot')

// verifico le situazioni e applico gli sconti dove posso

if (age < 18) {
    tot = (km * priceKm) * 20 / 100;
    console.log(tot.toFixed(2));

    finalPrice.innerHTML = `${tot.toFixed(2)} €`;

} else if (age > 65) {
    tot = (km * priceKm) * 40 / 100;
    console.log(tot.toFixed(2));

    finalPrice.innerHTML = `${tot.toFixed(2)} €`;

} else {
    tot = (km * priceKm);

    finalPrice.innerHTML = `${tot.toFixed(2)} €`;

}