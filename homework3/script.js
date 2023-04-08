//1
const a = 5;
const b = 10;

let additionAction;
additionAction = a + b;
console.log(`additionAction`, additionAction);

let subtractionAction;
subtractionAction = a - b;
console.log(`subtractionAction`, subtractionAction);

let multiplicationAction;
multiplicationAction = a * b;
console.log(`multiplicationAction`, multiplicationAction);

let actionOfDivision;
actionOfDivision = a / b;
console.log(`actionOfDivision`, actionOfDivision);

// 2
console.log(true && true) // true
console.log(false || true) // true
console.log(true && 'false') // true не зрозумів
console.log(0 && 1 || ' ' && 42) // 42
console.log(null == undefined) // true
console.log('' == 0) // true
console.log(1 === '1') // false
console.log(NaN === NaN && true) // false
console.log(true || false && true || false); // true
console.log((true || false) && (true || false)); // true
console.log(10 || 0 && 'dog' || ''); // 10 
console.log((10 || 0) && ('dog' || '')); // dog

