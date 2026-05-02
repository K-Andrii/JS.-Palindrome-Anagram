"use strict";

function isPalindromeEasy(str){
    if(typeof str !== 'string' || str.length === 0) return false

    const cleanStr = str.replace(/\s/g, '');

    let reversedStr = cleanStr.split('').reverse().join('');
    return reversedStr.toLowerCase() === cleanStr.toLowerCase();
}

function isPalindromeHard(str){
    if(typeof str !== 'string' || str.length === 0) return false

    let lowerStr = str.toLowerCase().replace(/\s/g, '');
    for (let i = 0; i < Math.floor(lowerStr.length / 2); i++) {
        if (lowerStr[i] !== lowerStr[lowerStr.length - 1 - i]) return false;
    }
    return true;
}

function isAnagramEasy(firstStr, secondStr){
    if (typeof firstStr !== 'string' || typeof secondStr !== 'string') return false;

    const sortedFirstStr = firstStr.toLowerCase().replace(/\s/g, '').split('').sort().join('');
    const sortedSecondStr = secondStr.toLowerCase().replace(/\s/g, '').split('').sort().join('');

    if (sortedFirstStr.length !== sortedSecondStr.length || sortedFirstStr.length === 0) return false;

    return sortedFirstStr === sortedSecondStr;
}

function isAnagramHard(firstStr, secondStr){
    if (typeof firstStr !== 'string' || typeof secondStr !== 'string') return false;

    let lowerFirstStr = firstStr.toLowerCase().replace(/\s/g, '');
    let lowerSecondStr = secondStr.toLowerCase().replace(/\s/g, '');

    if (lowerFirstStr.length !== lowerSecondStr.length || lowerFirstStr.length === 0) return false;

    for (let i = 0; i < lowerFirstStr.length; i++) {
        lowerSecondStr = lowerSecondStr.replace(lowerFirstStr[i], '');
    }

    return lowerSecondStr === '';
}

console.log(isPalindromeEasy('Rotator'))
console.log(isPalindromeHard('Redivider'))
console.log(isAnagramEasy('Debit card', 'Bad credit'))
console.log(isAnagramHard('Dormitory', 'Dirty room'))