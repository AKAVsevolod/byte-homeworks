//1

// for  (let i = 1 ; i <= 10 ; i++) {
//     console.log("i" + i);
// };

// let j = 1;

// while (j <= 10) {
//     console.log('j' + j);
//     j++;
// };

// let a = 1;

// do {
//     console.log("a" + a);
//     a++;
// } while(a <= 10 )

// for (let i = 20; i >= 10; i--) {
//     console.log("i" + i);
// }

// let j = 20;

// while (j >= 10) {
//     console.log("j" + j)
//     j--
// }

// let a = 20;

// do {
//     console.log('a' + a)
//     a--;
// } while (a >= 10);

// 2 


// const findNumber = (start, finish) => {
//     loop1:
//     for (i = start; i <= finish; i++) {
//         loop2:
//         for (j = 2 ; j < i; j++) {
//             if (i % j === 0) {
//                 continue loop1;
//             }
//         }
//         console.log(i)
//     } 
// }
// findNumber(4, 40)



// 3 

// const LOGIN = 'ADMIN';
// const PASSWORD = '1q2w3e';

// const authorize = () => {
//     let userLogin = prompt('Login');
//     let userPassword = prompt('Password:');
//     let isAuthSuccess = false;

//     for (i = 0; i <= 3; i++) {
//         if (i === 3) {
//             break;
//         }
//     do {
//         if (!userLogin) {
//             alert('Write your Login');
//             continue;
//         }

//         if (!userPassword) {
//             alert('Write you Password');
//             continue;
//         }

//         if (userLogin === LOGIN && userPassword === PASSWORD) {
//             isAuthSuccess = true;
//         } else {
//             alert('Wrong data')
//         }
//     } while (!isAuthSuccess)
// }

//     alert('Welcome')
// }

// authorize();


























// const LOGIN = 'admin';
// const PASSWORD = '1q2w3e';

// const authorize = () => {
//     let userLogin = prompt("Login:");
//     let userPassword = prompt("Password:");
//     let isAuthSuccess = false;
//     do {
//         if(!userLogin) {
//             alert('Write your Login')
//             continue
//         }

//         if(!userPassword) {
//             alert('Write your Password')
//         }

//         if(userLogin === LOGIN && userPassword === PASSWORD) {
//             isAuthSuccess = true;
//         } else {
//             alert('Wrong data')
//         }

//     } while(!isAuthSuccess)

//     alert("Welcome!")
// }

// authorize()
