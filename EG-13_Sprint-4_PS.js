// 01. Isomorphic Strings

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isIsomorphic = function(s, t) {
//     if (s.length !== t.length) return false;
    
//     const mapST = new Map();
//     const mapTS = new Map();
    
//     for (let i = 0; i < s.length; i++) {
//         const charS = s[i];
//         const charT = t[i];
        
//         if ((mapST.has(charS) && mapST.get(charS) !== charT) ||
//             (mapTS.has(charT) && mapTS.get(charT) !== charS)) {
//             return false;
//         }
        
//         mapST.set(charS, charT);
//         mapTS.set(charT, charS);
//     }
    
//     return true;
// };

// console.log("('paper', 'title'):", isIsomorphic("paper", "title"));





// 02. Word Pattern

// /**
//  * @param {string} pattern
//  * @param {string} s
//  * @return {boolean}
//  */
// var wordPattern = function(pattern, s) {
//     const words = s.split(' ');
//     if (pattern.length !== words.length) return false;
    
//     const charToWord = new Map();
//     const wordToChar = new Map();
    
//     for (let i = 0; i < pattern.length; i++) {
//         const char = pattern[i];
//         const word = words[i];
        
//         if ((charToWord.has(char) && charToWord.get(char) !== word) ||
//             (wordToChar.has(word) && wordToChar.get(word) !== char)) {
//             return false;
//         }
        
//         charToWord.set(char, word);
//         wordToChar.set(word, char);
//     }
    
//     return true;
// };

// console.log("('abba', 'dog cat cat dog'):", wordPattern("abba", "dog cat cat dog"));




// 03. Find the Difference

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let xorVal = 0;
    
    for (let i = 0; i < s.length; i++) {
        xorVal ^= s.charCodeAt(i);
    }
    for (let i = 0; i < t.length; i++) {
        xorVal ^= t.charCodeAt(i);
    }
    
    return String.fromCharCode(xorVal);
};

// console.log("('abcd', 'abcde'):", findTheDifference("abcd", "abcde"));