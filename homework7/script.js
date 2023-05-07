// 1

let task;
let time; 

const makeSchedule = () => {

    const schedule = {};

    do {
        task = prompt("Task:")
        time = prompt("Time:")
        schedule[time] = task;
        
    }while(!time || !task);

    return schedule;
}

const res = makeSchedule();
console.log(res);










// 2


// const salaries = {
//     John: "4300.00",
//     Ann: "5700.40",
//     Pete: "4900.95",
//   };

// const salariesSum = (salaries) => {
//     let total = 0;
    
//     for(let employee in salaries) {
//         console.log(employee);
//         console.log(salaries[employee])
//         total += Number(salaries[employee]);
//     };

//     return total.toFixed(2);
// };

// const res = salariesSum(salaries);
// console.log(res);
