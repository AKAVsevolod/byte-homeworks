// 'use strict';


// let userName;
// let userSurname;
// let userPassword;
// let fullData;
// let isAuthSuccess = true;
// let isPasswordCorrect = true;


// userName = prompt('Name:');
// userSurname = prompt('Surname:');


// const authorize = () => {

//     do {
//         if(!userName) {
//             alert('Enter your Name:')
//             continue;
//         }
    
//         if(!userSurname) {
//             alert('Enter your Surname:')
//             continue;
//         }
//     } while(!isAuthSuccess);
    
//     fullData = (userName[0].toUpperCase() + userName.toLowerCase().slice(1)) + ' ' + (userSurname[0].toUpperCase() + userSurname.toLowerCase().slice(1));
//     return fullData;
// }

// authorize();


// userPassword = prompt('Password:');

// const isGoodPass = (pass) => {
//     let password = pass;
//     do {
//         if(!password) {
//             alert('Write your Password!');
//             continue;
//         }
//         if(password.length <= 6) {
//             alert('Your password must have more symbols!')
//             continue;
//         }
//         if (password.toLowerCase() == password) {
//             alert('You need to use capital letters!')
//             continue;
//         }
//         if (password.toUpperCase() == password) {
//             alert('You need to use small letters!')
//             continue;
//         }
//         return true;
//     } while(!isPasswordCorrect)
// }

// isGoodPass(userPassword);

// const logIn = (data, safePass) => {
//     let safePassword = safePass;
//     let userData = data;
//     while (safePassword != true) {
//         alert('Your password isn`t safe');
//         continue;
//     }

//     alert(userData);
// }

// logIn(authorize(), isGoodPass(userPassword));

// 2

let num;

const getRandomNumber = (min, max) => {  
    do {
       num = Math.floor(Math.random(num) * max)
    } while (num <= min)
    return num;
}

const res = getRandomNumber();
console.log(getRandomNumber(10, 20));


