function prototypeGreeting(greeting = 'Hello', name = 'John') {
  this.greeting = greeting;
  this.name = name;
}

prototypeGreeting.prototype.greet = function () {
  return `${this.greeting}, ${this.name}`;
};
const greetProto = new prototypeGreeting('Hi', 'Folks');
console.log(greetProto);
console.log(greetProto.greet());

///////////////////////////////////

class classGreeting {
  constructor(greeting = 'Hello1', name = 'world1') {
    this.greeting = greeting;
    this.name = name;
  }

  greet() {
    return `${this.greeting}, ${this.name}`;
  }
}

const classyGreeting = new classGreeting('Yo', 'Yoss');
console.log(classGreeting);
console.log(classyGreeting.greet());
