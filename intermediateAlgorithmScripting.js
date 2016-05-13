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
