/*
Snack 5:
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
*/


/**
 * ## Valori compresi tra "a" e "b"
 * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
 * @param {Array} list array da cui estrapolare gli elementi
 * @param {Number} a a < b
 * @param {Number} b b < list.length
 * @returns {Array} array con valori compresi tra "a" e "b"
 */
function between (list, a, b) {
    var newList = [];

    if (a > b) {
        alert('Attenzione il valore di "a" deve essere minore "b"')
    } else if (b > list.length) {
        alert('Attenzione il valore di "b" deve essere minore al numero di elementi contenuti in "list"')
    } else {
        while (a <= b) {
            newList.push(list[a]);
            
            a++
        }
    
        return newList;
    };
};


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(between(numbers, 2, 8));




