/* 
Snack 2:
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. 
*/

var zucchine = [
    {
        peso : 1,
        lunghezza : 10
    },
    {
        peso : 2,
        lunghezza : 11
    },
    {
        peso : 3,
        lunghezza : 12
    },
    {
        peso : 4,
        lunghezza : 13
    },
    {
        peso : 5,
        lunghezza : 14
    },
    {
        peso : 6,
        lunghezza : 15
    },
    {
        peso : 7,
        lunghezza : 16
    },
    {
        peso : 8,
        lunghezza : 17
    },
    {
        peso : 9,
        lunghezza : 18
    },
    {
        peso : 10,
        lunghezza : 19
    }
];

var zucchinePiccole = [];
var pesoZucchinePiccole = 0;

var zucchineGrandi = [];
var pesoZucchineGrandi = 0;

i = 0;
while (i < zucchine.length) {
    if (zucchine[i].lunghezza < 15) {
        zucchinePiccole.push(zucchine[i])
        pesoZucchinePiccole += zucchine[i].peso;

    } else {
        zucchineGrandi.push(zucchine[i]);
        pesoZucchineGrandi += zucchine[i].peso;
    }

    i++
}

console.log(zucchinePiccole);
console.log('Il peso delle zucchine < 15cm è: ' + pesoZucchinePiccole);

console.log(zucchineGrandi);
console.log('Il peso delle zucchine > 15cm è: ' + pesoZucchineGrandi);

