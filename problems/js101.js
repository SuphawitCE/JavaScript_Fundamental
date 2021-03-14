

// varTest = () => {
//     var x = 1;
//     if(1) {
//         var x = 2;
//         console.log('varTest1: ', x);
//     }
//     console.log('varTest2: ', x);
// }

// letTest = () => {
//     let x = 1;
//     if(1) {
//         let x = 2;
//         console.log('letTest1: ', x);
//     }
//     console.log('letTest2: ', x);
// }

// varTest();
// letTest();

// globalTest = () => {
//     x = 1;
//     if(1) {
//         x = 2;
//         console.log(x);
//     }
//     console.log(x);
// }
// globalTest();
// console.log(x);

// const main = () => {
//     plusNumber1(5, 10, (result) => {
//         console.log('result: ', result);
//     });
//     console.log('n2: ', plusNumber2(5,5));
// }

// const plusNumber1 = (num1, num2, callback) => {
//     callback(num1 + num2);
// }

// const plusNumber2 = (num1, num2) => {
//     return num1 + num2;
// }

//main();

// const pN = (num1, num2) => {
//     let result = num1 + num2;
//     // console.log(num1, num2);
//     return (number) => {
//         // console.log(num1, num2);
//         console.log('number: ', number);
//         return result + number;
//     }
// }
// let result = pN(10, 20)(10);
// console.log('result: ', result);

const plusN = (num1, num2) => {
    let result = num1 + num2;
    return (number) => {
        console.log('number: ', number);
        return result + number;
    }
}
let result = plusN(10, 20);
console.log('result', result);

let result2 = result(12);
console.log(result2);























