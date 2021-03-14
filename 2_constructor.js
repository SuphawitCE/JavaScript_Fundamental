
// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${title} was written by ${author} in ${year}`
    }
}

// Instatiate an Object
const book1 = new Book('Java', 'John', '2011');
const book2 = new Book('C', 'Bone', '2014');

console.log(book1);
console.log(book1.getSummary());
console.log(book2);



























