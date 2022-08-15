//  Object of Protos
const bookProtos = {
  getSummary: function () {
    return `${this.title} was written ${this.author}
        by ${this.year}`;
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${this.years} year old`;
  }
};

//  Create Object
// const book1 = Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'John Doe';
// book1.year = '2011';

const book1 = Object.create(bookProtos, {
  title: { value: 'Book One' },
  author: { value: 'John Dang' },
  year: { value: '2012' }
});

console.log(book1);
