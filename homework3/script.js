//1
// const a = 5;
// const b = 10;

// let additionAction;
// additionAction = a + b;
// console.log(`additionAction`, additionAction);

// let subtractionAction;
// subtractionAction = a - b;
// console.log(`subtractionAction`, subtractionAction);

// let multiplicationAction;
// multiplicationAction = a * b;
// console.log(`multiplicationAction`, multiplicationAction);

// let actionOfDivision;
// actionOfDivision = a / b;
// console.log(`actionOfDivision`, actionOfDivision);

// 2
// console.log(true && true) // true
// console.log(false || true) // true
// console.log(true && 'false') // true не зрозумів
// console.log(0 && 1 || ' ' && 42) // 42
// console.log(null == undefined) // true
// console.log('' == 0) // true
// console.log(1 === '1') // false
// console.log(NaN === NaN && true) // false
// console.log(true || false && true || false); // true
// console.log((true || false) && (true || false)); // true
// console.log(10 || 0 && 'dog' || ''); // 10 
// console.log((10 || 0) && ('dog' || '')); // dog

// 3

// let num1 = Number(prompt());
// let num2 = Number(prompt());
// let space = ' ';

// if (num1 > num2) {
//     alert('Number' + space + num1 + space +'is bigger then' + space + num2)
// } else if (num1 == num2) {
//     alert('Numbers are equal')
// } else {
//     alert('Number' + space + num1 + space +'is lower then' + space + num2)
// };

// 4 

let num1 = Number(prompt('Please enter Number1'));
let num2 = Number(prompt('Please enter Number2'));
let Operation = prompt('Which operation would you like to choose: +, -, *, / ?');

let additionAction = num1 + num2;
let subtractionAction = num1 - num2;
let multiplicationAction = num1 * num2;
let actionOfDivision = num1 / num2;
let space = ' ';

switch (Operation) {
    case '+' :
        alert('Result is' + space + additionAction);
        break;
    case '-' :
        alert('Result is' + space + subtractionAction);
        break;
    case '*' :
        alert('Result is' + space + multiplicationAction);
        break;
    case '/' :
        alert('Result is' + space + actionOfDivision);
        break;
    default :
    alert('Unidentified operation!')
}






