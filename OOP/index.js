// String
const name1 = 'Bank';
const name2 = new String('Bank');

if (name2 === 'Bank') {
  // console.log('Y');
} else {
  // console.log('N');
}

// console.log(typeof name2, '\n', typeof name1);

// Number
const num1 = 5;
const num2 = new Number(5);

// console.log(num1, num2);

if (num2 === 5) {
  // console.log('YES');
} else {
  // console.log('NO');
}

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

if (bool2 === true) {
  // console.log('YES');
} else {
  // console.log('NO');
}

// console.log(bool1, bool2);

// Function
const getSum1 = function (a, b) {
  return a + b;
};

const getSum2 = new Function('a', 'b', 'return a + b');

// console.log(getSum2(1, 1));

// Object
const obj1 = {
  name: 'John'
};

const obj2 = new Object({ name: 'John' });

if (obj1 === obj2) {
  // console.log('YES');
} else {
  // console.log('NO');
}

// console.log(obj2);

// Array
const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);

// Regular Expressions
const reg1 = /\w+/;
const reg2 = new RegExp('\\w+');

console.log(reg1, reg2);

// Person function constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthDay = new Date(dob);
  this.calculateAge = function () {
    const difference = Date.now() - this.birthDay.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 2017);
  };
}

const bank = new Person('Bank', '09-10-1998');
const john = new Person('John', 22);
// console.log(bank.calculateAge());
// console.log(john);
