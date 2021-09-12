// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const iDKWhatImDoing = (arr, a, b) => arr.filter ( (element, index) => {return index > a - 1 && index < b -1;})


 const arrTest = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

console.log(arrTest);



var numB = parseInt(prompt("l'array ha " + arrTest.length + ' elementi.' + ' inserisci un numero non superiore a ' + arrTest.length));

while (numB > arrTest.length || numB == 0 || isNaN(numB)){
    numB = parseInt(prompt('attento, devi inserire un numero non superiore a ' + arrTest.length));
}

var numA = parseInt(prompt('ora inserisci un numero inferiore a ' + (numB)));

while (numA >= numB || numA == 0 || isNaN(numA)){
    numA = parseInt(prompt('attento, devi inserire un numero inferiore a ' + (numB)));
}


console.log(iDKWhatImDoing(arrTest, numA, numB));
