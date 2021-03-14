
// let ref = [1];
// let refCpy = ref;

// ref.push(2);

// console.log(ref, refCpy);
// console.log(ref === refCpy);

// function changeAgeAndReference(person) {
//     person.age = 25;
//     person = {
//         name: 'John',
//         age: 50
//     };
//     // console.log(person);
//     return person;
// }
// var personObj1 = {
//     name: 'Alex',
//     age: 30
// };
// var personObj2 = changeAgeAndReference(personObj1);

//console.log(personObj1);    // Alex 25
//console.log(personObj2);    // John 25


var personObj1 = {
    name: 'Alex',
    age: 30
};
var person = personObj1;
person.age = 25;
person = {
  name: 'john',
  age: 50
};
var personObj2 = person;

//  Obj1 = Alex 25
//  Obj2 = John 50
console.log(personObj1);
console.log(personObj2);

