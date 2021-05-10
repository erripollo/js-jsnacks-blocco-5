/* 
Snack 3:
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC) 
*/

/**
 * ## inversione stringa
 * restitiusce una stringa scritta nel verso opposto (es. Ciao -> oaiC) 
 * @param {string} word stringa iniziale (es. Ciao)
 * @returns {string} stringa scritta nel verso opposto (es. oaiC)
 */
 function reverseWord(word) {
    var splitWord = word.split('')
    var reverse = splitWord.reverse()
    var joinReverseWord = reverse.join('')
    
    return joinReverseWord
}

console.log(reverseWord('Ciao'));

