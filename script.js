const myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function () {
    //     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    // }
}

// let someBook = new Book("A Title", "Author Name", 295, "read");
// console.log(someBook.info())

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    console.log(myLibrary);
}

function getBook() {
    let title = prompt("title?");
    let author = prompt("author?");
    let pages = prompt("pages?");
    let read = prompt("read it? y/n");
    addBookToLibrary(title, author, pages, read);
}

getBook();