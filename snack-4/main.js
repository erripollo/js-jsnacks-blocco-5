/*
Snack 4:
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/


/**
 * ## Unione 2 array con elementi alternati
 * Unisce due array (con stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
 * es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
 * 
 * @param {Array} list1 es. [a,b,c]
 * @param {Array} list2 es. [1,2,3]
 * @returns {Array} es. [a,1,b,2,c,3]
 */
function unioneArray(list1, list2) {
    if (list1.length !== list2.length){
        alert('Per utilizzare la funzione "unioneArray" gli arrays devono contenere lo stesso numero di elementi')
    } else {
        var merge = [];

        for (var i = 0; i < list1.length; i++) {
            merge.push(list1[i], list2[i])
        };

        return merge
    }

};

var letters = ['a', 'b', 'c'];
var numbers = [1, 2, 3];


console.log(unioneArray(letters, numbers));



