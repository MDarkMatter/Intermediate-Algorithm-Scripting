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
   for (var i = 0; i < numDigits.length; i++){
      if ( i === 0){
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
      } else if ( i === 1){
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
      } else if ( i === 2){
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
      } else if ( i === 3){
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
