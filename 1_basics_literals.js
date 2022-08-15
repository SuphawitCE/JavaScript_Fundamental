const book1 = {
  title: 'JAVA Programming',
  author: 'Peter Parker',
  year: '2013',
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

const book2 = {
  title: 'C Programming',
  author: 'Beter Rarker',
  year: '2011',
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

//console.log(book2.getSummary());
//console.log(Object.values(book2));
//console.log(Object.keys(book2));
