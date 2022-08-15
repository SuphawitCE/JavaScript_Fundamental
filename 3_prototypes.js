// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${title} was written by ${author} in ${year}`;
  };
}

//  getSummary
Book.prototype.getSummary = function () {
  return `${title} was written by ${author} in ${year}`;
};

//  getAge
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

//  Revise / Change year
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

// Instatiate an Object
const book1 = new Book('Java', 'John', '2011');
const book2 = new Book('C', 'Bone', '2014');

console.log(book2);
book2.revise('2018');
console.log(book2);
