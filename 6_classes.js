
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

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} year old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore() {
        return 'Banres & Noble';
    }

}

//  Instantiate Object
const book1 = new Book('C++', 'John Dang', '2011');


//console.log(book1);
// console.log(book1.getSummary());
book1.revise('2019');
//console.log(book1);

console.log(Book.topBookStore());

