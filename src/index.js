"use strict";

function isPalindromeEasy(str){
    let reversedStr = str.split('').reverse().join('')
    return reversedStr.toLowerCase() === str.toLowerCase();
}

function isPalindromeHard(str){
    let lowerStr = str.toLowerCase();
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (lowerStr[i] !== lowerStr[str.length - 1 - i]) return false;
    }
    return true;
}

function isAnagramEasy(str){

}

function isAnagramHard(str){

}

console.log(isPalindromeEasy('Anna'))
console.log(isPalindromeHard('Annaa'))
console.log(isAnagramEasy())
console.log(isAnagramHard())