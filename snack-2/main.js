// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const numRnd = (min, max) => Math.floor(Math.random() * (max - min +1)) + min

const squadre = [
    {
        "nome": "Juventus",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Inter",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Milan",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Napoli",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Roma",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Torino",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Sampdoria",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Fiorentina",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Siena",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Empoli",
        "puntiFatti": 0,
        "falliSubiti": 0
    },

];


for (let i = 0; i < squadre.length; i++ ){

    squadre[i]['falliSubiti'] = numRnd(1, 100);
    squadre[i]['puntiFatti'] = numRnd(1, 100);

}

console.log(squadre)


const falliSquadre = [];


for (let i = 0; i < squadre.length; i++ ){
    let team = squadre[i]
    const {nome, falliSubiti} = team
    let newTeam = {};
    newTeam.nome = nome;
    newTeam.falliSubiti = falliSubiti;
    falliSquadre.push(newTeam);
}


// for (let i = 0; i < squadre.length; i++ ){
//     let team = {};
//     team = squadre[i]
//     delete team.puntiFatti;
//     falliSquadre.push(team);
// }



console.log(falliSquadre)


