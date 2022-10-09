// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//  getSummary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

//  Magazine Constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);

  this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine('Mag1', 'John Mag', '2014', 'Jan');

//console.log(mag1);

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);
