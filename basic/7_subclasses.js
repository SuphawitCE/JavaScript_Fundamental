class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // Add method to a class
  getSummary() {
    return `${this.title} was written by ${this.author}
         in ${this.year}`;
  }
}

//  Magazine Subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

//  Instantiate Magazine
const mag1 = new Magazine('Mag 1', 'John D', '2011', 'Jan');

console.log(mag1.getSummary());
