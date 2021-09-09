// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


const bicycles = [
    {
        nome: 'Mountain-bike',
        peso: 8
    },
    {
        nome: 'BMX',
        peso: 4
    },
    {
        nome: 'Downhill',
        peso: 6
    },
    {
        nome: 'Fat-bike',
        peso: 9
    },
    {
        nome: 'Elettrica',
        peso: 10
    },
    {
        nome: 'Da Corsa',
        peso: 3
    },

]

var less;
for (var i = 0; i < bicycles.length; i++ ){

    if (i == 0){
        less = bicycles[i];
           
    } else if (less.peso > bicycles[i].peso){
        less = bicycles[i];
    } 


}

const {nome, peso} = less

console.log((`La bici più leggera è ${nome} dal peso ${peso} kg`))
