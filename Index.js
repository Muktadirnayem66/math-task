// math - 1

let num1 = 6
let num2 = 6
let num3 = 7
let num4 = 10

let addition = num1 + num2
let sabtract = num4 - num3

let finalresult = addition * sabtract

function CheckedValue(value) {
    if(value%2 === 0){
        return "wel done"
    }else{
        return "not right"
    }
}

let evenOddResult = CheckedValue(finalresult)
console.log(evenOddResult);




//math 2

let result = 7 + 13 / 9 + 7;
let result2 = 100 / 2 * 6;

result = result * result2
let finalResult = result.toFixed(2)
console.log(Number(finalResult));


//Math 3

// Statement 1: The elephant weighs less than the mouse
const eleWeight = 100;
const mouseWeight = 2;
const weightComparison = eleWeight > mouseWeight
console.log(weightComparison);


// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;
const heightComparison = ostrichHeight > duckHeight
console.log(heightComparison);

// Statement 3: The two passwords match
const pass1 = 'stromboli';
const pass2 = 'stROmBoLi';

const pwdMatch = pass1 === pass2;
console.log(pwdMatch);