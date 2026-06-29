function findLongestWord(text){
    const Words = text.split(' ')
    let longestWord = '';

for (let fin = 0; fin < Words.length; fin++){
    if (Words[fin].length > longestWord.length){
        longestWord = Words[fin];
    }
}
return longestWord
}
// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
console.log(findLongestWord(text)); 