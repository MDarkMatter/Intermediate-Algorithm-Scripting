// Sum All Numbers in a Range
//
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
//
// The lowest number will not always come first.

function sumAll(arr) {
    var allDigits = [];
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
        allDigits.push(i);
    }
    return allDigits.reduce((prev, curr) => prev + curr);
}



// Diff Two Arrays
//
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    var nonDupe = newArr.filter(findDupes);
    return nonDupe;
}

function findDupes(element, index, array) {
    var arrSlice = array.slice(0);
    var removed = arrSlice.splice(index, 1);


    if (arrSlice.indexOf(removed[0]) === -1) {
        arrSlice.push(removed[0]);
        return true;
    } else {
        arrSlice.push(removed[0]);
        return false;


    }

}




// Roman Numeral Converter
// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

// start with looking at num.length

// 1 5 10 50 100 500 1000
// I V X  L  C   D   M

function convertToRoman(num) {
    var numDigits = num.toString().split('').reverse();
    var roman = [];
    for (var i = 0; i < numDigits.length; i++) {
        if (i === 0) {
            switch (numDigits[0]) {
                case "1":
                    roman.push("I");
                    break;
                case "2":
                    roman.push("II");
                    break;
                case "3":
                    roman.push("III");
                    break;
                case "4":
                    roman.push("IV");
                    break;
                case "5":
                    roman.push("V");
                    break;
                case "6":
                    roman.push("VI");
                    break;
                case "7":
                    roman.push("VII");
                    break;
                case "8":
                    roman.push("VIII");
                    break;
                case "9":
                    roman.push("IX");
                    break;
                default:
                    roman.push("");
            }
        } else if (i === 1) {
            switch (numDigits[1]) {
                case "1":
                    roman.push("X");
                    break;
                case "2":
                    roman.push("XX");
                    break;
                case "3":
                    roman.push("XXX");
                    break;
                case "4":
                    roman.push("XL");
                    break;
                case "5":
                    roman.push("L");
                    break;
                case "6":
                    roman.push("LX");
                    break;
                case "7":
                    roman.push("LXX");
                    break;
                case "8":
                    roman.push("LXXX");
                    break;
                case "9":
                    roman.push("XC");
                    break;
                default:
                    roman.push("");
            }
        } else if (i === 2) {
            switch (numDigits[2]) {
                case "1":
                    roman.push("C");
                    break;
                case "2":
                    roman.push("CC");
                    break;
                case "3":
                    roman.push("CCC");
                    break;
                case "4":
                    roman.push("CD");
                    break;
                case "5":
                    roman.push("D");
                    break;
                case "6":
                    roman.push("DC");
                    break;
                case "7":
                    roman.push("DCC");
                    break;
                case "8":
                    roman.push("DCCC");
                    break;
                case "9":
                    roman.push("CM");
                    break;
                default:
                    roman.push("");
            }
        } else if (i === 3) {
            switch (numDigits[3]) {
                case "1":
                    roman.push("M");
                    break;
                case "2":
                    roman.push("MM");
                    break;
                case "3":
                    roman.push("MMM");
                    break;
                default:
                    roman.push("");
            }
        }
    }
    return (roman.reverse().join(''));
}


// Where art thou

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.


function whereAreYou(collection, source) {
    var arr = [];
    var flag = true;
    var sourceKey = Object.keys(source);

    for (var i = 0; i < collection.length; i++) {
        for (var j = 0; j < sourceKey.length; j++) {
            if (collection[i].hasOwnProperty(sourceKey[j]) && source[sourceKey[j]] === collection[i][sourceKey[j]]) {
                flag = true;
            } else {
                flag = false;
            }
        }
        if (flag) {
            arr.push(collection[i]);
        } else {
            flag = true;
        }
    }

    return arr;
}



// Search and Replace

// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
    var re = new RegExp(before, 'gi');
    var newString = str.replace(re, firstChar(before, after));

    return newString;
}

function firstChar(before, after) {
    if (before[0] === before[0].toUpperCase()) {
        var newAfter = after.split('');
        newAfter.splice(0, 1, newAfter[0].toUpperCase());
        return newAfter.join('');
    } else {
        return after;
    }
}


// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

function translatePigLatin(str) {
    var newStr = str.split('');
    var vowel = ['a', 'e', 'i', 'o', 'u'];
    if (vowel.indexOf(newStr[0]) >= 0) {
        newStr.push('way');
        return newStr.join('');
    } else {
        vowelLookup(vowel, newStr);
    }

    return newStr.join('');
}

function vowelLookup(vowel, newStr) {
    for (var i = 0; i < newStr.length; i++) {
        if (vowel.indexOf(newStr[i]) >= 0) {
            var whereIsIt = newStr.indexOf(newStr[i]);
            var removed = newStr.splice(0, whereIsIt);
            removed.push('ay');
            newStr.push(removed.join(''));
            newStr = (newStr.join(''));
            return newStr;
        }
    }
}

// DNA Pairing

// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


function pairElement(str) {
    var arr1 = str.split('');
    var arr2 = [];
    var arr3 = [];

    for (var i = 0; i < arr1.length; i++) {
        switch (arr1[i]) {
            case 'G':
                arr2 = [arr1[i], 'C'];
                arr3.push(arr2);
                break;
            case 'C':
                arr2 = [arr1[i], 'G'];
                arr3.push(arr2);
                break;
            case 'A':
                arr2 = [arr1[i], 'T'];
                arr3.push(arr2);
                break;
            case 'T':
                arr2 = [arr1[i], 'A'];
                arr3.push(arr2);
                break;
        }
    }

    return arr3;
}


// Missing letters

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) + 1 !== str.charCodeAt(i + 1) && isNaN(str.charCodeAt(i + 1)) === false) {
            return String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
}


// Boo who
// Check if a value is classified as a boolean primitive. Return true or false.
//
// Boolean primitives are true and false.

function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    if (bool === true || bool === false) {
        return true;
    } else {
        return false;
    }
}

booWho(null);


// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
//
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
//
// Check the assertion tests for examples.

function uniteUnique(arr) {
    var newArr = [];
    var compare = [];
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
            newArr.push(arguments[i][j]);
        }
    }
    compare = newArr;
    console.log(newArr);
    for (var k = 0; k < newArr.length; k++) {
        if (compare.lastIndexOf(newArr[k]) !== newArr.indexOf(newArr[k])) {
            newArr.splice(newArr.lastIndexOf(newArr[k]), 1);
            k = 0;
        } else {}
    }
    return newArr;
}

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
    var options = ['&', '<', '>', '"', "'"];
    for (var i = 0; i < options.length; i++) {
        var newStr = search();
        if (newStr !== str) {
            break;
        }
    }

    function search() {
        switch (options[i]) {
            case "&":
                return str = str.replace(/&/gi, '&amp;');
            case "<":
                return str = str.replace(/</gi, '&lt;');
            case ">":
                return str = str.replace(/>/gi, '&gt;');
            case "'":
                return str = str.replace(/'/gi, '&apos;');
            case '"':
                return str = str.replace(/"/gi, '&quot;');
        }
    }
    return newStr;
}

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    str = str.replace(str[0], str[0].toLowerCase());
    str = str.replace(/[^A-Za-z0-9]/gi, ' ');
    var newStr = str.split('');
    for (var i = 0; i < newStr.length; i++) {
        if (newStr[i] === " ") {
            newStr[i + 1] = newStr[i + 1].toUpperCase();
            newStr.splice(i, 1);
        }
    }
    console.log(newStr);
    //working up to here.

    for (var j = 0; j < newStr.length; j++) {
        if (newStr[j] === newStr[j].toUpperCase()) {
            newStr[j] = newStr[j].toLowerCase();
            newStr.splice(j, 0, ' ');
        }
    }
    console.log(newStr);
    newStr = newStr.join('');
    return newStr.replace(/\s/g, '-');
}


// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

function sumFibs(num) {

    var firstDig = 1;
    var secondDig = 1;
    var sum;
    var oddSum;
    var arr = [1, 1];
    var newArr = [];

    order(firstDig, secondDig);
    oddFib(arr);
    return newArr.reduce(function(a, b) {
        return a + b;
    }, 0);

    function order() {
        do {
            // console.log (firstDig, secondDig, '<', num, sum);
            sum = firstDig + secondDig;
            arr.push(sum);
            firstDig = secondDig;
            secondDig = sum;
            sum = firstDig + secondDig;
        } while (sum <= num);
    }

    function oddFib(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {
                newArr.push(arr[i]);
            }
        }
    }
}


// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.


function sumPrimes(num) {
    var nonEven = [];
    var notPrime = [];
    var condition;

    for (var i = 2; i <= num; i++) {
        if (i % 2 !== 0) {
            nonEven.push(i);
        }
    }

    for (var j = 1; j < nonEven.length; j++) {
        for (var k = 2; k < nonEven[j]; k++) {
            if ((nonEven[j] / k) % 1 === 0) {
                notPrime.push(nonEven[j]);
            }

        }
    }
    nonEven.push(2);
    var isPrime = nonEven.filter(removal);

    function removal(value) {
        if (notPrime.indexOf(value) === -1) {
            return true;
        }
    }
    return isPrime.reduce(function(a, b) {
        return a + b;
    }, 0);
}


// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.


function smallestCommons(arr) {
    var multiple = [];
    var gcm;
    var isDiv = true;

    arr.sort(function(a, b) {
        return a - b;
    });
    var countUp = arr[1];
    construct(arr);

    while (countUp <= gcm) {
        checkDiv(arr, gcm);
        if (isDiv === true) {
            return countUp;
        } else {
            isDiv = true;
        }
        countUp += arr[1];
    }


    //construct array of multiples
    function construct(arr) {
        gcm = 1;
        for (var j = arr[0]; j <= arr[1]; j++) {
            gcm *= j;
        }
    }

    //check for divisability for each number between arr[0] and arr[1]
    function checkDiv(arr, gcm) {
        // console.log(arr[0], gcm);
        for (var i = arr[0]; i < arr[1]; i++) {
            if ((countUp / i) % 1 === 0) {
                isDiv = true;
            } else {
                isDiv = false;
                break;
            }
            console.log(isDiv, i, countUp, gcm);

        }
    }
}



// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
function findElement(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
}


// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

// The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

// Return the rest of the array, otherwise return an empty array.



function dropElements(arr, func) {
    var newArr = [];
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        console.log(count, arr[i]);
        if (func(arr[i]) === false) {
            count++;
        } else {
            break;
        }
    }
    arr.splice(0, count);
    return arr;
}

// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    var finalArr = [];
    var newStr = arr.join(' ');
    var count = 0;

    newStr = newStr.replace(/\W/gi, '');
    newStr = newStr.replace('objectObject', '{');
    newStr = newStr.split('');

    var arrBuild = newStr.map(function(num) {
        var makeNum = Number(num);
        if (Number.isNaN(makeNum)) {
            return num;
        } else {
            return makeNum;
        }

    });

    var objReplace = arrBuild.map(function(num, index) {
        if (num === '{') {
            arrBuild.splice(index, 1, {});
        } else {
            return num;
        }
    });

    return arrBuild;
}

// Return an English translated sentence of the passed binary string.
//
// The binary string will be space separated.


function binaryAgent(str) {
    var newStr = str.split(' ');
    var arr = newStr.map(function(num, index) {
        return String.fromCharCode(parseInt(num, 2));
    });
    return arr.join('');
}

// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

function truthCheck(collection, pre) {
    var isTrue = 0;

    for (var i = 0; i < collection.length; i++) {
        console.log(collection[i][pre], Boolean(collection[i][pre]));

        if (Boolean(collection[i][pre]) === false) {
            return false;
        } else {
            isTrue++;
        }
    }
    if (isTrue === collection.length) {
        return true;
    }
}

// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
//
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
//
// Calling this returned function with a single argument will then return the sum:
//
// var sumTwoAnd = addTogether(2);
//
// sumTwoAnd(3) returns 5.

function addTogether() {
    if (typeof(arguments[0]) !== 'number') {
        console.log('if', typeof(arguments[0]), typeof(arguments[1]));
        return undefined;
    } else if (arguments.length > 1) {
        console.log('elseif');
        if (typeof(arguments[0]) !== 'number' || typeof(arguments[1]) !== 'number') {
            return undefined;
        }
        return arguments[0] + arguments[1];
    } else {
        console.log('else');
        var arg = arguments[0];
        return function(y) {
            if (typeof(arg) !== 'number' || typeof(y) !== 'number') {
                return undefined;
            } else {
                return arg + y;
            }
        }
    }
}
