var assertEquals = require("./test-helper");

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function that returns the sum of an array
function sum(array) {
    var totalSum = 0;
    array.forEach(element => {
        totalSum = totalSum + element;
    });
    return totalSum;
}

assertEquals(sum([1, 2, 3, 4]), 10);
assertEquals(sum([10, 10, 10]), 30);

/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function that returns an array of even numbers
function evenNumbersOnly(array) {
    var evenArray = [];
    array.forEach(function(element) {
        if (element % 2 === 0) {
            evenArray.push(element);
        }
    })
    return evenArray;
}

assertEquals(evenNumbersOnly([1, 2, 3, 4]), [2, 4]);
assertEquals(evenNumbersOnly([10, 11, 12]), [10, 12]);

/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function that returns the sum of even numbers in the array
// hint: reuse the 2 functions that you defined earlier!
function sumEvenNumbers(array) {
    
    
    function evenNumbersOnly(array) {
        var evenArray = [];
        array.forEach(function(element) {
            if (element % 2 === 0) {
                evenArray.push(element);
            }
        })
        return evenArray;
    }
    var evenFilled = evenNumbersOnly(array);

    function sum(array) {
        var totalSum = 0;
        array.forEach(element => {
            totalSum = totalSum + element;
        });
        return totalSum;
    }
    return sum(evenFilled);
}

assertEquals(sumEvenNumbers([1, 2, 3, 4]), 6);
assertEquals(sumEvenNumbers([10, 11, 12]), 22);