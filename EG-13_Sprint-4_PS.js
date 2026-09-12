// for test

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function listToArray(head) {
    let result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}












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

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {character}
//  */
// var findTheDifference = function(s, t) {
//     let xorVal = 0;
    
//     for (let i = 0; i < s.length; i++) {
//         xorVal ^= s.charCodeAt(i);
//     }
//     for (let i = 0; i < t.length; i++) {
//         xorVal ^= t.charCodeAt(i);
//     }
    
//     return String.fromCharCode(xorVal);
// };

// console.log("('abcd', 'abcde'):", findTheDifference("abcd", "abcde"));





// 04. Reverse Linked List

// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var reverseList = function(head) {
//     let prev = null;
//     let curr = head;
    
//     while (curr !== null) {
//         let nextTemp = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = nextTemp;
//     }
    
//     return prev;
// };

// console.log("([1, 2, 3, 6, 8, 3, 9]):", listToArray(reverseList(arrayToList([1, 2, 3, 6, 8, 3, 9]))));





// 05. Middle of the Linked List

// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var middleNode = function(head) {
//     let slow = head;
//     let fast = head;
    
//     while (fast !== null && fast.next !== null) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }
    
//     return slow;
// };
 
// console.log(" ([1, 2, 3, 4, 5, 6]):", listToArray(middleNode(arrayToList([1, 2, 3, 4, 5, 6]))));






// 06. Product of Array Except Self


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const res = new Array(n).fill(1);
    
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        res[i] = prefix;
        prefix *= nums[i];
    }
    
    let postfix = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= postfix;
        postfix *= nums[i];
    }
    
    return res;
};


// console.log("([-1, 1, 0, -3, 3]):", productExceptSelf([-1, 1, 0, -3, 3]));