/* 
Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

var zucchine = [
    {
        peso : 1,
        lunghezza : 5
    },
    {
        peso : 2,
        lunghezza : 6
    },
    {
        peso : 3,
        lunghezza : 7
    },
    {
        peso : 4,
        lunghezza : 7.5
    },
    {
        peso : 5,
        lunghezza : 8
    },
    {
        peso : 6,
        lunghezza : 6.5
    },
    {
        peso : 7,
        lunghezza : 9
    },
    {
        peso : 8,
        lunghezza : 10
    },
    {
        peso : 9,
        lunghezza : 12
    },
    {
        peso : 10,
        lunghezza : 14
    }
];
console.log(zucchine);

var pesoTot = 0;

var i = 0;
while (i < zucchine.length) {
    pesoTot += zucchine[i].peso;

    i++
};

console.log('Peso totale zucchine: ' + pesoTot);
