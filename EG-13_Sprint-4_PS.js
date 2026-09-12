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


// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function(nums) {
//     const n = nums.length;
//     const res = new Array(n).fill(1);
    
//     let prefix = 1;
//     for (let i = 0; i < n; i++) {
//         res[i] = prefix;
//         prefix *= nums[i];
//     }
    
//     let postfix = 1;
//     for (let i = n - 1; i >= 0; i--) {
//         res[i] *= postfix;
//         postfix *= nums[i];
//     }
    
//     return res;
// };


// console.log("([-1, 1, 0, -3, 3]):", productExceptSelf([-1, 1, 0, -3, 3]));







// 07. Remove Nth Node From End of List


// /**
//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
//  */
// var removeNthFromEnd = function(head, n) {
//     const dummy = new ListNode(0, head);
//     let fast = dummy;
//     let slow = dummy;
    
//     for (let i = 0; i <= n; i++) {
//         fast = fast.next;
//     }
    
//     while (fast !== null) {
//         slow = slow.next;
//         fast = fast.next;
//     }
    
//     slow.next = slow.next.next;
    
//     return dummy.next;
// };


// console.log("listArray", listToArray(removeNthFromEnd(arrayToList([1, 2, 3, 4, 5]), 2)));






// 08. Find First and Last Position of Element in Sorted Array

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var searchRange = function(nums, target) {
//     const findBound = (isFirst) => {
//         let left = 0, right = nums.length - 1;
//         let bound = -1;
        
//         while (left <= right) {
//             let mid = Math.floor((left + right) / 2);
//             if (nums[mid] === target) {
//                 bound = mid;
//                 if (isFirst) {
//                     right = mid - 1;
//                 } else {
//                     left = mid + 1;
//                 }
//             } else if (nums[mid] < target) {
//                 left = mid + 1;
//             } else {
//                 right = mid - 1;
//             }
//         }
//         return bound;
//     };
    
//     return [findBound(true), findBound(false)];
// };

// console.log("([5,7,7,8,8,10]", searchRange([5, 7, 7, 8, 8, 10], 8));




// 09. Permutation in String 

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    
    const count1 = new Array(26).fill(0);
    const count2 = new Array(26).fill(0);
    
    for (let i = 0; i < s1.length; i++) {
        count1[s1.charCodeAt(i) - 97]++;
        count2[s2.charCodeAt(i) - 97]++;
    }
    
    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (count1[i] === count2[i]) matches++;
    }
    
    for (let i = 0; i < s2.length - s1.length; i++) {
        if (matches === 26) return true;
        
        const leftIdx = s2.charCodeAt(i) - 97;
        const rightIdx = s2.charCodeAt(i + s1.length) - 97;
        
        count2[rightIdx]++;
        if (count2[rightIdx] === count1[rightIdx]) {
            matches++;
        } else if (count2[rightIdx] === count1[rightIdx] + 1) {
            matches--;
        }
        
        count2[leftIdx]--;
        if (count2[leftIdx] === count1[leftIdx]) {
            matches++;
        } else if (count2[leftIdx] === count1[leftIdx] - 1) {
            matches--;
        }
    }
    
    return matches === 26;
};



// console.log("('ab', 'eidbaooo'):", checkInclusion("ab", "eidbaooo"));
// console.log(" ('ab', 'eidboaoo'):", checkInclusion("ab", "eidboaoo"));